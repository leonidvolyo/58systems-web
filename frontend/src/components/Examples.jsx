import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { examples, examplesContent } from '../data/mock';

const Examples = () => {
  return (
    <section id="examples" className="py-20 lg:py-28 bg-[#111826]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-[#E3B341] font-medium text-sm tracking-wide uppercase mb-4">
            {examplesContent.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white/92 leading-tight">
            {examplesContent.headline}
          </h2>
          <p className="mt-4 text-lg text-white/68">
            {examplesContent.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div
              key={example.id}
              className="group p-6 lg:p-8 bg-[#0B0F14] border border-white/[0.06] rounded-lg hover:border-white/[0.1] transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl font-semibold text-[#E3B341]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight size={20} className="text-white/20 group-hover:text-[#E3B341]/60 transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-white/92 mb-2">
                {example.title}
              </h3>
              <p className="text-white/68 leading-relaxed">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;
