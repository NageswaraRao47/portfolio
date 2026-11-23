import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Building2,
  Edit2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Connect: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [customEmail, setCustomEmail] = useState(PERSONAL_INFO.emailPlaceholder);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    institution: '',
    inquiryType: 'College Workshop Invitation',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(customEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In production or when opened in browser, generate a prefilled mailto link
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formState.inquiryType} from ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Nageswara Rao,\n\nName: ${formState.name}\nInstitution / Org: ${formState.institution}\nInquiry Type: ${formState.inquiryType}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${customEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-xs font-mono text-brand-purple-glow mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Let's Connect, Collaborate & Create.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Interested in AI, technology education, workshops, or collaboration? Let's connect and explore possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-glass">
            <div>
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-white/10">
                <div className="p-3 rounded-2xl bg-brand-purple/20 border border-brand-purple/40 text-brand-purple-glow">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    G. Nageswara Rao
                  </h3>
                  <p className="text-xs font-mono text-brand-cyan">
                    AI Engineer & Technology Trainer
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light">
                Available for engineering college workshops, technical guest lectures, hands-on GenAI bootcamps, and software engineering collaborations.
              </p>

              {/* Social Channels */}
              <div className="space-y-3 mb-8">
                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-dark-900/70 hover:bg-brand-blue/15 border border-white/10 hover:border-brand-blue/40 text-slate-200 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        LinkedIn Profile
                      </h4>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        /in/nageswara-rao-g-060a972b7
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-dark-900/70 hover:bg-brand-purple/15 border border-white/10 hover:border-brand-purple/40 text-slate-200 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        GitHub Profile
                      </h4>
                      <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                        github.com/NageswaraRao47
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                {/* Configurable Email Box */}
                <div className="p-4 rounded-2xl bg-dark-900/70 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-brand-cyan" />
                      <span className="text-xs font-mono uppercase text-slate-400">
                        Direct Email
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsEditingEmail(!isEditingEmail)}
                      className="text-[11px] font-mono text-brand-cyan hover:underline inline-flex items-center gap-1"
                    >
                      <Edit2 className="w-3 h-3" />
                      <span>{isEditingEmail ? 'Save' : 'Configure Email'}</span>
                    </button>
                  </div>

                  {isEditingEmail ? (
                    <input
                      type="email"
                      value={customEmail}
                      onChange={(e) => setCustomEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full px-3 py-1.5 rounded-lg bg-black/60 border border-brand-cyan/50 text-xs text-white focus:outline-none"
                    />
                  ) : (
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono text-slate-200 truncate">
                        {customEmail}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
                        title="Copy Email"
                      >
                        {copiedEmail ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  )}
                  <span className="text-[10px] text-slate-500 font-mono mt-1.5">
                    Placeholder ready for your personal or work email address
                  </span>
                </div>
              </div>
            </div>

            {/* Current Affiliation */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-brand-cyan" />
                <span>BRAIN O VISION – EdTech</span>
              </span>
              <span className="text-brand-purple-glow">Hyderabad / Campus Visits</span>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-glass flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    Send a Direct Message / Invitation
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    For workshop scheduling, guest speaking, or AI development queries.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Typically replies within 24h
                  </span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-dark-900/80 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your email client has been triggered to send this inquiry directly to G. Nageswara Rao. Thank you for reaching out!
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Prof. / Engineer Name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="youremail@college.edu"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        College / Institution / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Engineering College / Tech Firm"
                        value={formState.institution}
                        onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={formState.inquiryType}
                        onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-brand-purple/50 transition-colors"
                      >
                        <option value="College Workshop Invitation">College Workshop Invitation</option>
                        <option value="Agentic & GenAI Bootcamp">Agentic & GenAI Bootcamp</option>
                        <option value="Python Programming Session">Python Programming Session</option>
                        <option value="Hackathon Mentorship / Jury">Hackathon Mentorship / Jury</option>
                        <option value="Technical Collaboration">Technical Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message / Proposed Agenda *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about your institution, preferred dates, student batch size, or technical focus areas..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-900/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white font-semibold text-sm shadow-glow-purple/20 hover:shadow-glow-purple hover:scale-[1.01] transition-all duration-200"
                  >
                    <span>Send Inquiry to G. Nageswara Rao</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Encrypted & Direct Transmission</span>
              <span className="text-slate-400">Prompt responses assured</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
