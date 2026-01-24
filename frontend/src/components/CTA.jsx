import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ctaContent } from '../data/mock';

const CTA = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white/92 leading-tight">
            {ctaContent.headline}
          </h2>
          <p className="mt-6 text-lg text-white/68">
            {ctaContent.subtext}
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@58systems.com"
              className="btn-premium inline-flex items-center gap-2 px-8 py-4 text-[#0B0F14] font-medium rounded"
            >
              {ctaContent.ctaText}
              <ArrowRight size={18} />
            </a>
          </div>
          <p className="mt-6 text-sm text-white/45">
            {ctaContent.reassurance}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
