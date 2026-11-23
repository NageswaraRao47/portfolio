import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Building2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue p-[1px]">
                <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-bold text-xs tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    GNR
                  </span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-slate-100 text-base">
                  G. Nageswara Rao
                </span>
                <span className="text-xs font-mono text-brand-purple-glow block">
                  AI Engineer & Technology Trainer
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md mt-2 leading-relaxed">
              Turning Complex Technologies Into Practical Skills. Conducting high-impact college workshops across emerging AI, Agentic workflows, and software development.
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-brand-cyan" />
              <span>BRAIN O VISION – EdTech</span>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start md:justify-end gap-4">
            
            {/* Social Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 border border-white/10 hover:border-brand-blue/50 text-xs font-medium text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 border border-white/10 hover:border-brand-cyan/50 text-xs font-medium text-slate-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-dark-900 hover:bg-brand-purple/20 border border-white/10 hover:border-brand-purple/40 text-slate-400 hover:text-white transition-all"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright & Organization */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            <span>© 2026 G. Nageswara Rao. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span>AI Engineer & Technology Trainer</span>
            <span>•</span>
            <span className="text-slate-400">BRAIN O VISION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
