"use client";

import type React from "react";

import { cn } from "#shared/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check } from "lucide-react";

type ItemProps = React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> &
  React.RefAttributes<HTMLDivElement>;

export const Item: React.FC<ItemProps> = ({
  className,
  children,
  ...props
}) => {
  const classNames = cn(
    "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5",
    "pl-2 pr-8 text-sm outline-none focus:bg-white/40 focus:text-white/90",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    className,
  );

  return (
    <SelectPrimitive.Item className={classNames} {...props}>
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};
Item.displayName = SelectPrimitive.Item.displayName;
