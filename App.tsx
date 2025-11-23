import React, { useState, useEffect } from 'react';
import { Instagram, Mail, MessageSquare, ArrowRight, BookOpen, MapPin } from 'lucide-react';
import AIChat from './components/AIChat';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Intro from './components/Intro';
import { MARCO_DATA, UI_TEXT } from './constants';
import { Language } from './types';

// Helper component for floating text
const InteractiveText = ({ text, className = "", gradientClass = "" }: { text: string, className?: string, gradientClass?: string }) => (
  <span className={`inline-block whitespace-pre-wrap ${className}`}>
    {text.split("").map((char, index) => (
      <span 
        key={index} 
        className={`char-float ${gradientClass}`}
        style={{ transitionDelay: `${index * 15}ms` }}
      >
        {char}
      </span>
    ))}
  </span>
);

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialInput, setChatInitialInput] = useState('');
  const [lang, setLang] = useState<Language>('en');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Scroll Reveal Observer - Optimized for Mobile Performance
    const observerOptions = {
      root: null,
      rootMargin: '100px', // Trigger animation 100px before element enters screen (prevents "invisible" elements on fast scroll)
      threshold: 0.05      // Trigger almost immediately when edge touches
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    // Delay slightly to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'it' : 'en');
  };

  const t = UI_TEXT;

  const handleContact = (type: 'email' | 'phone' | 'instagram') => {
    const { email, phone, instagram } = MARCO_DATA.contacts;
    
    switch (type) {
      case 'email':
        const mailtoLink = document.createElement('a');
        mailtoLink.href = `mailto:${email}`;
        document.body.appendChild(mailtoLink);
        mailtoLink.click();
        document.body.removeChild(mailtoLink);
        break;
      case 'phone':
        const telLink = document.createElement('a');
        telLink.href = `tel:${phone.replace(/\s+/g, '')}`; 
        document.body.appendChild(telLink);
        telLink.click();
        document.body.removeChild(telLink);
        break;
      case 'instagram':
        window.open(instagram, '_blank');
        break;
      default:
        break;
    }
  };

  const handleProjectClick = (projectName: string) => {
    setChatInitialInput(projectName);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 relative selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans">
      
      {/* Opening Animation */}
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}

      {/* Cinematic Noise Overlay - Optimized in CSS to only show on Desktop */}
      <div className="bg-noise"></div>

      {/* Ambient Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-emerald-900/5 rounded-full blur-[100px] md:blur-[150px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-indigo-900/5 rounded-full blur-[100px] md:blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Premium Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 md:py-6 transition-all duration-300 backdrop-blur-xl border-b border-white/[0.03] bg-black/40 reveal-on-scroll">
          <div className="max-w-8xl mx-auto flex justify-between items-center">
            <div className="font-black italic text-lg md:text-xl tracking-tighter text-white cursor-default select-none hover:text-emerald-500 transition-colors duration-300">
              MARCO.SU
            </div>
            <div className="flex items-center gap-4 md:gap-10">
              <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                <a href="#projects" className="hover:text-white hover:scale-105 transition-all duration-300">{t.nav.work[lang]}</a>
                <a href="#experience" className="hover:text-white hover:scale-105 transition-all duration-300">{t.nav.journey[lang]}</a>
                <a href="#skills" className="hover:text-white hover:scale-105 transition-all duration-300">{t.nav.arsenal[lang]}</a>
              </div>
              <div className="flex gap-4 md:gap-6 items-center">
                <button onClick={() => handleContact('email')} className="text-gray-400 hover:text-white transition-all hover:scale-110" title="Email"><Mail size={18} strokeWidth={1.5} /></button>
                <button onClick={() => handleContact('instagram')} className="text-gray-400 hover:text-white transition-all hover:scale-110" title="Instagram"><Instagram size={18} strokeWidth={1.5} /></button>
                
                {/* Language Switcher */}
                <button 
                  onClick={toggleLanguage}
                  className="ml-1 md:ml-2 px-3 py-1 border border-white/10 rounded-full text-[10px] font-bold text-white hover:bg-white hover:text-black transition-all w-16"
                >
                   {lang === 'en' ? 'EN / IT' : 'IT / EN'}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="min-h-screen flex flex-col justify-center px-4 md:px-6 pt-24 pb-10 reveal-on-scroll">
          <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1f18] border border-emerald-900/30 mb-8 md:mb-12 w-fit backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-[10px] font-black tracking-[0.2em] uppercase">{t.hero.status[lang]}</span>
              </div>
              
              {/* Main Title - Tilted & High End */}
              {/* Adjusted for Mobile: using VW units to ensure fit */}
              <div className="mb-8 md:mb-10 select-none leading-[0.9] -ml-1">
                {/* STRATEGY */}
                <div className="text-[13vw] sm:text-[6rem] md:text-[8rem] lg:text-[7.5rem] xl:text-[9rem] font-black italic tracking-[-0.04em] mb-1">
                  <InteractiveText 
                    text="STRATEGY" 
                    gradientClass="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-2xl"
                  />
                </div>
                
                {/* & DESIGN */}
                <div className="flex items-center flex-wrap gap-x-3 md:gap-x-6 text-[13vw] sm:text-[6rem] md:text-[8rem] lg:text-[7.5rem] xl:text-[9rem] font-black italic tracking-[-0.04em] mb-1">
                  <span className="char-float text-emerald-400 transform skew-x-[-10deg]">&</span>
                  <InteractiveText 
                    text="DESIGN" 
                    gradientClass="text-emerald-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                  />
                </div>
                
                {/* PORTFOLIO */}
                <div className="flex items-center gap-6 mt-4">
                   <div className="h-[2px] w-16 md:w-24 bg-gray-600"></div>
                   <span className="text-gray-400 font-mono text-sm md:text-lg tracking-widest uppercase">
                     Portfolio 2025
                   </span>
                </div>
              </div>
              
              <div className="max-w-2xl mb-10 md:mb-12">
                <p className="text-gray-300 text-xl md:text-2xl font-sans font-light leading-relaxed tracking-wide antialiased">
                  <span className="text-white font-semibold">{t.hero.introPrefix[lang]} Marco Su.</span> {t.hero.introMid[lang]} <span className="text-white font-semibold">UniFi</span>. {t.hero.introSuffix[lang]}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 md:gap-6">
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="group px-6 py-3 md:px-8 md:py-4 bg-emerald-500 text-black rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] flex items-center gap-2 md:gap-3"
                >
                  <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                  {t.hero.btnMessage[lang]}
                </button>
                
                <button 
                   onClick={() => handleContact('instagram')}
                   className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-white/5 transition-all hover:border-white/20 flex items-center gap-2 md:gap-3"
                >
                  {t.hero.btnInsta[lang]}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column - Status Card */}
            <div className="lg:col-span-5 lg:h-full flex items-center justify-center lg:justify-end relative">
               <div className="glass-panel p-6 md:p-10 rounded-[2.5rem] md:rounded-[3rem] w-full max-w-md relative overflow-hidden hover:border-emerald-500/20 transition-colors duration-500 group">
                  {/* Floating glow effect behind card */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-emerald-500 text-2xl md:text-3xl lg:text-4xl font-black italic tracking-tighter mb-2 leading-tight">
                      <InteractiveText text={t.statusCard.university[lang]} />
                    </h3>
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                       <BookOpen className="text-gray-400" size={18} />
                       <span className="text-gray-300 font-medium text-base md:text-lg leading-tight">{t.statusCard.degree[lang]}</span>
                    </div>

                    <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-between border-t border-white/5 pt-6 gap-4">
                       <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs whitespace-nowrap">
                         2025 — Present
                       </span>
                       <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                          <MapPin size={12} />
                          {t.statusCard.city[lang]}, ITALY
                       </div>
                    </div>

                    <div className="mt-6 md:mt-8 space-y-4">
                       <p className="text-gray-400 font-light text-sm leading-relaxed">Focusing on digital communication strategies, media theory, and cross-cultural narratives.</p>
                       <p className="text-gray-400 font-light text-sm leading-relaxed">Living and studying in the heart of the Renaissance.</p>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </header>

        <div id="projects">
          <Projects onOpenChat={handleProjectClick} lang={lang} />
        </div>

        <div id="experience">
          <Timeline lang={lang} />
        </div>
        
        <div id="skills">
          <Skills lang={lang} />
        </div>

        <footer className="py-12 text-center border-t border-white/5 bg-black/40 backdrop-blur-sm mt-20 px-4 reveal-on-scroll">
          <p className="text-gray-600 text-xs tracking-widest uppercase font-bold">
            &copy; {new Date().getFullYear()} Marco Su. {t.footer.rights[lang]}
          </p>
        </footer>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-emerald-500 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] flex items-center justify-center text-black hover:scale-110 hover:bg-emerald-400 transition-all z-40"
      >
        <Mail size={24} strokeWidth={2} />
      </button>

      {/* Messaging Interface */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} initialInput={chatInitialInput} lang={lang} />
    </div>
  );
}

export default App;