import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          color: "#FFFFFF",
          padding: "64px",
          border: "12px solid #F59E0B",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                backgroundColor: "#F59E0B",
                color: "#0A0A0A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "24px",
              }}
            >
              NR
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "28px", fontWeight: 700 }}>
                Navnit Rai
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: "#F59E0B",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                navnitrai.in
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#F59E0B",
              color: "#0A0A0A",
              padding: "10px 18px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            FREELANCE WEB DEVELOPER • INDIA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "980px",
            }}
          >
            Fast, SEO-Ready Websites, E-Commerce &amp; Full-Stack Web Apps
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#D4D4D4",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Next.js • React.js • TypeScript • Lucknow • Gorakhpur • Kanpur • Faridabad
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #262626",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#F59E0B",
          }}
        >
          <span>Direct Engineer Collaboration</span>
          <span>Core Web Vitals &amp; Conversion Focused</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
