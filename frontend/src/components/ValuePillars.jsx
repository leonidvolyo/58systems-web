import React from "react";
import { Boxes, Plug, ShieldCheck, Coins } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [Boxes, Plug, ShieldCheck, Coins];

const ValuePillars = () => {
  const { t } = useLanguage();

  return (
    <section
      data-testid="values-section"
      className="relative py-14 lg:py-16 bg-ink border-t border-white/[0.05]"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-6">
            <p className="eyebrow text-orange">{t.values.eyebrow}</p>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              {t.values.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-white/65 text-[16.5px] leading-relaxed">{t.values.lead}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.values.pillars.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={p.title}
                data-testid={`value-pillar-${i + 1}`}
                className="card-lift relative bg-ink-soft border border-white/[0.07] hover:border-orange/40 rounded-xl p-7 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-11 h-11 inline-flex items-center justify-center rounded-md bg-orange/10 border border-orange/30 text-orange group-hover:bg-orange group-hover:text-ink transition-colors duration-200">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-[11px] text-white/40 tracking-widest">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-white text-[20px] tracking-[-0.01em] mb-2">
                  {p.title}
                </h3>
                <p className="text-white/60 text-[14.5px] leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
