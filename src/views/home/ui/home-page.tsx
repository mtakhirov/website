import type React from "react";

import { getTranslations } from "next-intl/server";
import { translationFormats } from "#views/home";

export const HomePage: React.FC = async () => {
  const t = await getTranslations("Home");

  return (
    <main id="home-page" className="container">
      <h1 className="text-2xl font-bold md:text-4xl">{t("title")}</h1>

      <p className="mt-1 font-mono text-sm font-light text-white/70 md:text-base [&_b]:font-semibold [&_b]:text-white">
        {t.rich("description", translationFormats)}
      </p>

      <p className="mt-4 font-mono text-xs font-extralight text-white/50 md:text-sm [&_b]:font-medium">
        {t.rich("fun-fact", translationFormats)}
      </p>
    </main>
  );
};
HomePage.displayName = "Home page";
