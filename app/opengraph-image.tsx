import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Barber Supply Hub — Best Barber Tools Chosen By Pros";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0b0c",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #242428",
            borderRadius: 24,
            padding: "60px 80px",
            backgroundColor: "#121214",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: "#ffd400", marginBottom: 20 }}>
            BARBER SUPPLY HUB
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, color: "#f5f5f5", marginBottom: 16, textAlign: "center" }}>
            Best Barber Tools
          </div>
          <div style={{ fontSize: 28, color: "#a7a7ad", marginBottom: 40, textAlign: "center" }}>
            Chosen By Pros — Expert Picks & Honest Comparisons
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#ffd400",
              borderRadius: 12,
              padding: "14px 40px",
              fontSize: 20,
              fontWeight: 700,
              color: "#0b0b0c",
            }}
          >
            Start with Picks →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
