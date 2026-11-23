import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Bot, 
  Mail, 
  Calendar, 
  Globe, 
  Play, 
  CheckCircle2, 
  Cpu,
  RefreshCw
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeAgentStep, setActiveAgentStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveAgentStep(1);
    setTimeout(() => setActiveAgentStep(2), 1200);
    setTimeout(() => setActiveAgentStep(3), 2400);
    setTimeout(() => {
      setActiveAgentStep(4);
      setIsSimulating(false);
    }, 3600);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/3 w-[450px] h-[450px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-xs font-mono text-brand-cyan mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>FEATURED IMPLEMENTATIONS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Building Beyond the Classroom
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Selected engineering projects demonstrating autonomous AI orchestration, machine learning classification, and real-time backend systems.
          </p>
        </div>

        {/* Project 1 Highlight: Multi-Agent AI Assistant with Interactive Simulator */}
        <div className="mb-12 glass-panel rounded-3xl p-6 sm:p-10 border border-brand-purple/30 shadow-glow-purple/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-md bg-brand-purple/20 text-brand-purple-glow text-xs font-mono font-medium">
                    Flagship Project
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Autonomous Multi-Agent System
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                  {PROJECTS[0].title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                  {PROJECTS[0].description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Specialized Agent Subsystems:
                  </h4>
                  {PROJECTS[0].architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {PROJECTS[0].techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/10 transition-colors"
                >
                  <FolderGit2 className="w-4 h-4 text-brand-purple" />
                  <span>View GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <span className="text-[11px] font-mono text-slate-400">
                  Interactive agent flow demonstration available on right →
                </span>
              </div>
            </div>

            {/* Right Interactive Simulator Column */}
            <div className="lg:col-span-6 bg-dark-950/80 rounded-2xl p-5 sm:p-6 border border-white/10">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-brand-purple" />
                  <span className="text-xs font-mono text-slate-200 font-semibold">
                    Live Multi-Agent Orchestration Visualizer
                  </span>
                </div>
                <button
                  type="button"
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-purple/20 hover:bg-brand-purple/30 text-brand-purple-glow text-xs font-mono border border-brand-purple/40 disabled:opacity-50 transition-all"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      <span>Executing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" />
                      <span>Run Simulation</span>
                    </>
                  )}
                </button>
              </div>

              {/* Agent Nodes Flow */}
              <div className="space-y-3">
                {/* Orchestrator Node */}
                <div
                  className={`p-3.5 rounded-xl border transition-all ${
                    activeAgentStep >= 1
                      ? 'bg-purple-950/30 border-brand-purple shadow-glow-purple/20'
                      : 'bg-dark-900 border-white/5 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-brand-purple" />
                      <span className="text-xs font-mono font-bold text-white">
                        1. Orchestrator Reasoning Engine
                      </span>
                    </div>
                    {activeAgentStep >= 1 && (
                      <span className="text-[10px] font-mono text-brand-cyan">Active / Routing</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Analyzing intent: split into Web Search, Mail, and Calendar sub-tasks.
                  </p>
                </div>

                {/* Sub-agents Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {/* Web Search Agent */}
                  <div
                    className={`p-3 rounded-xl border transition-all text-center ${
                      activeAgentStep >= 2
                        ? 'bg-cyan-950/30 border-brand-cyan text-slate-100'
                        : 'bg-dark-900 border-white/5 opacity-60 text-slate-400'
                    }`}
                  >
                    <Globe className="w-5 h-5 mx-auto mb-1 text-brand-cyan" />
                    <span className="text-[11px] font-mono font-semibold block">Search Agent</span>
                    <span className="text-[10px] text-slate-400">LLM Benchmarks retrieved</span>
                  </div>

                  {/* Calendar Agent */}
                  <div
                    className={`p-3 rounded-xl border transition-all text-center ${
                      activeAgentStep >= 3
                        ? 'bg-blue-950/30 border-brand-blue text-slate-100'
                        : 'bg-dark-900 border-white/5 opacity-60 text-slate-400'
                    }`}
                  >
                    <Calendar className="w-5 h-5 mx-auto mb-1 text-brand-blue" />
                    <span className="text-[11px] font-mono font-semibold block">Calendar Agent</span>
                    <span className="text-[10px] text-slate-400">Slot booked 3:00 PM</span>
                  </div>

                  {/* Mail Agent */}
                  <div
                    className={`p-3 rounded-xl border transition-all text-center ${
                      activeAgentStep >= 4
                        ? 'bg-purple-950/30 border-brand-purple text-slate-100'
                        : 'bg-dark-900 border-white/5 opacity-60 text-slate-400'
                    }`}
                  >
                    <Mail className="w-5 h-5 mx-auto mb-1 text-brand-purple" />
                    <span className="text-[11px] font-mono font-semibold block">Mail Agent</span>
                    <span className="text-[10px] text-slate-400">Invite dispatched</span>
                  </div>
                </div>

                {/* Output Terminal View */}
                <div className="mt-4 p-3 rounded-xl bg-black border border-white/10 font-mono text-[11px] text-slate-300">
                  <div className="text-slate-500 mb-1 flex items-center justify-between">
                    <span>TERMINAL OUTPUT</span>
                    <span className="text-emerald-400">STATUS: READY</span>
                  </div>
                  {activeAgentStep === 0 && (
                    <div className="text-slate-500">Click "Run Simulation" to observe multi-agent dispatch loop.</div>
                  )}
                  {activeAgentStep === 1 && (
                    <div className="text-brand-purple-glow">&gt; [Orchestrator] Task received. Decomposing queries...</div>
                  )}
                  {activeAgentStep === 2 && (
                    <div className="text-brand-cyan">&gt; [WebSearchAgent] Querying online index. Found 3 papers on Agentic AI.</div>
                  )}
                  {activeAgentStep === 3 && (
                    <div className="text-brand-blue-glow">&gt; [CalendarAgent] Checked availability. Slot confirmed.</div>
                  )}
                  {activeAgentStep === 4 && (
                    <div className="text-emerald-400">&gt; [MailAgent] Prepared and delivered briefing memo. Workflow completed!</div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Project 2 & Project 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Email Spam Detection */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-brand-blue/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-brand-blue/20 text-brand-blue-glow border border-brand-blue/30">
                  Machine Learning
                </span>
                <span className="text-xs font-mono text-slate-500">NLP Classification</span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                {PROJECTS[1].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-5">
                {PROJECTS[1].description}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                  Architecture Highlights:
                </span>
                {PROJECTS[1].architectureHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {PROJECTS[1].techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                Text Classification Pipeline
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-glow hover:underline"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Real-Time Telegram Chatbot */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-brand-cyan/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                  Academic Final Year
                </span>
                <span className="text-xs font-mono text-slate-500">Telegram Bot API</span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
                {PROJECTS[2].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-5">
                {PROJECTS[2].description}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                  Architecture Highlights:
                </span>
                {PROJECTS[2].architectureHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {PROJECTS[2].techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                Final Year B.Tech Project
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cyan hover:underline"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
