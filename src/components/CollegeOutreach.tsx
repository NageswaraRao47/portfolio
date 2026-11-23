import React, { useState } from 'react';
import { 
  School, 
  Users, 
  Terminal, 
  Presentation, 
  Trophy, 
  Upload,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { COLLEGE_OUTREACH } from '../data/portfolioData';
import { GalleryImage } from '../types';

export const CollegeOutreach: React.FC = () => {
  const [gallery, setGallery] = useState<GalleryImage[]>(COLLEGE_OUTREACH.gallery);

  // Allow G. Nageswara Rao to replace placeholder images in real time directly from the UI
  const handleImageReplace = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setGallery((prev) =>
            prev.map((item) =>
              item.id === id ? { ...item, customImageUrl: event.target?.result as string } : item
            )
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Presentation':
        return <Presentation className="w-6 h-6 text-brand-purple" />;
      case 'School':
        return <School className="w-6 h-6 text-brand-blue" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-brand-cyan" />;
      case 'Users':
        return <Users className="w-6 h-6 text-brand-purple-glow" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-brand-cyan" />;
      default:
        return <ImageIcon className="w-6 h-6 text-slate-300" />;
    }
  };

  return (
    <section id="outreach" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-blue-glow mb-3">
            <School className="w-3.5 h-3.5" />
            <span>CAMPUS ENGAGEMENT</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            {COLLEGE_OUTREACH.heading}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            {COLLEGE_OUTREACH.subheading}
          </p>
        </div>

        {/* Milestone Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {COLLEGE_OUTREACH.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 sm:p-6 border border-white/10 text-center flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {metric.label}
                </span>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-purple-cyan">
                  {metric.value}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 font-mono">
                {metric.note}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Banner about 10 Colleges */}
        <div className="mb-14 p-6 rounded-3xl bg-gradient-to-r from-brand-purple/15 via-dark-850 to-brand-cyan/15 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan">
              <School className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                Independent College Session Leadership
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Every workshop involved live problem solving, interactive demonstrations, and direct interaction with engineering students across approximately 10 colleges.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-dark-950/80 px-4 py-2 rounded-xl border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified Institutional Outreach</span>
          </div>
        </div>

        {/* Photo Gallery with easy replacement system */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ImageIcon className="w-4 h-4 text-brand-purple" />
            <span>WORKSHOP MOMENTS & GALLERY (Replaceable Placeholders)</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Tip: Upload photos to test your portfolio in real time
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-brand-purple/40 transition-all duration-300 flex flex-col"
            >
              {/* Image / Placeholder Area */}
              <div className="relative aspect-[16/10] bg-dark-900 overflow-hidden flex items-center justify-center">
                {item.customImageUrl ? (
                  <img
                    src={item.customImageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center p-6 text-center relative`}
                  >
                    {/* Cyber grid overlay */}
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        {getIcon(item.icon)}
                      </div>
                      <span className="font-display font-semibold text-sm text-slate-200">
                        {item.placeholderText}
                      </span>
                      <span className="text-[10px] font-mono text-brand-cyan mt-1">
                        Photo Placeholder
                      </span>
                    </div>

                    {/* Corner tech brackets */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30" />
                  </div>
                )}

                {/* Upload action overlay */}
                <div className="absolute bottom-2 right-2 z-20">
                  <label
                    htmlFor={`upload-${item.id}`}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-950/85 hover:bg-brand-purple border border-white/20 text-[10px] font-mono text-slate-300 hover:text-white transition-all shadow-md"
                    title="Upload actual workshop photo"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Replace Photo</span>
                  </label>
                  <input
                    id={`upload-${item.id}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageReplace(item.id, e)}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Card Meta Description */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-purple-glow mb-1">
                    <span>{item.collegeCategory}</span>
                    <span className="text-slate-500">Workshop Log</span>
                  </div>
                  <h4 className="font-display font-semibold text-base text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Audience: Engineering Students</span>
                  <span className="text-brand-cyan">100% Hands-on</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Photo Integration */}
        <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-slate-400 font-mono">
          <span>
            Photos can also be stored in the <code className="text-brand-cyan">public/images/</code> folder and referenced directly in <code className="text-brand-purple">portfolioData.ts</code>.
          </span>
        </div>

      </div>
    </section>
  );
};
