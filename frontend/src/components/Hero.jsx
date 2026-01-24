import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroContent } from '../data/mock';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight">
            {heroContent.headline}
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-neutral-600 leading-relaxed">
            {heroContent.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-colors duration-200"
            >
              {heroContent.ctaText}
              <ArrowRight size={18} />
            </a>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            {heroContent.secondaryText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
