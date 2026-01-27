"use client";

import { motion, useMotionValue, useScroll, useSpring } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "#utils";

/**
 * Custom Scrollbar Widget
 * A premium, interactive, and draggable scrollbar indicator with dynamic height.
 */
export function Scrollbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const trackRef = useRef<HTMLDivElement>(null);

  const y = useMotionValue(0);
  const isDragging = useRef(false);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 512,
    damping: 512 / 10,
    restDelta: 0.01,
  });

  const [isScrollable, setIsScrollable] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [thumbHeightRatio, setThumbHeightRatio] = useState(0.15); // Default 15%

  useEffect(() => {
    const handleCheck = () => {
      const { scrollHeight } = document.documentElement;
      const { innerHeight } = window;
      setIsScrollable(scrollHeight > innerHeight + 1);

      // Calculate dynamic thumb height ratio: (viewport / total)
      // We also enforce a min (5%) and max (50%) to keep it usable
      const ratio = Math.min(Math.max(innerHeight / scrollHeight, 0.05), 0.5);
      setThumbHeightRatio(ratio);
    };

    handleCheck();
    window.addEventListener("resize", handleCheck);
    return () => window.removeEventListener("resize", handleCheck);
  }, [pathname]);

  // Sync scroll position to thumb position when NOT dragging
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (!isDragging.current && trackRef.current) {
        const trackHeight = trackRef.current.offsetHeight;
        const thumbHeight = trackHeight * thumbHeightRatio;
        const maxDelta = trackHeight - thumbHeight;
        y.set(latest * maxDelta);
      }
    });
  }, [smoothProgress, y, thumbHeightRatio]);

  // Sync thumb position to scroll position when dragging
  const handleDrag = () => {
    if (trackRef.current) {
      const trackHeight = trackRef.current.offsetHeight;
      const thumbHeight = trackHeight * thumbHeightRatio;
      const maxDelta = trackHeight - thumbHeight;
      const progress = y.get() / maxDelta;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: progress * scrollHeight,
        behavior: "auto",
      });
    }
  };

  if (!isScrollable) {
    return null;
  }

  return (
    <div
      className={cn([
        `
          fixed top-0 right-0 z-100 flex h-full w-4 flex-col justify-center py-4
          transition-opacity duration-300
        `,
      ])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scroll Track */}
      <div
        ref={trackRef}
        className={cn([
          `
            relative mx-auto h-full w-1 rounded-full bg-white/5
            transition-colors duration-300
          `,
          isHovered && "w-1.5 bg-white/10",
        ])}
      >
        {/* Scroll Thumb/Indicator */}
        <motion.div
          drag="y"
          dragConstraints={trackRef}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={() => { isDragging.current = true; }}
          onDragEnd={() => { isDragging.current = false; }}
          onDrag={handleDrag}
          className={cn([
            `
              absolute left-0 w-full cursor-grab rounded-full bg-white/20
              transition-colors duration-300
              active:cursor-grabbing
            `,
            isHovered && "bg-white/40",
          ])}
          style={{
            height: `${thumbHeightRatio * 100}%`,
            y,
          }}
        />
      </div>
    </div>
  );
}

export default Scrollbar;
