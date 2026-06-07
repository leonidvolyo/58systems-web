import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const Problems = () => {
  const { t } = useLanguage();

  return (
    <section
      id="problems"
      data-testid="problems-section"
      className="relative py-14 lg:py-16 bg-paper border-t border-ink/[0.07]"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-orange">{t.problems.eyebrow}</p>
            <h2 className="mt-4 font-display text-ink text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              {t.problems.headline}
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {t.problems.cards.map((card, i) => (
            <div
              key={card.title}
              data-testid={`problem-card-${i + 1}`}
              className="bg-white border border-ink/[0.07] rounded-xl p-7 hover:border-orange/30 transition-colors duration-200 card-lift"
            >
              <div className="flex items-start gap-5">
                <span className="font-mono text-[12px] text-orange mt-1 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-ink text-[20px] tracking-[-0.01em] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-ink/62 text-[15px] leading-relaxed">{card.body}</p>
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
