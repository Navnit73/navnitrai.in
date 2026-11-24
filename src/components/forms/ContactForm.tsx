"use client";

import * as React from "react";
import { CheckCircle2, MessageSquare, Send, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackConversion } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

const PROJECT_TYPES = [
  "Business Website Development",
  "Custom Website Development",
  "E-commerce Website Development",
  "Next.js / React.js / Vue.js App",
  "Landing Page Development",
  "Website Redesign",
  "Website Maintenance & Management",
  "Website Speed & SEO Optimization",
  "Full-Stack Web Application",
];

const BUDGET_RANGES = [
  "Under ₹25,000 (Landing Page / Small Scope)",
  "₹25,000 – ₹60,000 (Business Website)",
  "₹60,000 – ₹1,50,000 (E-Commerce / Custom Build)",
  "₹1,50,000+ (Full-Stack Web App / SaaS)",
  "Monthly Retainer (Maintenance / SEO Care)",
  "Not sure yet — Need scope consultation",
];

interface FormValues {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  description: string;
  website_url: string; // honeypot
}

function validate(v: FormValues): string | null {
  if (v.name.trim().length < 2) return "Please enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    return "Please enter a valid email address.";
  const digits = v.phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15)
    return "Please enter a valid phone or WhatsApp number.";
  if (v.description.trim().length < 15)
    return "Please describe your project in at least 15 characters.";
  if (v.description.length > 3000) return "Description must be under 3000 characters.";
  return null;
}

