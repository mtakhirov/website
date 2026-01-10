// Load & validate environment variables from .env file
import "#env";

import type { NextConfig } from "next";
import { isDev } from "#env";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,

  experimental: {
    viewTransition: true,
    useLightningcss: true,
    browserDebugInfoInTerminal: isDev,
  },
};

export default nextConfig;
