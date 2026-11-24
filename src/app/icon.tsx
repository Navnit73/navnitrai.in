import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F59E0B",
          color: "#0A0A0A",
          border: "4px solid #0A0A0A",
          fontWeight: 800,
          fontSize: "28px",
        }}
      >
        NR
      </div>
    ),
    { ...size }
  );
}
