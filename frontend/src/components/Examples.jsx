import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { examples } from '../data/mock';

const Examples = () => {
  return (
    <section id="examples" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-600 font-medium text-sm tracking-wide uppercase mb-4">
            Use Cases
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 leading-tight">
            Real examples, real results
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Here's what automation looks like in practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div
              key={example.id}
              className="group p-6 lg:p-8 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl font-semibold text-amber-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight size={20} className="text-neutral-300 group-hover:text-amber-600 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {example.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
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
