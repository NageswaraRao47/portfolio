import React, { useState, useEffect } from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { TechnicalExpertise } from './components/TechnicalExpertise';
import { Workshops } from './components/Workshops';
import { CollegeOutreach } from './components/CollegeOutreach';
import { TeachingPhilosophy } from './components/TeachingPhilosophy';
import { Projects } from './components/Projects';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'journey',
        'expertise',
        'workshops',
        'outreach',
        'philosophy',
        'projects',
        'connect'
      ];

      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 relative selection:bg-brand-purple/30 selection:text-brand-purple-glow">
      {/* Interactive AI background particle network */}
      <BackgroundParticles />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Section 1: Hero / Landing */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Professional Journey */}
        <Journey />

        {/* Section 4: Technical Expertise */}
        <TechnicalExpertise />

        {/* Section 5: Workshops & Training */}
        <Workshops />

        {/* Section 6: College Outreach & Workshop Experience */}
        <CollegeOutreach />

        {/* Section 7: Teaching Philosophy */}
        <TeachingPhilosophy />

        {/* Section 8: Featured Technical Projects */}
        <Projects />

        {/* Section 9: Connect With Me */}
        <Connect />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
};

export default App;

