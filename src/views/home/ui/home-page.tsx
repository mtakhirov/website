import type React from "react";

import { getTranslations } from "next-intl/server";
import { translationFormats } from "#views/home";

export const HomePage: React.FC = async () => {
  const t = await getTranslations("Home");

  return (
    <main id="home-page" className="container">
      <h1 className="text-4xl font-bold">{t("title")}</h1>

      <p className="mt-1 font-mono font-light [&_b]:font-semibold">
        {t.rich("description", translationFormats)}
      </p>

      <p className="mt-4 font-mono font-light text-white/50">
        {t.rich("fun-fact", translationFormats)}
      </p>
    </main>
  );
};
HomePage.displayName = "Home page";
