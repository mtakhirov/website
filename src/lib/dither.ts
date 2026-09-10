import { fnv1a, hash2, mulberry32 } from "#utils";

/* 8x8 Bayer threshold matrix (0..63). */
export const BAYER8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
] as const;

export type DitherField = "radial" | "diagonal" | "vertical" | "noise" | "blob";

export interface DitherOptions {
  cols: number;
  rows: number;
  /** Any string: page slug, title, etc. Same seed = same pattern. */
  seed: string;
  field?: DitherField;
  /** 0..1 how much per-cell noise is mixed into the field. */
  noise?: number;
  /** Invert filled/empty cells. */
  invert?: boolean;
  /** Multiplier on the field before thresholding. <1 = sparser, >1 = denser. */
  density?: number;
  /** Override the seed-derived field centre, in [0, 1] box coordinates. */
  center?: [number, number];
}

/** Seed-derived shape parameters shared by the static SVG and the animated canvas. */
export interface DitherParams {
  seedInt: number;
  cx: number;
  cy: number;
  angle: number;
  scale: number;
}

export function ditherParams(seed: string): DitherParams {
  const seedInt = fnv1a(seed);
  const rand = mulberry32(seedInt);
  return {
    seedInt,
    cx: 0.3 + rand() * 0.4,
    cy: 0.3 + rand() * 0.4,
    angle: rand() * Math.PI * 2,
    scale: 0.9 + rand() * 0.6,
  };
}

/** Smooth scalar field in [0, 1] for a cell centre (u, v) in [0, 1]. */
export function fieldValue(field: DitherField, u: number, v: number, p: DitherParams, cx = p.cx, cy = p.cy): number {
  switch (field) {
    case "diagonal":
      return ((u * Math.cos(p.angle) + v * Math.sin(p.angle)) * p.scale + 0.5) % 1;
    case "vertical":
      return v * p.scale;
    case "noise":
      return 0.5;
    case "blob": {
      const dx = (u - cx) * 1.4;
      const dy = (v - cy) * 1.4;
      return Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) * p.scale);
    }
    case "radial":
    default: {
      const dx = u - cx;
      const dy = v - cy;
      return Math.min(1, Math.sqrt(dx * dx + dy * dy) * p.scale * 1.6);
    }
  }
}

/** Per-cell noise. `t` (frames) makes it shimmer; `t = 0` is the static frame. */
export function cellNoise(x: number, y: number, seedInt: number, t = 0): number {
  const phase = hash2(x, y, seedInt);
  if (t === 0) return phase;
  const speed = 0.25 + hash2(y, x, seedInt ^ 0x9E3779B9) * 0.5;
  return 0.5 + 0.5 * Math.sin(phase * Math.PI * 2 + t * speed);
}

export function isFilled(
  x: number,
  y: number,
  value: number,
  { noise = 0.2, density = 1, invert = false }: Pick<DitherOptions, "noise" | "density" | "invert">,
  seedInt: number,
  t = 0,
): boolean {
  let v = value;
  if (noise > 0) v = v * (1 - noise) + cellNoise(x, y, seedInt, t) * noise;
  v *= density;
  const threshold = (BAYER8[y % 8]![x % 8]! + 0.5) / 64;
  return (v > threshold) !== invert;
}

/**
 * Ordered (Bayer) dithering of a smooth scalar field into a single SVG path.
 * Deterministic for a given seed, so it renders identically on server and client.
 */
export function ditherPath({ cols, rows, seed, field = "radial", noise = 0.2, invert = false, density = 1, center }: DitherOptions): string {
  const p = ditherParams(seed);
  if (center) [p.cx, p.cy] = center;
  const cells: string[] = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const value = fieldValue(field, (x + 0.5) / cols, (y + 0.5) / rows, p);
      if (isFilled(x, y, value, { noise, density, invert }, p.seedInt)) {
        cells.push(`M${x} ${y}h1v1h-1z`);
      }
    }
  }

  return cells.join("");
}
