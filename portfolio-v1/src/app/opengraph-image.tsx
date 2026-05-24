import { ImageResponse } from "next/og";

export const alt = "Mohamed Outerbah — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Dedicated 1200x630 social card (replaces the old portrait photo that cropped badly)
export default function OpengraphImage() {
  const chips = [
    "HaulHub · live on iOS & Android",
    "Analytics Depot · AI SaaS",
    "DzStore · 151 stores",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a0f1c 0%, #0b2545 55%, #0b7ec2 135%)",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            color: "#7dd3fc",
            fontWeight: 600,
          }}
        >
          FULL-STACK ENGINEER
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, marginTop: 10 }}>
          Mohamed Outerbah
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 33,
            color: "#cbd5e1",
            marginTop: 18,
            maxWidth: 940,
          }}
        >
          Next.js · React · React Native · Express · Python — production web
          &amp; mobile platforms
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 42 }}>
          {chips.map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.08)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 22,
                color: "#e2e8f0",
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: 50, fontSize: 24, color: "#94a3b8" }}>
          mohamedouterbah.com
        </div>
      </div>
    ),
    { ...size },
  );
}
