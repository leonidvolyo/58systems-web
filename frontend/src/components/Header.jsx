import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.systems, href: "#systems" },
    { label: t.nav.cases, href: "#stories" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.analysis, href: "#analysis" },
  ];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-paper/92 backdrop-blur-xl border-b border-ink/[0.08]"
          : "bg-paper/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            data-testid="site-logo"
          >
            <img
              src={`${process.env.PUBLIC_URL || ""}/logo-58.png`}
              alt="58 Systems"
              className="h-7 lg:h-8 w-auto select-none"
              draggable="false"
            />
            <span className="font-display text-[18px] tracking-tight text-ink/90 hidden sm:inline">
              Systems
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isAnalysis = item.href === "#analysis";
              return (
                <a
                  key={item.label}
                  href={item.href}
                  data-testid={`nav-${item.href.replace("#", "")}`}
                  className={
                    isAnalysis
                      ? "relative text-[13.5px] font-medium text-orange-deep hover:text-orange transition-colors duration-150 px-3 py-1.5 rounded-md bg-orange/[0.10] ring-1 ring-orange/30 shadow-[0_0_24px_-6px_rgba(242,160,58,0.35)]"
                      : "text-[13.5px] font-medium text-ink/55 hover:text-ink transition-colors duration-150"
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageToggle variant="light" />
            <a
              href="#analysis"
              data-testid="header-cta"
              className="btn-orange inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-[13.5px]"
            >
              {t.nav.cta}
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-ink/70"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <nav
            className="lg:hidden py-5 border-t border-ink/[0.08] flex flex-col gap-1"
            data-testid="mobile-menu"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 text-[15px] font-medium text-ink/65 hover:text-ink"
                data-testid={`mobile-nav-${item.href.replace("#", "")}`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between mt-3">
              <LanguageToggle variant="light" />
              <a
                href="#analysis"
                onClick={() => setOpen(false)}
                className="btn-orange inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-[14px]"
                data-testid="mobile-header-cta"
              >
                {t.nav.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
