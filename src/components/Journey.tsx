import React from 'react';
import { 
  Building2, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  School,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { JOURNEY_DETAILS, PERSONAL_INFO } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-[450px] h-[450px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue-glow mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CAREER MILESTONE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {JOURNEY_DETAILS.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Real-world engineering leadership and educational impact through structured college workshops and technical sessions.
          </p>
        </div>

        {/* Highlight Milestone Banner */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-r from-brand-purple/20 via-brand-blue/20 to-brand-cyan/20 border border-brand-purple/40 p-6 sm:p-8 backdrop-blur-xl shadow-glass flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-purple/20 border border-brand-purple/50 flex items-center justify-center text-brand-purple-glow shadow-glow-purple/20 flex-shrink-0">
                <School className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider block">
                  Key Teaching Milestone
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
                  {JOURNEY_DETAILS.milestoneBadge}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Spearheading technical knowledge transfer across ~10 engineering institutions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="px-4 py-2 rounded-xl bg-dark-950/80 border border-white/10 text-center">
                <span className="block font-display font-bold text-2xl text-white">10</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Colleges Reached</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-dark-950/80 border border-white/10 text-center">
                <span className="block font-display font-bold text-2xl text-brand-cyan">100%</span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Solo Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-purple/30 pb-2">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-dark-950 border-2 border-brand-purple flex items-center justify-center shadow-glow-purple/50">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
            </div>

            {/* Experience Box */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-glass">
              
              {/* Header Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-purple/20 text-brand-purple-glow text-xs font-mono font-medium mb-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Current Active Role</span>
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    {JOURNEY_DETAILS.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 mt-1">
                    <span className="font-medium text-slate-100 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-brand-cyan" />
                      {JOURNEY_DETAILS.company}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">EdTech</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{JOURNEY_DETAILS.period}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mt-1">
                    {JOURNEY_DETAILS.duration}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                  <span>Key Responsibilities & Deliverables</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {JOURNEY_DETAILS.responsibilities.map((resp, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-brand-purple/30 transition-all duration-200 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Organization Tag */}
              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Joined in May 2026 (~6 Months Experience as of Nov 2026)</span>
                </div>
                <div className="text-brand-purple-glow">
                  {PERSONAL_INFO.organization}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
