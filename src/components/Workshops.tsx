import React, { useState } from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  Bot, 
  FileCode, 
  Rocket, 
  Trophy, 
  CheckCircle2, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { WORKSHOPS, PERSONAL_INFO } from '../data/portfolioData';
import { WorkshopItem } from '../types';

export const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-7 h-7 text-brand-purple" />;
      case 'Bot':
        return <Bot className="w-7 h-7 text-brand-cyan" />;
      case 'FileCode':
        return <FileCode className="w-7 h-7 text-brand-blue" />;
      case 'Rocket':
        return <Rocket className="w-7 h-7 text-brand-purple-glow" />;
      case 'Trophy':
        return <Trophy className="w-7 h-7 text-brand-cyan" />;
      default:
        return <Sparkles className="w-7 h-7 text-brand-purple" />;
    }
  };

  const getAccentBorder = (accent: string) => {
    switch (accent) {
      case 'purple':
        return 'hover:border-brand-purple/50 group-hover:shadow-glow-purple/20';
      case 'cyan':
        return 'hover:border-brand-cyan/50 group-hover:shadow-glow-cyan/20';
      case 'blue':
        return 'hover:border-brand-blue/50 group-hover:shadow-glow-blue/20';
      default:
        return 'hover:border-white/30';
    }
  };

  const getTagBadge = (accent: string) => {
    switch (accent) {
      case 'purple':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/20';
      case 'cyan':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20';
      case 'blue':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
      default:
        return 'bg-white/10 text-slate-300 border-white/10';
    }
  };

  return (
    <section id="workshops" className="py-24 relative overflow-hidden bg-dark-900/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-3">
            <Flame className="w-3.5 h-3.5 text-brand-cyan" />
            <span>EDUCATIONAL CURRICULUM</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Sharing Knowledge. Building Skills.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Specialized technical programs designed for engineering colleges, bridging classroom fundamentals to modern AI architectures and live development.
          </p>
        </div>

        {/* Featured 5 Workshops Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {WORKSHOPS.map((workshop, idx) => {
            return (
              <div
                key={workshop.id}
                className={`group glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between transition-all duration-300 ${getAccentBorder(
                  workshop.accent
                )} ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                      {getIcon(workshop.icon)}
                    </div>
                    <span
                      className={`text-[11px] font-mono px-3 py-1 rounded-full border ${getTagBadge(
                        workshop.accent
                      )}`}
                    >
                      {workshop.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-purple-glow transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-cyan mt-1">
                    {workshop.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                    {workshop.description}
                  </p>

                  {/* Key Syllabus Points */}
                  <div className="mt-5 pt-4 border-t border-white/10 space-y-2.5">
                    {workshop.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Workshop Module
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedWorkshop(workshop)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-brand-cyan transition-colors"
                  >
                    <span>View Session Flow</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Organization Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left">
            <span className="text-xs font-mono text-brand-purple uppercase">
              {PERSONAL_INFO.organization}
            </span>
            <p className="text-sm text-slate-300 mt-0.5">
              Workshops delivered under official BRAIN O VISION university outreach & faculty coordination.
            </p>
          </div>
          <a
            href="#connect"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/10 transition-colors"
          >
            Invite for Workshop
          </a>
        </div>

      </div>

      {/* Modal for Workshop Session Flow */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand-purple/20 border border-brand-purple/30 text-brand-purple-glow">
                {getIcon(selectedWorkshop.icon)}
              </div>
              <div>
                <span className="text-xs font-mono text-brand-cyan uppercase">
                  Session Outline
                </span>
                <h3 className="text-lg font-display font-bold text-white">
                  {selectedWorkshop.title}
                </h3>
              </div>
            </div>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              {selectedWorkshop.description}
            </p>
            <div className="space-y-3 bg-dark-950/70 p-4 rounded-2xl border border-white/5 mb-6">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
                Core Workshop Curriculum:
              </span>
              {selectedWorkshop.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-brand-purple/20 text-brand-purple-glow font-mono flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Format: Hands-on + Live Coding
              </span>
              <button
                type="button"
                onClick={() => setSelectedWorkshop(null)}
                className="px-4 py-2 rounded-xl bg-brand-purple text-white text-xs font-semibold"
              >
                Close Outline
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
