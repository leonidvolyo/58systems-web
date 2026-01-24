import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ctaContent } from '../data/mock';

const CTA = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
            {ctaContent.headline}
          </h2>
          <p className="mt-6 text-lg text-neutral-400">
            Let's discuss how automation can help your business grow without growing pains.
          </p>
          <div className="mt-10">
            <a
              href="mailto:hello@58systems.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-colors duration-200"
            >
              {ctaContent.ctaText}
              <ArrowRight size={18} />
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            No commitment required. We'll analyze your current workflows and show you what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
