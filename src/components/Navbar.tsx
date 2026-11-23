import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Outreach', href: '#outreach' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Projects', href: '#projects' },
    { label: 'Connect', href: '#connect' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue p-[1px] shadow-glow-purple/20 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <span className="font-display font-bold text-sm tracking-wider bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  GNR
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-dark-950" title="Active in AI & Education" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 text-sm tracking-wide group-hover:text-brand-purple-glow transition-colors">
                G. Nageswara Rao
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-tight flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-brand-cyan" /> AI Engineer & Trainer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 border border-white/5 backdrop-blur-md rounded-full px-4 py-1.5 shadow-glass">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-brand-purple/25 to-brand-blue/25 border border-brand-purple/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Org Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>BRAIN O VISION</span>
            </div>

            <a
              href="#connect"
              onClick={(e) => handleLinkClick(e, '#connect')}
              className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan rounded-xl shadow-glow-purple/20 hover:shadow-glow-purple hover:scale-[1.02] transition-all duration-200 group"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-900 border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-brand-purple" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] p-4 bg-dark-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-1.5">
            <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-slate-500 border-b border-white/5 flex items-center justify-between">
              <span>Navigation</span>
              <span className="text-brand-cyan">BRAIN O VISION</span>
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 text-brand-purple-glow border border-brand-purple/30'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-cyan" />}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#connect"
                onClick={(e) => handleLinkClick(e, '#connect')}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold text-sm shadow-md"
              >
                <span>Connect & Collaborate</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <div className="flex items-center justify-center gap-4 py-2 text-xs text-slate-400">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-purple transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cyan transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
