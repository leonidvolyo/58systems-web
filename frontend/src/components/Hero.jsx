import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { heroContent } from '../data/mock';

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => 
        (prev + 1) % heroContent.rotatingWords.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0B0F14] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="hero-glow" />
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white/92 leading-tight tracking-tight">
            {heroContent.headlineStart}{' '}
            <span 
              key={currentWordIndex}
              className={`text-[#E3B341] ${!prefersReducedMotion ? 'rotating-word' : ''}`}
            >
              {heroContent.rotatingWords[currentWordIndex]}
            </span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-white/68 leading-relaxed">
            {heroContent.subheadline}
          </p>
          <p className="mt-4 text-base text-white/50 leading-relaxed">
            {heroContent.supportingLine}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#contact"
              className="btn-premium inline-flex items-center gap-2 px-6 py-3.5 text-[#0B0F14] font-medium rounded"
            >
              {heroContent.ctaText}
              <ArrowRight size={18} />
            </a>
            <a
              href="#examples"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white/68 font-medium rounded border border-white/[0.1] hover:border-white/[0.2] hover:text-white/92 transition-all duration-200"
            >
              {heroContent.secondaryCtaText}
            </a>
          </div>
          <p className="mt-4 text-sm text-white/45">
            {heroContent.secondaryText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
