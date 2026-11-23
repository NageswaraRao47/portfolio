import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  Terminal,
  Search,
  CheckCircle2
} from 'lucide-react';
import { TECHNICAL_EXPERTISE } from '../data/portfolioData';

export const TechnicalExpertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    ai: <Sparkles className="w-5 h-5 text-brand-purple" />,
    programming: <Code2 className="w-5 h-5 text-brand-blue" />,
    development: <Layers className="w-5 h-5 text-brand-cyan" />,
    frameworks: <Cpu className="w-5 h-5 text-brand-purple-glow" />
  };

  const getFilteredCategories = () => {
    return TECHNICAL_EXPERTISE.categories
      .filter((cat) => activeTab === 'all' || cat.id === activeTab)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const matchingItems = cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...cat, items: matchingItems };
      })
      .filter((cat) => cat.items.length > 0);
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section id="expertise" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple-glow mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TECHNICAL DOMAINS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {TECHNICAL_EXPERTISE.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            {TECHNICAL_EXPERTISE.subheading}
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-sm'
                  : 'bg-dark-900/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              All Domains (4)
            </button>
            {TECHNICAL_EXPERTISE.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  activeTab === cat.id
                    ? 'bg-white/15 text-white border border-brand-purple/50 shadow-sm'
                    : 'bg-dark-900/80 text-slate-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-dark-900/80 border border-white/10 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-purple/50 transition-colors"
            />
          </div>

        </div>

        {/* Categories Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 shadow-glass flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Category Card Header */}
                <div className="flex items-start justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                      {categoryIcons[category.id]}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {category.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/5">
                    {category.items.length} Skills
                  </span>
                </div>

                {/* Items in category */}
                <div className="space-y-3">
                  {category.items.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group p-3 rounded-xl bg-dark-900/50 hover:bg-dark-850/80 border border-white/5 hover:border-brand-purple/30 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan group-hover:scale-125 transition-transform" />
                          <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {tech.name}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/5">
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 pl-3.5 leading-relaxed font-light">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Domain Focus: Education & Dev</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple" />
                  <span>Hands-on Teaching Curriculum</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-10 text-center">
          <p className="text-xs font-mono text-slate-400">
            * All technologies are actively utilized in practical training curriculum, workshop demonstrations, and software development.
          </p>
        </div>

      </div>
    </section>
  );
};
