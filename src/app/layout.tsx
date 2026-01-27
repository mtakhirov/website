import BaseLayout from "#app/layouts/base-layout";
import { geistMono, geistSans } from "#assets/fonts/geist";
import { cn } from "#utils";

// Main tailwind style
import "#assets/css/tailwind.css";

// Export metadata and viewport config's
export { metadata, viewport } from "#app/config";

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(geistSans.variable, geistMono.variable, `
        dark no-scrollbar antialiased
        selection:bg-foreground selection:text-background
      `)}
      suppressHydrationWarning
    >
      <BaseLayout {...props} />
    </html>
  );
};
