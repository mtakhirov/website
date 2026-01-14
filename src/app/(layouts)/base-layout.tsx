import Footer from "#components/widget/footer";
import Header from "#components/widget/header";
import { cn } from "#utils";

function BaseLayout({ children }: LayoutProps<"/">) {
  return (
    <body className={cn(`flex min-h-dvh flex-col`)}>
      <Header />

      <main className={cn("container grow")}>
        {children}
      </main>

      <Footer />
    </body>
  );
}

export default BaseLayout;
