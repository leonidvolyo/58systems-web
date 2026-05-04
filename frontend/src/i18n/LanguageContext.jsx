import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, SUPPORTED_LANGUAGES } from "./translations";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  languages: SUPPORTED_LANGUAGES,
});

const STORAGE_KEY = "58s.lang";

const detectInitial = () => {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch (_) {
    /* ignore */
  }
  const browser = (navigator.language || "en").toLowerCase();
  if (browser.startsWith("cs") || browser.startsWith("sk")) return "cs";
  return "en";
};

export const LanguageProvider = ({ children }) => {
  // Synchronous lazy init avoids a flash of EN content for CS visitors.
  const [lang, setLangState] = useState(() => detectInitial());

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (next) => {
    if (!translations[next]) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (_) {
      /* ignore */
    }
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang] || translations.en,
      languages: SUPPORTED_LANGUAGES,
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
