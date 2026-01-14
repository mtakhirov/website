import BaseLayout from "#app/layouts/base-layout";
import { geistMono, geistSans } from "#assets/fonts/geist";
import { cn } from "#utils";

import "#assets/css/tailwind.css";

export { metadata, viewport } from "#app/config";

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable, `
        dark no-scrollbar antialiased
        selection:bg-primary-foreground selection:text-accent-foreground
      `)}
      suppressHydrationWarning
    >
      <BaseLayout {...props} />
    </html>
  );
};
