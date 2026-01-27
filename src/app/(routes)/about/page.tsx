import type { Metadata } from "next";

import * as React from "react";
import { Heading } from "#components/ui/heading";
import { Paragraph } from "#components/ui/paragraph";

export const metadata: Metadata = {
  title: "About",
  description: "About Muhammaddiyor Tohirov — full‑stack TypeScript developer from Tashkent building production‑ready web platforms and Telegram bots.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage({ }: PageProps<"/about">) {
  return (
    <React.Fragment>
      <Heading size="h1">About</Heading>

      <section className="mt-6 max-w-3xl space-y-4">
        <Paragraph variant="mono" className="text-muted-foreground/90">
          Men Tohirov Muhammaddiyor Shuhrat o&apos;g&apos;li — Toshkentda yashovchi, 4+ yillik
          tijoriy tajribaga ega full‑stack TypeScript dasturchiman. 2019-yildan beri
          Node.js, TypeScript, React/Next.js, Vue/Nuxt va PHP/Laravel bilan e‑commerce
          platformalar, korporativ saytlar va ichki tizimlar ustida ishlayman.
        </Paragraph>

        <Paragraph variant="mono" className="text-muted-foreground/90">
          Faoliyatim davomida Zakiy, Adson, JOBO va Infoshop kabi kompaniyalar uchun
          backend va frontend qismlarini ishlab chiqqanman: REST API lar, Telegram botlar
          (jumladan Web App), SEO va SSR optimizatsiyasi, hamda biznes jarayonlarini
          avtomatlashtirishga qaratilgan yechimlar.
        </Paragraph>

        <Paragraph variant="mono" className="text-muted-foreground/90">
          Shaxsiy loyihalarim orasida mening portfoliom va blogim bo&apos;lgan
          {" "}
          <span className="text-foreground">takhirov.uz</span>
          , grammY asosidagi
          {" "}
          <span className="text-foreground">telegram-bot-starter</span>
          {" "}
          va kompilyatorlar dunyosiga kirish sifatida
          {" "}
          <span className="text-foreground">jovo-lang</span>
          {" "}
          loyihalari bor. Maqsadim — foydalanuvchilar uchun qulay, tezkor va ishonchli
          tizimlar yaratish, shu bilan birga yaxshi developer tajribasini (DX) ta&apos;minlash.
        </Paragraph>
      </section>
    </React.Fragment>
  );
}
