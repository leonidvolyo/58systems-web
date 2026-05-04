import React from "react";
import { Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const email = "info@58systems.com";

  return (
    <footer
      data-testid="site-footer"
      className="relative bg-ink border-t border-white/[0.06] pt-16 pb-10"
    >
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-6">
            <a href="#top" className="flex items-center gap-2.5">
              <img
                src={`${process.env.PUBLIC_URL || ""}/logo-58.png`}
                alt="58 Systems"
                className="h-7 w-auto select-none"
                draggable="false"
              />
              <span className="font-display text-[18px] tracking-tight text-white/95">
                Systems
              </span>
            </a>
            <p className="mt-5 max-w-md text-[14.5px] text-white/55 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] tracking-widest uppercase text-white/45 mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5">
              {t.footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-orange transition-colors"
                    data-testid={`footer-link-${link.href.replace("#", "")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[11px] tracking-widest uppercase text-white/45 mb-4">
              {t.footer.contactTitle}
            </h4>
            <a
              href={`mailto:${email}`}
              data-testid="footer-email"
              className="inline-flex items-center gap-2 text-[14px] text-white/85 hover:text-orange transition-colors"
            >
              <Mail size={15} />
              {email}
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12.5px] text-white/40">{t.footer.copyright}</p>
          <p className="text-[12.5px] text-white/35 font-mono">
            58 Systems · automation · integrations · AI where it makes sense
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
