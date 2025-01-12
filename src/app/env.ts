import process from "node:process";

import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export default createEnv({
  server: {
    // NODE_ENV: z.string().default(DEFAULT_NODE_ENV),
  },

  client: {
    // NEXT_PUBLIC_NODE_ENV: z.string().default(DEFAULT_NODE_ENV),
  },

  shared: {
    IS_DEV: z
      .string()
      // transform to boolean
      .transform((s) => s === "development" || s === "preview"),
  },

  experimental__runtimeEnv: {
    IS_DEV: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
  },

  emptyStringAsUndefined: true,
  extends: [vercel()],
});
