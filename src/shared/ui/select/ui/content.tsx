"use client";

import type React from "react";

import { cn } from "#shared/utils";
import * as SelectPrimitive from "@radix-ui/react-select";

type ContentProps = Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
  "position"
> &
React.RefAttributes<HTMLDivElement>;

export const Content: React.FC<ContentProps> = ({
  className,
  children,
  ...props
}) => {
  const classNames = cn(
    "relative z-50 max-h-96 min-w-32 overflow-hidden bg-black/90 text-white",
    "rounded-md border border-white/20 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95",
    "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    "data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
    className,
  );

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        position="popper"
        className={classNames}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "h-[var(--radix-select-trigger-height)] w-full",
            "min-w-[var(--radix-select-trigger-width)] p-1",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};
Content.displayName = SelectPrimitive.Content.displayName;
