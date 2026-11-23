import React, { useState } from 'react';
import { 
  Laptop, 
  Radio, 
  Lightbulb, 
  MessageSquareCode, 
  Sparkles
} from 'lucide-react';
import { TEACHING_PHILOSOPHY } from '../data/portfolioData';

export const TeachingPhilosophy: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-brand-purple" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-brand-blue" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-brand-cyan" />;
      case 'MessageSquareCode':
        return <MessageSquareCode className="w-6 h-6 text-brand-purple-glow" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-purple" />;
    }
  };

  return (
    <section id="philosophy" className="py-24 relative overflow-hidden bg-dark-900/40">
      {/* Background glow */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple-glow mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>PEDAGOGICAL APPROACH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            How I Make Technology Easier to Learn
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            My teaching philosophy combines hands-on experimentation, lucid real-world analogies, and interactive student engagement to turn passive listeners into active builders.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEACHING_PHILOSOPHY.map((pillar, idx) => {
            const isActive = activeCard === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveCard(idx)}
                className={`cursor-pointer glass-panel rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
                  isActive
                    ? 'border-brand-purple/60 bg-dark-850/90 shadow-glow-purple/20 -translate-y-1'
                    : 'border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  {/* Top indicator & number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-white/20 group-hover:text-brand-purple/40 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                      {getIcon(pillar.icon)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-purple-glow transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                {/* Practical Example Box */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-dark-950/70 border border-white/5">
                    <span className="text-[10px] font-mono uppercase text-brand-cyan tracking-wider block mb-1">
                      In The Classroom:
                    </span>
                    <p className="text-xs text-slate-400 italic">
                      "{pillar.example}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Core Quote */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-r from-brand-purple/10 via-brand-blue/10 to-brand-cyan/10 border border-white/10 backdrop-blur-md">
          <p className="font-display text-lg sm:text-xl text-slate-200 font-medium italic">
            “Teaching is not merely conveying syntax—it is instilling the confidence to decompose any complex engineering problem into solvable logical steps.”
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-brand-purple-glow">
            <span>— G. Nageswara Rao</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">AI Engineer & Technology Trainer</span>
          </div>
        </div>

      </div>
    </section>
  );
};
