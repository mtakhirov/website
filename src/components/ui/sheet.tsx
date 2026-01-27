"use client";

import * as React from "react";
import { Drawer } from "vaul";
import { cn } from "#utils";

interface SheetContextValue {
  side: "left" | "right" | "top" | "bottom";
}

const SheetContext = React.createContext<SheetContextValue>({ side: "bottom" });

const useSheet = () => React.useContext(SheetContext);

type SheetProps = React.ComponentProps<typeof Drawer.Root> & {
  side?: "left" | "right" | "top" | "bottom";
};

function Sheet({
  side = "bottom",
  ...props
}: SheetProps) {
  return (
    <SheetContext.Provider value={{ side }}>
      <Drawer.Root
        direction={side}
        {...props}
      />
    </SheetContext.Provider>
  );
}

const SheetTrigger = Drawer.Trigger;

const SheetPortal = Drawer.Portal;

const SheetClose = Drawer.Close;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Drawer.Overlay>,
  React.ComponentPropsWithoutRef<typeof Drawer.Overlay>
>(({ className, ...props }, ref) => (
  <Drawer.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm", className)}
    {...props}
  />
));
SheetOverlay.displayName = "SheetOverlay";

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof Drawer.Content> {
  children: React.ReactNode;
  className?: string;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Drawer.Content>,
  SheetContentProps
>(({ className, children, ...props }, ref) => {
  const { side } = useSheet();

  const sideStyles = {
    left: "inset-y-0 left-0 w-3/4 max-w-sm border-r h-full",
    right: "inset-y-0 right-0 w-3/4 max-w-sm border-l h-full",
    top: "inset-x-0 top-0 h-auto border-b max-h-[80vh]",
    bottom: "inset-x-0 bottom-0 h-auto border-t max-h-[80vh]",
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <Drawer.Content
        ref={ref}
        className={cn(
          `
            fixed z-50 flex flex-col border-white/10 bg-zinc-950 p-6 shadow-lg
            outline-none
          `,
          sideStyles[side],
          className,
        )}
        {...props}
      >
        {/* Handle for bottom and top drawers */}
        {(side === "bottom" || side === "top") && (
          <div
            className={cn(
              "mx-auto mb-4 h-1.5 w-12 rounded-full bg-white/10",
              side === "top" && "order-last mt-4 mb-0",
            )}
          />
        )}
        {children}
      </Drawer.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = "SheetContent";

function SheetHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}
SheetHeader.displayName = "SheetHeader";

function SheetTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <Drawer.Title
      className={cn("text-lg font-semibold text-white", className)}
      {...props}
    />
  );
}
SheetTitle.displayName = "SheetTitle";

function SheetDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Drawer.Description
      className={cn("text-sm text-white/60", className)}
      {...props}
    />
  );
}
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
};
