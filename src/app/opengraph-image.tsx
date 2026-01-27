import { ImageResponse } from "next/og";
import { APP_DESCRIPTION, APP_NAME } from "./config";

export const runtime = "nodejs";
export const alt = APP_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
          }}
        />

        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo/Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "32px",
                color: "white",
                fontWeight: 700,
              }}
            >
              MT
            </div>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {APP_NAME}
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "28px",
              color: "rgba(250, 250, 250, 0.6)",
              margin: 0,
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {APP_DESCRIPTION}
          </p>
        </div>

        {/* Footer URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "24px",
            color: "rgba(250, 250, 250, 0.4)",
            fontFamily: "monospace",
          }}
        >
          takhirov.uz
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
