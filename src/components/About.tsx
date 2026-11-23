import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Lightbulb, 
  Users, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Cpu
} from 'lucide-react';
import { ABOUT_DETAILS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple-glow mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT G. NAGESWARA RAO</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {ABOUT_DETAILS.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            {ABOUT_DETAILS.subheading}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Authentic Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-glass">
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-brand-purple/20 border border-brand-purple/40 text-brand-purple-glow">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-white">
                    AI Engineer & Technology Trainer
                  </h3>
                  <p className="text-xs font-mono text-brand-cyan">
                    {PERSONAL_INFO.organization}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                {ABOUT_DETAILS.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Core credentials summary */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <GraduationCap className="w-5 h-5 text-brand-purple flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Academic Foundation
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                    {PERSONAL_INFO.background}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <Cpu className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Emerging Tech Focus
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">
                    Generative AI, Agentic Workflows & Python
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {ABOUT_DETAILS.pillars.map((pillar, idx) => {
              const icons = [Cpu, Users, Layers, Lightbulb];
              const IconComponent = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-brand-cyan flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-display font-semibold text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Professional Practice</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

