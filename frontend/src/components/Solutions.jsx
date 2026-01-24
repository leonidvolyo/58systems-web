import React from 'react';
import { Zap, Link, Cpu } from 'lucide-react';
import { solutions } from '../data/mock';

const iconMap = {
  Zap: Zap,
  Link: Link,
  Cpu: Cpu
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-600 font-medium text-sm tracking-wide uppercase mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
            What we do
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Three core services that transform how your business operates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {solutions.map((solution) => {
            const IconComponent = iconMap[solution.icon];
            return (
              <div key={solution.id} className="group">
                <div className="w-14 h-14 flex items-center justify-center bg-neutral-100 rounded-lg mb-6 group-hover:bg-amber-50 transition-colors duration-300">
                  <IconComponent size={26} className="text-neutral-700 group-hover:text-amber-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
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
