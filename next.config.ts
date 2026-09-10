import type { NextConfig } from "next";
import { env, isDev } from "#env";

// Load & validate environment variables from .env file
import "#env";

const nextConfig: NextConfig = {
  allowedDevOrigins: env.DEV_ORIGINS,

  reactCompiler: true,
  typedRoutes: true,

  logging: {
    browserToTerminal: isDev,
  },
};

export default nextConfig;
