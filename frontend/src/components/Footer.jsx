
Action: file_editor create /app/frontend/src/components/Footer.jsx --file-text "import React from 'react';
import { footerContent } from '../data/mock';

const Footer = () => {
  return (
    <footer className=\"py-12 bg-[#0B0F14] border-t border-white/[0.06]\">
      <div className=\"max-w-6xl mx-auto px-6 lg:px-8\">
        <div className=\"flex flex-col md:flex-row md:items-center md:justify-between gap-6\">
          {/* Logo and tagline */}
          <div>
            <a href=\"/\" className=\"flex items-center gap-2\">
              <img 
                src=\"/logo-58.png\"
                alt=\"58\" 
                className=\"h-6 w-auto\"
              />
              <span 
                className=\"text-lg text-white/90 tracking-wide\"
                style={{ fontFamily: \"'Source Sans 3', sans-serif\", fontWeight: 700 }}
              >
                SYSTEMS
              </span>
            </a>
            <p className=\"mt-2 text-sm text-white/45\">
              {footerContent.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className=\"text-sm\">
            <a 
              href={`mailto:${footerContent.email}`}
              className=\"text-white/68 hover:text-white/92 transition-opacity duration-200\"
            >
              {footerContent.email}
            </a>
          </div>
        </div>

        <div className=\"mt-10 pt-8 border-t border-white/[0.06]\">
          <p className=\"text-sm text-white/45\">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"
Observation: Overwrite successful: /app/frontend/src/components/Footer.jsx