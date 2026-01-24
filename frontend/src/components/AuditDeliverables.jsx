import React from 'react';
import { FileText, Zap, GitBranch, Target, Clock, ShieldCheck, FileOutput } from 'lucide-react';
import { auditDeliverables, auditContent, auditReassurance } from '../data/mock';

const iconMap = {
  0: FileText,
  1: Zap,
  2: GitBranch,
  3: Target
};

const reassuranceIcons = [Clock, ShieldCheck, FileOutput];

const AuditDeliverables = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#111826]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-[#E3B341] font-medium text-sm tracking-wide uppercase mb-4">
            {auditContent.label}
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white/92 leading-tight">
            {auditContent.headline}
          </h2>
          <p className="mt-4 text-lg text-white/68">
            {auditContent.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {auditDeliverables.map((item, index) => {
            const IconComponent = iconMap[index];
            return (
              <div
                key={item.id}
                className="p-6 bg-[#0B0F14] border border-white/[0.06] rounded-lg"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#E3B341]/[0.1] rounded mb-4">
                  <IconComponent size={20} className="text-[#E3B341]" />
                </div>
                <h3 className="text-base font-semibold text-white/92 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/68 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance list */}
        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            {auditReassurance.map((item, index) => {
              const IconComponent = reassuranceIcons[index];
              return (
                <div key={index} className="flex items-center gap-3">
                  <IconComponent size={16} className="text-white/40 flex-shrink-0" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditDeliverables;
