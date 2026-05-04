import React from "react";
import { Workflow, Sparkles, Plug2, Wrench, UserCheck, Calculator } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [Workflow, Sparkles, Plug2, Wrench, UserCheck, Calculator];

const Why58Systems = () => {
  const { t } = useLanguage();

  return (
    <section
      data-testid="why-section"
      className="relative py-20 lg:py-28 bg-ink-soft border-t border-white/[0.05]"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-orange">{t.why.eyebrow}</p>
            <h2 className="mt-4 font-display text-white text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              {t.why.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-white/65 text-[16.5px] leading-relaxed">{t.why.lead}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.why.pillars.map((p, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={p.title}
                data-testid={`why-card-${i + 1}`}
                className="bg-ink border border-white/[0.07] hover:border-orange/40 rounded-xl p-6 transition-colors"
              >
                <span className="w-10 h-10 inline-flex items-center justify-center rounded-md bg-orange/10 border border-orange/25 text-orange mb-5">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-white text-[18px] mb-2">{p.title}</h3>
                <p className="text-white/60 text-[14px] leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Why58Systems;
