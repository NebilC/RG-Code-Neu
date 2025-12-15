import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1A1A1A",
      }}
    >
      <img src="/images/logo2.png" alt="RG Logo" width="160" height="160" />
    </div>,
    {
      ...size,
    },
  )
}
