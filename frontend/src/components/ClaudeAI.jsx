import React from "react";
import { MessageSquare, Mail, Search, ArrowRight, Tag, FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [MessageSquare, Mail, Search, ArrowRight, Tag, FileText];

const ClaudeAI = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 lg:py-20 bg-paper-dim border-t border-ink/[0.07]">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-orange">{t.claude.eyebrow}</p>
            <h2 className="mt-4 font-display text-ink text-2xl sm:text-3xl lg:text-[38px] leading-[1.1] tracking-[-0.02em]">
              {t.claude.headline}
            </h2>
            <p className="mt-5 text-ink/62 text-[16px] leading-relaxed">{t.claude.lead}</p>
            <p className="mt-5 text-[14px] text-ink/45 italic border-l-2 border-orange/40 pl-4">
              {t.claude.note}
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-mono text-[11px] tracking-widest text-ink/42 uppercase mb-5">
              {t.claude.useCasesLabel}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.claude.useCases.map((item, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div key={item.title} className="flex gap-3">
                    <span className="w-8 h-8 flex-shrink-0 inline-flex items-center justify-center rounded-md bg-orange/10 border border-orange/25 text-orange mt-0.5">
                      <Icon size={15} />
                    </span>
                    <div>
                      <h4 className="font-display text-ink text-[15px] tracking-[-0.01em]">{item.title}</h4>
                      <p className="text-ink/55 text-[13.5px] leading-relaxed mt-0.5">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaudeAI;
