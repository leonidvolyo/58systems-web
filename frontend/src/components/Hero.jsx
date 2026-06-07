import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SystemDiagram from "./SystemDiagram";

const Hero = () => {
  const { t } = useLanguage();

  // Highlight the last word of the headline in the accent color so the line
  // remains scannable in both EN and CS.
  const headlineWords = t.hero.headline.split(" ");
  const lead = headlineWords.slice(0, -1).join(" ");
  const tail = headlineWords[headlineWords.length - 1];

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 lg:pt-32 pb-10 lg:pb-12 bg-paper overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-light opacity-[0.55] [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />
      {/* Soft amber halo */}
      <div
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(242,160,58,0.45), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        {/*
          Layout (lg+):
            • Row 1: text-up-to-buttons (col 1–5) + diagram (col 6–12, justify-end)
            • Row 2: trust pills (col 1–5)
          Effect: the diagram bottom always aligns with the BUTTONS bottom,
          regardless of how the trust-pill text wraps in EN vs CS.

          On mobile, items stack naturally in source order:
            text-up-to-buttons → trust pills → diagram.
        */}
        <div className="lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-12 lg:gap-y-0">
          {/* === Left col, row 1 — eyebrow / headline / subheadline / buttons === */}
          <div className="lg:col-span-5 lg:row-start-1 lg:order-1 lg:pt-2">
            <p className="eyebrow text-orange" data-testid="hero-eyebrow">
              {t.hero.eyebrow}
            </p>
            <h1
              className="mt-5 font-display text-ink text-[40px] sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.04] tracking-[-0.03em]"
              data-testid="hero-headline"
            >
              {lead} <span className="text-orange">{tail}</span>
            </h1>
            <p
              className="mt-6 text-[16.5px] lg:text-[18px] text-ink/62 leading-relaxed max-w-xl"
              data-testid="hero-subheadline"
            >
              {t.hero.subheadline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#analysis"
                data-testid="hero-cta-primary"
                className="btn-orange inline-flex items-center gap-2 px-5 py-3.5 rounded-md text-[14.5px]"
              >
                {t.hero.ctaPrimary}
                <ArrowRight size={17} />
              </a>
              <a
                href="#systems"
                data-testid="hero-cta-secondary"
                className="btn-ghost-light inline-flex items-center gap-2 px-5 py-3.5 rounded-md text-[14.5px]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* === Left col, row 2 — (trust pills removed per user request) === */}

          {/* === Right col, row 1 — diagram, aligned to bottom of row 1
                so its bottom matches the buttons bottom in any language === */}
          <div className="mt-12 lg:mt-0 lg:col-span-7 lg:row-start-1 lg:order-2 lg:flex lg:flex-col lg:justify-end">
            <div className="relative">
              <p className="hidden lg:block absolute -top-9 right-0 text-[12px] text-ink/40 max-w-xs text-right">
                {t.hero.diagramTitle}
              </p>
              <SystemDiagram
                inputItems={t.hero.diagramInputItems}
                outputItems={t.hero.diagramOutputItems}
                centerLabel={t.hero.diagramCenter}
                subtitleLines={t.hero.engineSubtitle}
                title={t.hero.diagramTitle}
              />
              <p className="lg:hidden mt-3 text-[12.5px] text-ink/45 text-center">
                {t.hero.diagramTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
