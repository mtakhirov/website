import type { PropsWithChildren } from "react";

import { I18nProviderClient } from "@/locales/client";
import { FooterSection, HeaderSection } from "@/sections";

interface PageParams {
  params: { locale: string };
}

const I18nLayout: React.FC<PropsWithChildren<PageParams>> = ({
  children,
  params,
}) => {
  return (
    <I18nProviderClient locale={params.locale}>
      <HeaderSection />
      {children}
      <FooterSection />
    </I18nProviderClient>
  );
};
I18nLayout.displayName = "Localication Registerer Layout";

export default I18nLayout;
