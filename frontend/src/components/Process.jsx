import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const Process = () => {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      data-testid="process-section"
      className="relative py-20 lg:py-28 bg-paper border-t border-ink/[0.07]"
    >
      <div className="absolute inset-0 bg-grid-light opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" />
      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow text-orange">{t.process.eyebrow}</p>
            <h2 className="mt-4 font-display text-ink text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
              {t.process.headline}
            </h2>
          </div>
        </div>

        {/* Steps */}
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {t.process.steps.map((step, i) => (
            <li
              key={step.number}
              data-testid={`process-step-${i + 1}`}
              className="relative bg-white border border-ink/[0.08] rounded-xl p-6 hover:border-orange/40 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-orange text-[40px] leading-none tracking-tight">
                  {step.number}
                </span>
                <span className="font-mono text-[10.5px] text-ink/30 tracking-widest">
                  STEP
                </span>
              </div>
              <h3 className="font-display text-ink text-[19px] tracking-[-0.01em] mb-2">
                {step.title}
              </h3>
              <p className="text-ink/60 text-[14px] leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>

        {/* Capabilities */}
        <div className="border border-ink/[0.08] rounded-xl bg-ink/[0.02] p-6 lg:p-8">
          <p className="font-mono text-[11px] tracking-widest text-ink/42 uppercase mb-5">
            {t.process.capabilitiesLabel}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-5">
            {t.process.capabilities.map((c) => (
              <div key={c.group} data-testid={`capability-${c.group}`}>
                <h4 className="font-display text-ink text-[14.5px] mb-2">{c.group}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {c.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11.5px] text-ink/65 bg-ink/[0.04] border border-ink/[0.09] rounded-md px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
