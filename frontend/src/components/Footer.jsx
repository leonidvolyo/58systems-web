import React from 'react';
import { footerContent } from '../data/mock';

const Footer = () => {
  return (
    <footer className="py-12 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo and tagline */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">58</span>
              <span className="text-xl font-light text-neutral-400 tracking-tight">Systems</span>
            </a>
            <p className="mt-2 text-sm text-neutral-500">
              {footerContent.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <a 
              href={`mailto:${footerContent.email}`}
              className="text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {footerContent.email}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-600">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
