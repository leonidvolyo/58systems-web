import React from 'react';
import { Check } from 'lucide-react';
import { whyUs } from '../data/mock';

const WhyUs = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div>
            <p className="text-amber-600 font-medium text-sm tracking-wide uppercase mb-4">
              Why 58 Systems
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
              Engineering-first approach
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              We're not consultants who hand you a PDF. We're engineers who build systems that work.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {whyUs.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-amber-100 rounded-full mt-0.5">
                  <Check size={14} className="text-amber-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
