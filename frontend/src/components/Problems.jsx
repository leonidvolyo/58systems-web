import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const Problems = () => {
  const { t } = useLanguage();

  return (
    <section
      id="problems"
      data-testid="problems-section"
      className="relative py-20 lg:py-28 bg-ink border-t border-white/[0.05]"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-orange">{t.problems.eyebrow}</p>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              {t.problems.headline}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="text-white/60 text-[16px] leading-relaxed">
              {t.problems.headline.endsWith("?") ? "" : ""}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
          {t.problems.cards.map((card, i) => (
            <div
              key={card.title}
              data-testid={`problem-card-${i + 1}`}
              className="bg-ink p-7 lg:p-9 hover:bg-ink-soft transition-colors duration-200"
            >
              <div className="flex items-start gap-5">
                <span className="font-mono text-[12px] text-orange/80 mt-1 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-white text-[20px] tracking-[-0.01em] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">{card.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
