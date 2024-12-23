"use client";

import type React from "react";
import type { VariantProps } from "cva";

import * as SelectPrimitive from "@radix-ui/react-select";
import { triggerVariant } from "#shared/ui/select/variant";
import { ChevronDown } from "lucide-react";
import { cn } from "#shared/utils";

type TriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> &
  React.RefAttributes<HTMLButtonElement> &
  VariantProps<typeof triggerVariant>;

export const Trigger: React.FC<TriggerProps> = ({
  size,
  variant,
  className,
  children,
  ...props
}) => {
  const iconBased = size === "icon";
  const classNames = triggerVariant({ variant, size, className });

  return (
    <SelectPrimitive.Trigger className={cn(classNames)} {...props}>
      {children}

      {/* If select component not icon based */}
      {!iconBased && (
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="size-4 opacity-50" />
        </SelectPrimitive.Icon>
      )}
    </SelectPrimitive.Trigger>
  );
};
Trigger.displayName = SelectPrimitive.Trigger.displayName;
