import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(100, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone or WhatsApp number.")
    .max(25, "Phone number is too long."),
  projectType: z
    .string()
    .trim()
    .min(2, "Please select a project type.")
    .max(120),
  budget: z.string().trim().min(2, "Please select an estimated budget.").max(120),
  description: z
    .string()
    .trim()
    .min(15, "Please describe your project in at least 15 characters.")
    .max(3000, "Description must be under 3000 characters."),
  website_url: z.string().optional().default(""),
  formLoadedAt: z.number().optional().default(0),
  sourcePage: z.string().max(200).optional().default("/contact"),
});

// Simple sliding-window in-memory rate limit per client IP
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, number[]>();

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip: string, now: number): boolean {
  const timestamps = (rateLimitStore.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  const now = Date.now();
  const clientIp = getClientIp(request);

  if (isRateLimited(clientIp, now)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Too many submissions in a short period. Please wait a few minutes or message on WhatsApp.",
      },
      { status: 429 }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request payload." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(rawBody);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      {
        ok: false,
        error: firstIssue?.message || "Please verify all required fields.",
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // 1. Honeypot check (bots commonly fill hidden fields)
  if (data.website_url.trim().length > 0) {
    return NextResponse.json(
      {
        ok: true,
        referenceId: "ACCEPTED",
      },
      { status: 200 }
    );
  }

  // 2. Minimum form fill latency guard against automated POST floods
  if (data.formLoadedAt > 0 && now - data.formLoadedAt < 1200) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Submission appeared automated. Please wait a second and try again.",
      },
      { status: 400 }
    );
  }

  const referenceId = `NR-${now.toString(36).toUpperCase().slice(-6)}`;

  const payload = {
    referenceId,
    receivedAt: new Date(now).toISOString(),
    sourcePage: data.sourcePage,
    name: data.name,
    email: data.email,
    phone: data.phone,
    projectType: data.projectType,
    budget: data.budget,
    description: data.description,
  };

  // Optional Webhook forwarding
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("[contact-api] webhook delivery error:", err);
    }
  }

  // Optional Resend email forwarding
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || "onboarding@resend.dev";

  if (resendKey && toEmail) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: data.email,
          subject: `[navnitrai.in ${referenceId}] ${data.projectType} — ${data.name}`,
          text: [
            `Reference: ${referenceId}`,
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone}`,
            `Project Type: ${data.projectType}`,
            `Budget: ${data.budget}`,
            `Source Page: ${data.sourcePage}`,
            "",
            "Project Description:",
            data.description,
          ].join("\n"),
        }),
      });
    } catch (err) {
      console.error("[contact-api] email delivery error:", err);
    }
  }

  console.info("[contact-api] enquiry recorded", {
    referenceId,
    projectType: data.projectType,
    budget: data.budget,
    sourcePage: data.sourcePage,
  });

  return NextResponse.json(
    {
      ok: true,
      referenceId,
    },
    { status: 201 }
  );
}
