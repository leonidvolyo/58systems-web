import React from 'react';
import { Zap, Link, Cpu } from 'lucide-react';
import { solutions, solutionsContent } from '../data/mock';

const iconMap = {
  Zap: Zap,
  Link: Link,
  Cpu: Cpu
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-[#E3B341] font-medium text-sm tracking-wide uppercase mb-4">
            {solutionsContent.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white/92 leading-tight">
            {solutionsContent.headline}
          </h2>
          <p className="mt-4 text-lg text-white/68">
            {solutionsContent.intro}
          </p>
          <p className="mt-2 text-sm text-white/45">
            {solutionsContent.context}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution) => {
            const IconComponent = iconMap[solution.icon];
            return (
              <div key={solution.id} className="group">
                <div className="w-14 h-14 flex items-center justify-center bg-white/[0.04] rounded-lg mb-6 group-hover:bg-[#E3B341]/[0.1] transition-colors duration-200">
                  <IconComponent size={26} className="text-white/68 group-hover:text-[#E3B341] transition-colors duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-white/92 mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/68 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
