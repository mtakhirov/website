"use client";

import { IconArrowLeft, IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { buttonVariants } from "#components/ui/button";
import { cn } from "#utils";

export function NotFoundClient() {
  return (
    <main
      className={cn(`
        relative flex min-h-[70vh] w-full flex-col items-center justify-center
        overflow-hidden px-4 py-20 text-center
      `)}
    >
      {/* Background Liquid Blob */}
      <div
        className={cn(`
          pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[400px]
          -translate-x-1/2 -translate-y-1/2 opacity-20
          dark:opacity-10
        `)}
      >
        <div
          className={cn(`
            size-full animate-pulse rounded-full bg-orange-500/10 blur-[120px]
            dark:bg-orange-600/5
          `)}
        />
      </div>

      {/* 404 Text Background */}
      <h1
        className={cn(`
          text-[clamp(8rem,20vw,15rem)] leading-none font-black tracking-tighter
          text-neutral-500/10 select-none
          dark:text-neutral-500/5
        `)}
      >
        404
      </h1>

      <div className="relative -mt-16 md:-mt-24">
        <h2
          className={cn(`
            text-2xl font-bold tracking-tight text-foreground
            md:text-3xl
          `)}
        >
          Sahifa topilmadi
        </h2>

        <p className="mt-4 max-w-sm text-muted-foreground md:text-lg">
          Kechirasiz, siz qidirayotgan sahifa vaqtinchalik o&apos;chirib tashlangan
          yoki manzili o&apos;zgargan bo&apos;lishi mumkin.
        </p>

        <div
          className={cn(`mt-10 flex flex-wrap items-center justify-center gap-4`)}
        >
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-6 transition-all hover:scale-105 active:scale-95",
            )}
          >
            <IconHome className="mr-2 size-4" />
            Bosh sahifaga qaytish
          </Link>

          <button
            onClick={() => window.history.back()}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              `
                rounded-full px-6 text-muted-foreground transition-all
                hover:scale-105 hover:text-foreground
                active:scale-95
              `,
            )}
          >
            <IconArrowLeft className="mr-2 size-4" />
            Orqaga qaytish
          </button>
        </div>
      </div>

      {/* Decorative glass line */}
      {/* <div
        className={cn(`
          mt-20 h-px w-24 bg-linear-to-r from-transparent via-border
          to-transparent
        `)}
      /> */}
    </main>
  );
}
