"use client";

import type { DitherField } from "#lib/dither";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { ditherParams, fieldValue, isFilled } from "#lib/dither";
import { cn } from "#utils";

interface AnimatedDitherProps {
  seed: string;
  field?: DitherField;
  noise?: number;
  density?: number;
  invert?: boolean;
  /** Override the seed-derived field centre, in [0, 1] box coordinates. */
  center?: [number, number];
  /**
   * `fit`: use `cols`/`rows`, cells stretch to the box (matches the static SVG).
   * `cover`: square cells of `cell` px, grid derived from the box size.
   */
  mode?: "fit" | "cover";
  cols?: number;
  rows?: number;
  cell?: number;
  /** Frames per second. Low on purpose: the stepped motion is the point. */
  fps?: number;
  /** Let the blob centre drift toward the pointer (fine pointers only). */
  cursor?: boolean;
  /** Server-rendered static <Dither> shown until the first canvas frame. */
  children?: ReactNode;
  className?: string;
}

const FRAME_SPEED = 0.18;

/**
 * Animated ordered-dither canvas. Same math as the static SVG (`ditherPath`),
 * plus slow drift of the field, per-cell shimmer and optional pointer pull.
 * Static under `prefers-reduced-motion`; paused when hidden or off-screen.
 */
export function AnimatedDither({
  seed,
  field = "blob",
  noise = 0.25,
  density = 1,
  invert = false,
  center,
  mode = "fit",
  cols = 64,
  rows = 32,
  cell = 8,
  fps = 8,
  cursor = false,
  children,
  className,
}: AnimatedDitherProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const params = ditherParams(seed);
    if (center) [params.cx, params.cy] = center;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    let width = 0;
    let height = 0;
    let gridCols = cols;
    let gridRows = rows;
    let frame = 0;
    let raf = 0;
    let last = 0;
    let visible = true;
    let cancelled = false;

    // Pointer target (normalised to the canvas box) and the smoothed centre.
    const pointer = { x: params.cx, y: params.cy, active: false };
    const pos = { x: params.cx, y: params.cy };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (mode === "cover") {
        gridCols = Math.ceil(width / cell);
        gridRows = Math.ceil(height / cell);
      }
    };

    const draw = (t: number) => {
      const color = getComputedStyle(canvas).color;
      const cw = mode === "cover" ? cell : width / gridCols;
      const ch = mode === "cover" ? cell : height / gridRows;

      // Slow drift of the field centre + pointer pull.
      const driftX = params.cx + 0.08 * Math.sin(t * 0.03 + params.angle);
      const driftY = params.cy + 0.08 * Math.cos(t * 0.021 + params.angle);
      const targetX = pointer.active ? pointer.x * 0.6 + driftX * 0.4 : driftX;
      const targetY = pointer.active ? pointer.y * 0.6 + driftY * 0.4 : driftY;
      pos.x += (targetX - pos.x) * 0.12;
      pos.y += (targetY - pos.y) * 0.12;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;

      for (let y = 0; y < gridRows; y++) {
        for (let x = 0; x < gridCols; x++) {
          const value = fieldValue(field, (x + 0.5) / gridCols, (y + 0.5) / gridRows, params, pos.x, pos.y);
          if (isFilled(x, y, value, { noise, density, invert }, params.seedInt, t)) {
            ctx.fillRect(Math.round(x * cw), Math.round(y * ch), Math.ceil(cw), Math.ceil(ch));
          }
        }
      }
    };

    const loop = (now: number) => {
      if (cancelled) return;
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      if (now - last < 1000 / fps) return;
      last = now;
      frame += 1;
      draw(frame * FRAME_SPEED);
    };

    const start = () => {
      resize();
      draw(0);
      setReady(true);
      if (!reduceMotion.matches) raf = requestAnimationFrame(loop);
    };

    const onMotionChange = () => {
      cancelAnimationFrame(raf);
      if (reduceMotion.matches) draw(0);
      else raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw(frame * FRAME_SPEED);
    });
    resizeObserver.observe(canvas);

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
    });
    intersection.observe(canvas);

    reduceMotion.addEventListener("change", onMotionChange);
    if (cursor && finePointer.matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }

    start();

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersection.disconnect();
      reduceMotion.removeEventListener("change", onMotionChange);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [seed, field, noise, density, invert, center, mode, cols, rows, cell, fps, cursor]);

  return (
    <div className={cn("relative", className)} aria-hidden>
      {children && (
        <div className={cn("absolute inset-0", ready && "invisible")}>{children}</div>
      )}
      <canvas ref={canvasRef} className={cn("absolute inset-0 size-full")} />
    </div>
  );
}
