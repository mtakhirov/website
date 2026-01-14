import { defineEnv } from "envin";
import { z } from "zod";

export const env = defineEnv({
  shared: {
    APP_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },

  server: {
    // allowed dev origins
    DEV_ORIGINS: z.string().transform(value => value.split(",")),
  },

  client: {
    //
  },

  clientPrefix: "NEXT_PUBLIC_",
});

export const isDev = env.APP_ENV === "development" || env.APP_ENV === "test";
