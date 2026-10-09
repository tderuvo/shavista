import { ImageResponse } from "next/og";

export const alt = "SHAVISTA — The Art of a Better Shave.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Typographic placeholder share image. Replace with photography-led artwork at launch.
export default function OpengraphImage() {
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
          background: "radial-gradient(circle at 70% 30%, #3a3129 0%, #202321 60%)",
          color: "#F4F0E8",
          fontFamily: "serif",
        }}
      >
        <div style={{ width: 80, height: 1, background: "#A88658", marginBottom: 48 }} />
        <div style={{ fontSize: 104, letterSpacing: 40, paddingLeft: 40 }}>SHAVISTA</div>
        <div style={{ fontSize: 40, fontStyle: "italic", marginTop: 36, color: "#D9D3C8" }}>
          The Art of a Better Shave.
        </div>
        <div style={{ fontSize: 18, letterSpacing: 8, marginTop: 56, color: "#A88658", textTransform: "uppercase" }}>
          Modern Luxury · Timeless Craftsmanship
        </div>
      </div>
    ),
    size,
  );
}
