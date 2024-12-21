import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntlPlugin = createNextIntlPlugin("./src/features/i18n/init.ts");

const nextConfig: NextConfig = {
  // Config
};

export default withNextIntlPlugin(nextConfig);
