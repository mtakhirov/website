"use client";

import { Printer } from "pixelarticons/react/Printer";
import { cn } from "#utils";
import { Button } from "./button";

export function PrintButton({ label }: { label: string }) {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => window.print()}
      className={cn("print-hidden")}
    >
      <Printer className={cn("size-4 crisp")} aria-hidden />
      {label}
    </Button>
  );
}
