import type React from "react";

export { RootLayout } from "./root-layout";
export { BaseLayout } from "./base-layout";

interface LayoutProps<P = unknown> extends React.PropsWithChildren {
  params: Promise<P>;
}

export type LayoutFC<P = unknown> = React.FunctionComponent<LayoutProps<P>>;
