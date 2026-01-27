import { cn } from "#utils";

const BLUR_LAYERS = [
  { blur: "0.25px", mask: "62.5%, 75%, 87.5%, 100%" },
  { blur: "0.5px", mask: "50%, 62.5%, 75%, 87.5%" },
  { blur: "1px", mask: "37.5%, 50%, 62.5%, 75%" },
  { blur: "2px", mask: "25%, 37.5%, 50%, 62.5%" },
  { blur: "4px", mask: "12.5%, 25%, 37.5%, 50%" },
  { blur: "8px", mask: "0%, 12.5%, 25%, 37.5%" },
  { blur: "16px", mask: "0%, 0%, 12.5%, 25%" },
  { blur: "32px", mask: "0%, 0%, 0%, 12.5%" },
];

function SmoothBackdrop() {
  return (
    <div
      className={cn`
        pointer-events-none absolute inset-x-0 -top-4 -bottom-4 -z-1
        overflow-hidden transition-opacity duration-200
      `}
    >
      {BLUR_LAYERS.map((layer, i) => (
        <div
          key={i}
          className="absolute inset-x-0 -top-4 bottom-0"
          style={{
            zIndex: i + 1,
            backdropFilter: `blur(${layer.blur})`,
            maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[0]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[1]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[2]}, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[3]})`,
            WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[0]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[1]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[2]}, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[3]})`,
          }}
        />
      ))}
      <div
        className={cn`
          absolute inset-x-0 -top-4 bottom-0 bg-linear-to-b from-background
          from-25% to-background/0
        `}
        style={{
          zIndex: BLUR_LAYERS.length + 1,
        }}
      />
    </div>
  );
}

export default SmoothBackdrop;
export { SmoothBackdrop };
