import { ImageResponse } from "next/og";
import { APP_NAME } from "#app/config";

export const ogImageSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface OGImageOptions {
  title: string;
  description?: string;
  type?: "article" | "page" | "default";
  date?: string;
  tags?: string[];
}

/**
 * Generate a consistent OG image with customizable content.
 * Used by page-specific opengraph-image.tsx files.
 */
export function generateOGImage({
  title,
  description,
  type = "default",
  date,
  tags,
}: OGImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background effects */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: type === "article"
              ? "radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.1) 0%, transparent 50%)"
              : "radial-gradient(ellipse at top right, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
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

        {/* Top section - metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "white",
              fontWeight: 700,
            }}
          >
            MT
          </div>
          <span
            style={{
              fontSize: "24px",
              color: "rgba(250, 250, 250, 0.6)",
            }}
          >
            {APP_NAME}
          </span>

          {/* Type badge */}
          {type === "article" && (
            <div
              style={{
                marginLeft: "auto",
                padding: "8px 16px",
                borderRadius: "9999px",
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                color: "#22c55e",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              Article
            </div>
          )}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            position: "relative",
            zIndex: 1,
            maxWidth: "1000px",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: title.length > 40 ? "56px" : "64px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              style={{
                fontSize: "26px",
                color: "rgba(250, 250, 250, 0.6)",
                margin: 0,
                lineHeight: 1.4,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {tags.slice(0, 4).map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "rgba(250, 250, 250, 0.7)",
                    fontSize: "18px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {date && (
            <span
              style={{
                fontSize: "20px",
                color: "rgba(250, 250, 250, 0.4)",
              }}
            >
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          )}
          <span
            style={{
              fontSize: "20px",
              color: "rgba(250, 250, 250, 0.4)",
              fontFamily: "monospace",
              marginLeft: "auto",
            }}
          >
            takhirov.uz
          </span>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
    },
  );
}
