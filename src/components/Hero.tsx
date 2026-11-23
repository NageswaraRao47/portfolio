import React, { useState } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Github, 
  ChevronDown, 
  Sparkles, 
  Bot, 
  Cpu, 
  Terminal, 
  Upload, 
  ExternalLink,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomPhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-brand-blue/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-brand-cyan/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Specialization Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-brand-purple/30 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-slate-300 tracking-wide font-medium">
                {PERSONAL_INFO.specialization}
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-4">
              <span className="block text-slate-100">G. NAGESWARA</span>
              <span className="text-gradient-purple-cyan block mt-1">
                RAO
              </span>
            </h1>

            {/* Main Headline */}
            <h2 className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 mb-6 leading-snug">
              “{PERSONAL_INFO.headline}”
            </h2>

            {/* Supporting Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-light">
              {PERSONAL_INFO.description}
            </p>

            {/* Key Micro-Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-9">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-brand-purple" />
                <span>B.Tech CSE (Cyber Security)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                <span>BRAIN O VISION</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-brand-purple/30 text-xs font-mono text-brand-purple-glow">
                <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                <span>10 Colleges Reached</span>
              </div>
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('journey')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan shadow-glow-purple/30 hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('connect')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-dark-900/80 border border-white/15 hover:border-brand-purple/50 hover:bg-white/5 active:scale-[0.98] transition-all duration-200"
              >
                <span>Connect With Me</span>
              </button>

              {/* Social icons */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-brand-blue hover:bg-brand-blue/10 transition-all duration-200"
                  aria-label="G. Nageswara Rao LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-200"
                  aria-label="G. Nageswara Rao GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait / Futuristic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan rounded-3xl blur-xl opacity-35 animate-pulse-slow" />
              
              {/* Main Futuristic Card */}
              <div className="relative rounded-3xl bg-dark-900/90 border border-white/15 p-6 backdrop-blur-xl shadow-glass overflow-hidden">
                
                {/* Cyber HUD Elements */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      SYS // EDTECH_LEADER
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-brand-cyan flex items-center gap-1">
                    <Cpu className="w-3 h-3" />
                    <span>MAY 2026 - PRESENT</span>
                  </div>
                </div>

                {/* Portrait Placeholder Container */}
                <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden bg-gradient-to-b from-dark-800 via-dark-850 to-dark-950 border border-white/10 flex flex-col items-center justify-center p-6 text-center group">
                  
                  {customPhoto ? (
                    <img 
                      src={customPhoto} 
                      alt="G. Nageswara Rao portrait" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <>
                      {/* Stylized AI Engineer Avatar Graphic */}
                      <div className="relative mb-4">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-brand-purple/30 via-brand-blue/20 to-brand-cyan/30 border-2 border-brand-purple/40 flex items-center justify-center shadow-glow-purple/20">
                          <Bot className="w-14 h-14 text-slate-100" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-dark-900 border border-brand-cyan flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-brand-cyan" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="font-display font-bold text-slate-100 text-lg">
                          G. Nageswara Rao
                        </p>
                        <p className="text-xs font-mono text-brand-purple-glow">
                          AI Engineer & Trainer
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1 max-w-[220px]">
                          BRAIN O VISION – EdTech
                        </p>
                      </div>

                      {/* Photo Replacement Helper Pill */}
                      <div className="mt-4 pt-3 border-t border-white/10 w-full flex flex-col items-center">
                        <label 
                          htmlFor="portrait-upload" 
                          className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-brand-purple/20 border border-white/10 hover:border-brand-purple/40 text-[11px] text-slate-300 hover:text-white transition-all duration-200"
                        >
                          <Upload className="w-3.5 h-3.5 text-brand-purple" />
                          <span>Click to replace with your photo</span>
                        </label>
                        <input 
                          id="portrait-upload" 
                          type="file" 
                          accept="image/*" 
                          onChange={handlePhotoUpload}
                          className="hidden" 
                        />
                        <span className="text-[10px] text-slate-500 mt-1 font-mono">
                          Supports JPG, PNG, WebP
                        </span>
                      </div>
                    </>
                  )}

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-purple/60" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-blue/60" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-cyan/60" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-purple/60" />
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>10 Colleges Reached</span>
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-brand-purple-glow hover:underline"
                  >
                    <span>Verified</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-xs font-mono tracking-wider uppercase">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 group-hover:border-brand-purple transition-colors">
              <div className="w-1.5 h-2.5 bg-brand-cyan rounded-full animate-bounce" />
            </div>
            <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-brand-purple transition-colors -mt-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

