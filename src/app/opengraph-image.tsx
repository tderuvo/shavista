import { ImageResponse } from "next/og";

export const alt = "Shavista — A Fresh Take on the Shave.";
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
          justifyContent: "space-between",
          padding: 80,
          background: "#F7F3EC",
          color: "#49382E",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, fontWeight: 600 }}>SHAVISTA</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, letterSpacing: -3, lineHeight: 1 }}>A Fresh Take</div>
          <div style={{ fontSize: 92, letterSpacing: -3, lineHeight: 1.05, color: "#B7795C" }}>on the Shave.</div>
          <div style={{ fontSize: 30, marginTop: 30, color: "#655950" }}>
            Made for Barbers. Remembered by Clients.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <div style={{ width: 120, height: 10, borderRadius: 5, background: "#B7795C" }} />
          <div style={{ width: 60, height: 10, borderRadius: 5, background: "#84917B" }} />
          <div style={{ width: 30, height: 10, borderRadius: 5, background: "#E8DDCC" }} />
        </div>
      </div>
    ),
    size,
  );
}
