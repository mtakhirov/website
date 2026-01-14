import * as React from "react";
import { cn } from "~/utils";

export default function Home({ }: PageProps<"/">) {
  return (
    <React.Fragment>
      <h1 className="text-2xl font-bold md:text-4xl">
        Muhammaddiyor Tohirov
      </h1>

      <p
        className={cn`
          mt-1 font-mono text-sm font-light text-white/70
          md:text-base
          [&_b]:font-semibold [&_b]:text-white
        `}
      >
        software developer va night-time coder/gamer
      </p>

      <p
        className={cn`
          mt-4 font-mono text-xs font-extralight text-white/50
          md:text-sm
          [&_b]:font-medium
        `}
      >
        * Yangi va innovatsion ilovalar xatoliklarni yaratadi
      </p>
    </React.Fragment>
  );
}
