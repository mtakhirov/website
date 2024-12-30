import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";
import { z } from "zod";

export default createEnv({
  server: {
    SPOTIFY_ACCESS_TOKEN: z.string(),
  },

  client: {
    NEXT_PUBLIC_SPOTIFY_TOKEN: z.string(),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_SPOTIFY_TOKEN: process.env.NEXT_PUBLIC_SPOTIFY_TOKEN,
  },

  extends: [vercel()],
});
