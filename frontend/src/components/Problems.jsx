import React from 'react';
import { AlertCircle } from 'lucide-react';
import { problems } from '../data/mock';

const Problems = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-500 font-medium text-sm tracking-wide uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Sound familiar?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Most growing businesses face these challenges. The good news? They're all solvable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="p-6 lg:p-8 bg-neutral-900 border border-neutral-800 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-neutral-800 rounded">
                  <AlertCircle size={20} className="text-neutral-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
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