export function ContactForm({
  defaultProjectType = "",
  sourceContext = "contact_page",
}: {
  defaultProjectType?: string;
  sourceContext?: string;
}) {
  const [values, setValues] = React.useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    projectType: defaultProjectType || PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    description: "",
    website_url: "",
  });
  const loadedAtRef = React.useRef<number>(0);
  const [submitting, setSubmitting] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = React.useState<string | null>(null);

  React.useEffect(() => {
    loadedAtRef.current = Date.now();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    // Static site: validation and spam checks run in the browser.
    const validationError = validate(values);
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }
    // Bots fill the hidden honeypot field or submit instantly — pretend success.
    const isBot =
      values.website_url.trim().length > 0 ||
      (loadedAtRef.current > 0 && Date.now() - loadedAtRef.current < 1200);

    setSubmitting(true);

    trackConversion("contact_form_submit", {
      source: sourceContext,
      service: values.projectType,
    });

    const referenceId = `NR-${Date.now().toString(36).toUpperCase().slice(-6)}`;

    try {
      if (!isBot) {
        const mailResponse = await fetch(siteConfig.forms.formSubmitEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New enquiry ${referenceId}: ${values.projectType} — ${values.name}`,
            _template: "table",
            _captcha: "false",
            _replyto: values.email,
            Reference: referenceId,
            Name: values.name,
            email: values.email,
            Phone: values.phone,
            "Project Type": values.projectType,
            Budget: values.budget,
            "Project Details": values.description,
            "Sent From": window.location.href,
          }),
        });
        const mailData = (await mailResponse
          .json()
          .catch(() => ({}))) as { success?: string | boolean };

        if (!mailResponse.ok || String(mailData.success) !== "true") {
          setErrorMsg(
            "Your enquiry couldn't be sent right now. Please message me on WhatsApp or call — I'll reply quickly."
          );
          return;
        }
      }

      trackConversion("contact_form_success", {
        source: sourceContext,
        service: values.projectType,
      });

      setSubmittedRef(referenceId);
    } catch {
      setErrorMsg(
        "Network error while sending your enquiry. Please try again or reach out on WhatsApp."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submittedRef) {
    const waFollowup = `Hi Navnit, I submitted a project brief (Ref: ${submittedRef}) for ${values.projectType} (${values.budget}).`;

    return (
      <div
        role="status"
        className="border-2 border-[#0A0A0A] bg-[#FEF3C7] p-6 sm:p-8"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            aria-hidden="true"
            className="mt-0.5 h-6 w-6 shrink-0 text-[#0A0A0A]"
          />
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#92400E]">
              Enquiry Received • Reference #{submittedRef}
            </p>
            <h3 className="mt-1 text-xl font-bold text-[#0A0A0A]">
              Thank you, {values.name}. Your project brief has been recorded.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-800">
              {siteConfig.contact.responseWindow}. For faster review or urgent
              launch deadlines, send your reference ID directly on WhatsApp.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <TrackedExternalLink
                href={getWhatsAppUrl(waFollowup)}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                payload={{ source: "contact_form_success", service: values.projectType }}
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                <MessageSquare aria-hidden="true" className="h-4 w-4" />
                <span>Continue on WhatsApp</span>
              </TrackedExternalLink>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setSubmittedRef(null);
                  setValues((prev) => ({ ...prev, description: "" }));
                }}
              >
                Submit Another Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border border-[#0A0A0A] bg-white p-6 sm:p-8"
    >
      {/* Anti-spam honeypot field */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website_url">Leave this field blank</label>
        <input
          id="website_url"
          name="website_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website_url}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, website_url: e.target.value }))
          }
        />
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-2.5 border border-[#0A0A0A] bg-[#FEF3C7] p-4 text-sm font-medium text-[#0A0A0A]"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-[#0A0A0A]"
          >
            Full Name <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
            className="mt-1.5 w-full min-h-11 border border-neutral-400 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-500 focus:border-[#0A0A0A] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-[#0A0A0A]"
          >
            Email Address <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
            className="mt-1.5 w-full min-h-11 border border-neutral-400 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-500 focus:border-[#0A0A0A] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold text-[#0A0A0A]"
          >
            Phone / WhatsApp Number <span className="text-[#B45309]">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98XXX XXXXX"
            value={values.phone}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="mt-1.5 w-full min-h-11 border border-neutral-400 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-500 focus:border-[#0A0A0A] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-project-type"
            className="block text-sm font-semibold text-[#0A0A0A]"
          >
            Project Type <span className="text-[#B45309]">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            value={values.projectType}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, projectType: e.target.value }))
            }
            className="mt-1.5 w-full min-h-11 border border-neutral-400 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-budget"
            className="block text-sm font-semibold text-[#0A0A0A]"
          >
            Estimated Budget (INR) <span className="text-[#B45309]">*</span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            required
            value={values.budget}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, budget: e.target.value }))
            }
            className="mt-1.5 w-full min-h-11 border border-neutral-400 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] focus:border-[#0A0A0A] focus:outline-none"
          >
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-description"
            className="block text-sm font-semibold text-[#0A0A0A]"
          >
            Project Description &amp; Goals <span className="text-[#B45309]">*</span>
          </label>
          <textarea
            id="contact-description"
            name="description"
            required
            rows={5}
            placeholder="Share your business type, city, key pages or features needed, existing URL (if redesigning), and target launch timeline."
            value={values.description}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, description: e.target.value }))
            }
            className="mt-1.5 w-full border border-neutral-400 bg-white px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder:text-neutral-500 focus:border-[#0A0A0A] focus:outline-none"
          />
          <p className="mt-1.5 text-xs text-neutral-600">
            Minimum 15 characters. Your details remain strictly confidential.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          <Send aria-hidden="true" className="h-4 w-4" />
          <span>{submitting ? "Sending Enquiry..." : "Request Project Consultation"}</span>
        </Button>

        <TrackedExternalLink
          href={getWhatsAppUrl(
            `Hi Navnit, I want to discuss: ${values.projectType} (${values.budget}).`
          )}
          target="_blank"
          rel="noopener noreferrer"
          eventName="whatsapp_click"
          payload={{ source: "contact_form_alt", service: values.projectType }}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <MessageSquare aria-hidden="true" className="h-4 w-4" />
          <span>Prefer WhatsApp?</span>
        </TrackedExternalLink>
      </div>
    </form>
  );
}
