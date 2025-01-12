import type React from "react";

export { BaseLayout } from "./base-layout";
export { RootLayout } from "./root-layout";

interface LayoutProps<P = unknown> extends React.PropsWithChildren {
  params: Promise<P>;
}

export type LayoutFC<P = unknown> = React.FunctionComponent<LayoutProps<P>>;
