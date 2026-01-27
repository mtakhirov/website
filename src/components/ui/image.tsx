import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { cn } from "#utils";

type ImageFit = "cover" | "contain" | "fill" | "scale-down";
type ImagePriority = "lcp" | "above-fold" | "lazy";

interface ImageProps extends Omit<NextImageProps, "loading" | "fetchPriority" | "priority"> {
  /**
   * Image loading priority:
   * - "lcp": Hero/LCP images - eager load with high priority
   * - "above-fold": Visible on load but not LCP - eager load
   * - "lazy": Below fold - lazy load (default)
   */
  priority?: ImagePriority;
  /**
   * How the image fits within its container
   */
  fit?: ImageFit;
  /**
   * Container aspect ratio (e.g., "16/9", "4/3", "1/1")
   */
  aspectRatio?: string;
  /**
   * Whether to wrap in aspect ratio container
   */
  contained?: boolean;
}

const fitClasses: Record<ImageFit, string> = {
  "cover": "object-cover",
  "contain": "object-contain",
  "fill": "object-fill",
  "scale-down": "object-scale-down",
};

/**
 * Responsive Image component with optimized loading strategies.
 *
 * @example
 * // Hero image (LCP)
 * <Image
 *   src="/hero.jpg"
 *   alt="Hero"
 *   width={1600}
 *   height={900}
 *   priority="lcp"
 *   sizes="100vw"
 * />
 *
 * @example
 * // Card image with aspect ratio
 * <Image
 *   src="/card.jpg"
 *   alt="Card"
 *   width={800}
 *   height={600}
 *   contained
 *   aspectRatio="4/3"
 *   fit="cover"
 *   sizes="(max-width: 768px) 100vw, 33vw"
 * />
 */
export function Image({
  priority = "lazy",
  fit = "cover",
  aspectRatio,
  contained = false,
  className,
  alt,
  ...props
}: ImageProps) {
  const loadingProps = getLoadingProps(priority);

  const imageElement = (
    <NextImage
      alt={alt}
      className={cn(
        contained && "h-full w-full",
        fitClasses[fit],
        className,
      )}
      {...loadingProps}
      {...props}
    />
  );

  if (contained && aspectRatio) {
    return (
      <div
        className="overflow-hidden"
        style={{ aspectRatio }}
      >
        {imageElement}
      </div>
    );
  }

  return imageElement;
}

function getLoadingProps(priority: ImagePriority) {
  switch (priority) {
    case "lcp":
      return {
        loading: "eager" as const,
        fetchPriority: "high" as const,
        priority: true,
      };
    case "above-fold":
      return {
        loading: "eager" as const,
        priority: false,
      };
    case "lazy":
    default:
      return {
        loading: "lazy" as const,
        priority: false,
      };
  }
}

/**
 * Generate sizes attribute for common layouts
 */
export const imageSizes = {
  /** Full viewport width */
  fullWidth: "100vw",
  /** Content width with max 800px */
  content: "(max-width: 768px) 100vw, 800px",
  /** 2-column grid */
  grid2: "(max-width: 768px) 100vw, 50vw",
  /** 3-column grid */
  grid3: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  /** 4-column grid */
  grid4: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  /** Fixed sidebar thumbnail */
  thumbnail: "150px",
  /** Card in sidebar */
  sidebar: "300px",
} as const;
