import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const labelStyles = {
  real: "bg-orange/10 text-orange-deep border-orange/30",
  pilot: "bg-ink/[0.05] text-ink/70 border-ink/15",
  example: "bg-ink/[0.03] text-ink/55 border-ink/10",
};

const SystemStories = () => {
  const { t } = useLanguage();

  return (
    <section
      id="stories"
      data-testid="stories-section"
      className="relative py-20 lg:py-28 bg-paper-pure text-ink border-t border-ink/[0.07]"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-orange-deep">{t.stories.eyebrow}</p>
            <h2 className="mt-4 font-display text-ink text-3xl sm:text-4xl lg:text-[44px] leading-[1.08] tracking-[-0.02em]">
              {t.stories.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-ink/65 text-[16.5px] leading-relaxed">{t.stories.lead}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.stories.items.map((s, i) => (
            <article
              key={s.title}
              data-testid={`story-card-${i + 1}`}
              className="card-lift bg-white border border-paper-line rounded-2xl p-7 flex flex-col"
            >
              <span
                className={`inline-flex items-center self-start text-[11px] font-mono tracking-widest uppercase border rounded-full px-2.5 py-1 ${
                  labelStyles[s.label] || labelStyles.example
                }`}
                data-testid={`story-label-${i + 1}`}
              >
                {t.stories.labels[s.label]}
              </span>

              <h3 className="mt-5 font-display text-ink text-[22px] tracking-[-0.01em]">
                {s.title}
              </h3>

              <div className="mt-5 space-y-4 text-[14px] leading-relaxed">
                <Block label={t.stories.problemLabel} body={s.problem} />
                <Block label={t.stories.systemLabel} body={s.system} />
                <Block label={t.stories.connectsLabel}>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {s.connects.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center text-[11.5px] text-ink/65 bg-ink/[0.035] border border-ink/[0.08] rounded-md px-2 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </Block>
                <Block label={t.stories.resultLabel} body={s.result} accent />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Block = ({ label, body, children, accent }) => (
  <div>
    <div className="font-mono text-[10.5px] tracking-widest text-ink/45 uppercase mb-1">
      {label}
    </div>
    {body && (
      <p className={`${accent ? "text-orange-deep" : "text-ink/75"}`}>{body}</p>
    )}
    {children}
  </div>
);

export default SystemStories;
