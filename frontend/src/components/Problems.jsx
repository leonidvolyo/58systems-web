import React from 'react';
import { AlertCircle } from 'lucide-react';
import { problems, problemsContent } from '../data/mock';

const Problems = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#111826]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-[#E3B341] font-medium text-sm tracking-wide uppercase mb-4">
            {problemsContent.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white/92 leading-tight">
            {problemsContent.headline}
          </h2>
          <p className="mt-4 text-lg text-white/68">
            {problemsContent.intro}
          </p>
          <p className="mt-3 text-base text-white/50">
            {problemsContent.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="group p-6 lg:p-8 bg-[#0B0F14] border border-white/[0.06] rounded-lg hover:border-white/[0.1] transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-white/[0.04] rounded">
                  <AlertCircle size={20} className="text-white/45" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/92 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-white/68 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
