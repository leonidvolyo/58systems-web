import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Tiny EN / CS toggle. Shows both options as a segmented control.
 */
const LanguageToggle = ({ className = "", variant = "dark" }) => {
  const { lang, setLang, languages } = useLanguage();

  const baseRail =
    variant === "dark"
      ? "border-white/15 bg-white/[0.04]"
      : "border-paper-line bg-white";
  const baseInactive =
    variant === "dark"
      ? "text-white/55 hover:text-white"
      : "text-ink/60 hover:text-ink";
  const baseActive =
    variant === "dark"
      ? "bg-white text-ink"
      : "bg-ink text-white";

  return (
    <div
      className={`inline-flex items-center rounded-full border ${baseRail} p-0.5 ${className}`}
      role="group"
      aria-label="Language"
      data-testid="language-toggle"
    >
      {languages.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            data-testid={`language-toggle-${l.code}`}
            className={`px-3 py-1 text-[11px] font-mono tracking-widest rounded-full transition-colors duration-150 ${
              active ? baseActive : baseInactive
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
