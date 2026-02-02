import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const runtime = "edge";

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
          justifyContent: "center",
          padding: 72,
          background: "#0b0d10",
          color: "#f8fafc",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: -200,
            background:
              "radial-gradient(circle at 25% 20%, rgba(244,196,48,0.35), transparent 45%), radial-gradient(circle at 75% 70%, rgba(60,255,191,0.25), transparent 40%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", gap: 18, alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.16)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#f4c430",
              fontWeight: 900,
              letterSpacing: 1,
            }}
          >
            AK
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 900 }}>{site.brand.name.en}</div>
            <div style={{ fontSize: 24, opacity: 0.75 }}>{site.location.fullAddress.en}</div>
          </div>
        </div>

        <div style={{ position: "relative", marginTop: 28, fontSize: 52, fontWeight: 900 }}>
          {site.brand.tagline.en}
        </div>
        <div style={{ position: "relative", marginTop: 14, fontSize: 28, opacity: 0.85 }}>
          Strength • Cardio • Weight Loss • Personal Training
        </div>
      </div>
    ),
    size,
  );
}
