import { ImageResponse } from "next/og";
import { site } from "#config/site";
import { ditherPath } from "#lib/dither";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

interface OgImageOptions {
  title: string;
  subtitle?: string;
  /** Small label bottom-left, e.g. "Blog". */
  kind?: string;
  /** Small label bottom-right, e.g. "uz". */
  lang?: string;
  /** Seed for the dither strip. Defaults to the title. */
  seed?: string;
}

/** Loads the display font as TTF (Satori has no woff2 support). Falls back to the built-in font on failure. */
async function loadPixelFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch("https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@700", {
      headers: {
        // Old Safari UA makes Google Fonts serve TrueType.
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.10 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.10",
      },
    }).then(res => res.text());

    const url = /src:\s*url\(([^)]+)\)/.exec(css)?.[1];
    if (!url) return null;

    return await fetch(url).then(res => res.arrayBuffer());
  }
  catch {
    return null;
  }
}

const BG = "#101010";
const FG = "#e6e6e6";
const MUTED = "#8d8d8d";
const ACCENT = "#ff7b1c";

export async function ogImage({ title, subtitle, kind, lang, seed }: OgImageOptions) {
  const font = await loadPixelFont();
  const display = font ? "Pixelify Sans" : "Geist";
  const cols = 120;
  const rows = 8;
  const strip = ditherPath({ cols, rows, seed: seed ?? title, field: "diagonal", noise: 0.3 });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "56px 64px 48px",
          background: BG,
          color: FG,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 22, height: 22, background: ACCENT }} />
          <div style={{ fontFamily: display, fontSize: 34, fontWeight: 700 }}>{site.name.toLowerCase()}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 1040 }}>
          <div
            style={{
              fontFamily: display,
              fontSize: title.length > 48 ? 60 : 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ fontSize: 28, lineHeight: 1.35, color: MUTED, display: "block", overflow: "hidden", maxHeight: 76 }}>
              {subtitle}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <svg viewBox={`0 0 ${cols} ${rows}`} width={1072} height={48} preserveAspectRatio="none">
            <path d={strip} fill={FG} />
          </svg>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: MUTED }}>
            <div>{kind ?? site.url.replace(/^https?:\/\//, "")}</div>
            <div>{lang ?? ""}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: font
        ? [{ name: "Pixelify Sans", data: font, weight: 700, style: "normal" }]
        : undefined,
    },
  );
}
