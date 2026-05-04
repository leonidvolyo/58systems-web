import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ProductSystems = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  return (
    <section
      id="systems"
      data-testid="products-section"
      className="relative py-20 lg:py-32 bg-paper text-ink"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />
      <div className="absolute inset-0 bg-grid-light opacity-50 [mask-image:linear-gradient(to_bottom,black_10%,transparent_85%)]" />

      <div className="relative max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-orange-deep">{t.products.eyebrow}</p>
            <h2 className="mt-4 font-display text-ink text-3xl sm:text-4xl lg:text-[48px] leading-[1.05] tracking-[-0.025em]">
              {t.products.headline}
            </h2>
          </div>
          <div className="lg:col-span-5 self-end">
            <p className="text-ink/65 text-[16.5px] leading-relaxed">{t.products.lead}</p>
          </div>
        </div>

        {/* Cards grid — every card uses the same vertical rhythm so dividers
            line up across all 6 cards, regardless of copy length. */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.products.items.map((item, i) => {
            const isActive = active === i;
            return (
              <article
                key={item.number}
                data-testid={`product-card-${i + 1}`}
                onMouseEnter={() => setActive(i)}
                className={`card-lift relative flex flex-col bg-white border rounded-2xl overflow-hidden transition-shadow duration-200 ${
                  isActive
                    ? "border-orange/60 shadow-[0_24px_60px_-32px_rgba(242,160,58,0.4)]"
                    : "border-paper-line hover:border-ink/20"
                }`}
              >
                {/* Top bar */}
                <div className="flex items-center justify-between px-6 pt-6">
                  <span className="font-mono text-[11px] tracking-widest text-orange-deep">
                    SYS / {item.number}
                  </span>
                  <span className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-ink/[0.04] text-ink/40">
                    <ArrowRight size={13} />
                  </span>
                </div>

                {/* Title — fixed min height so the next divider lines up */}
                <div className="px-6 pt-3 pb-2 min-h-[68px]">
                  <h3 className="font-display text-ink text-[22px] tracking-[-0.01em] leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Problem — fixed min height so all problem blocks share rhythm */}
                <div className="px-6 pb-4 min-h-[112px]">
                  <div className="font-mono text-[10.5px] tracking-widest text-ink/45 uppercase mb-1.5">
                    {t.products.problemLabel}
                  </div>
                  <p className="text-ink/70 text-[14px] leading-relaxed">{item.problem}</p>
                </div>

                <div className="border-t border-paper-line" />

                {/* Gets — always 4 visible items + "+N more" so the block
                    has a deterministic height across all cards. */}
                <div className="px-6 pt-4 pb-4 min-h-[176px]">
                  <div className="font-mono text-[10.5px] tracking-widest text-ink/45 uppercase mb-2">
                    {t.products.gotLabel}
                  </div>
                  <ul className="space-y-1.5">
                    {item.gets.slice(0, 4).map((g) => (
                      <li
                        key={g}
                        className="flex items-start gap-2 text-[13.5px] text-ink/75 leading-snug"
                      >
                        <Check
                          size={14}
                          className="text-orange-deep mt-0.5 flex-shrink-0"
                          strokeWidth={2.4}
                        />
                        <span>{g}</span>
                      </li>
                    ))}
                    {item.gets.length > 4 && (
                      <li className="text-[12.5px] text-ink/45 pl-6">
                        +{item.gets.length - 4} more
                      </li>
                    )}
                  </ul>
                </div>

                {/* Connects — pushes growing list to fill remaining space
                    above the outcome strip, so the outcome strip is always
                    aligned at the bottom. */}
                <div className="px-6 pt-2 pb-4 flex-1">
                  <div className="font-mono text-[10.5px] tracking-widest text-ink/45 uppercase mb-2">
                    {t.products.connectsLabel}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.connects.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center text-[11.5px] text-ink/65 bg-ink/[0.035] border border-ink/[0.08] rounded-md px-2 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome — fixed min height + line-clamp so all 6 outcome
                    bars are visually identical. */}
                <div className="bg-ink text-white px-6 py-4 min-h-[88px] flex flex-col justify-center">
                  <div className="font-mono text-[10.5px] tracking-widest text-orange uppercase mb-1">
                    {t.products.outcomeLabel}
                  </div>
                  <p
                    className="text-[13.5px] leading-snug text-white/85"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.outcome}
                  </p>
                </div>

                <a
                  href="#analysis"
                  data-testid={`product-cta-${i + 1}`}
                  className="block px-6 py-3.5 text-[13.5px] font-medium text-orange-deep hover:bg-orange/5 border-t border-paper-line transition-colors"
                >
                  {t.products.cardCta} →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSystems;
