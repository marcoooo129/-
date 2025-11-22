import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Mail, MessageSquare, ArrowRight, Phone, MapPin } from 'lucide-react';
import AIChat from './components/AIChat';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { MARCO_DATA } from './constants';

// Helper component for floating text
const InteractiveText = ({ text, className = "", gradientClass = "" }: { text: string, className?: string, gradientClass?: string }) => (
  <span className={`inline-block whitespace-pre ${className}`}>
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

  const handleContact = (type: 'email' | 'phone' | 'instagram' | 'linkedin') => {
    const { email, phone, instagram, linkedin } = MARCO_DATA.contacts;
    
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
      case 'linkedin':
        window.open(linkedin, '_blank');
        break;
      default:
        break;
    }
  };

  const handleProjectClick = (projectName: string) => {
    // This will now pre-fill the subject line of the contact form
    setChatInitialInput(projectName);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 relative selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden font-sans">
      
      {/* Cinematic Noise Overlay */}
      <div className="bg-noise"></div>

      {/* Ambient Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-emerald-900/5 rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/5 rounded-full blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Premium Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-300 backdrop-blur-xl border-b border-white/[0.03] bg-black/40">
          <div className="max-w-8xl mx-auto flex justify-between items-center">
            <div className="font-black italic text-xl tracking-tighter text-white cursor-default select-none hover:text-emerald-500 transition-colors duration-300">
              MARCO.SU
            </div>
            <div className="flex items-center gap-10">
              <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                <a href="#projects" className="hover:text-white hover:scale-105 transition-all duration-300">Work</a>
                <a href="#experience" className="hover:text-white hover:scale-105 transition-all duration-300">Journey</a>
                <a href="#skills" className="hover:text-white hover:scale-105 transition-all duration-300">Arsenal</a>
              </div>
              <div className="flex gap-6">
                <button onClick={() => handleContact('email')} className="text-gray-400 hover:text-white transition-all hover:scale-110" title="Email"><Mail size={20} strokeWidth={1.5} /></button>
                <button onClick={() => handleContact('instagram')} className="text-gray-400 hover:text-white transition-all hover:scale-110" title="Instagram"><Instagram size={20} strokeWidth={1.5} /></button>
                <button onClick={() => handleContact('linkedin')} className="text-gray-400 hover:text-white transition-all hover:scale-110" title="LinkedIn"><Linkedin size={20} strokeWidth={1.5} /></button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-10">
          <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f1f18] border border-emerald-900/30 mb-12 w-fit backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-[10px] font-black tracking-[0.2em] uppercase">Available for Hire</span>
              </div>
              
              {/* Main Title - Tilted & High End */}
              <div className="mb-10 select-none leading-[0.9] -ml-1">
                {/* LOGISTICS */}
                <div className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[7.5rem] xl:text-[9rem] font-black italic tracking-[-0.04em] mb-1">
                  <InteractiveText 
                    text="LOGISTICS" 
                    gradientClass="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-2xl"
                  />
                </div>
                
                {/* & DESIGN */}
                <div className="flex items-center flex-wrap gap-x-6 text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[7.5rem] xl:text-[9rem] font-black italic tracking-[-0.04em] mb-1">
                  <span className="char-float text-emerald-400 transform skew-x-[-10deg]">&</span>
                  <InteractiveText 
                    text="DESIGN" 
                    gradientClass="text-emerald-400 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                  />
                </div>
                
                {/* FUSION. */}
                <div className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[7.5rem] xl:text-[9rem] font-black italic tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800">
                  <InteractiveText 
                    text="FUSION." 
                    gradientClass="text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800"
                  />
                </div>
              </div>
              
              <div className="max-w-lg mb-12">
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed tracking-tight">
                  I am <span className="text-white font-semibold border-b-2 border-emerald-500/50 pb-0.5">Marco Su</span>. A Supply Chain Planner & Digital Creator bridging the gap between operational data and visual innovation.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 items-center">
                <button 
                  onClick={() => {
                    setChatInitialInput('');
                    setIsChatOpen(true);
                  }}
                  className="bg-emerald-500 text-black border border-emerald-400 px-8 py-4 rounded-full font-bold text-sm hover:bg-emerald-400 transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center gap-3 group"
                >
                  <Mail size={20} strokeWidth={2.5} className="group-hover:-rotate-12 transition-transform" />
                  Send a Message
                </button>
                
                <button 
                  onClick={() => handleContact('email')}
                  className="px-8 py-4 rounded-full border border-white/10 hover:bg-white text-white hover:text-black text-sm font-bold transition-all flex items-center gap-2 group hover:border-white"
                >
                  Copy Email <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Minimalist Stat Card */}
            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="w-full max-w-md ml-auto aspect-[4/5] rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] p-10 flex flex-col justify-between relative overflow-hidden hover:border-white/20 transition-colors duration-700">
                 {/* Decorative Background Glows */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-black tracking-[0.2em] uppercase">Current Status</span>
                   </div>
                   <h3 className="text-5xl font-bold text-white tracking-tight leading-tight mb-3">Based in<br/><span className="text-emerald-400">Rome</span></h3>
                   <p className="text-gray-500 text-sm font-medium flex items-center gap-2"><MapPin size={14} /> Open to Relocation</p>
                </div>

                <div className="space-y-8 relative z-10 mt-auto">
                  <div className="space-y-3 group">
                    <div className="flex justify-between text-[10px] font-black tracking-widest text-gray-500 uppercase group-hover:text-emerald-400 transition-colors">
                      <span>Supply Chain</span>
                      <span>95%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[95%] shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                    </div>
                  </div>
                  <div className="space-y-3 group">
                    <div className="flex justify-between text-[10px] font-black tracking-widest text-gray-500 uppercase group-hover:text-indigo-400 transition-colors">
                      <span>Data Analysis</span>
                      <span>90%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[90%] shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                    </div>
                  </div>
                  <div className="space-y-3 group">
                    <div className="flex justify-between text-[10px] font-black tracking-widest text-gray-500 uppercase group-hover:text-purple-400 transition-colors">
                      <span>Design</span>
                      <span>85%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[85%] shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <div id="projects" className="scroll-mt-24">
           <Projects onOpenChat={handleProjectClick} />
        </div>
        <div id="experience" className="scroll-mt-24">
           <Timeline />
        </div>
        <div id="skills" className="scroll-mt-24">
           <Skills />
        </div>

        {/* Footer */}
        <footer className="py-24 border-t border-white/5 relative bg-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
               <h2 className="font-black italic text-3xl tracking-tighter text-white mb-3 hover:text-emerald-500 transition-colors cursor-default">MARCO.SU</h2>
               <p className="text-gray-500 text-sm font-medium tracking-wide">Supply Chain Planner • Data Analyst • Creator</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-8">
               <div className="flex gap-5">
                  <button onClick={() => handleContact('email')} className="w-14 h-14 rounded-2xl bg-[#0f0f0f] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/20" title="Email">
                    <Mail size={22} strokeWidth={1.5} />
                  </button>
                  <button onClick={() => handleContact('instagram')} className="w-14 h-14 rounded-2xl bg-[#0f0f0f] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-900/20" title="Instagram">
                    <Instagram size={22} strokeWidth={1.5} />
                  </button>
                  <button onClick={() => handleContact('linkedin')} className="w-14 h-14 rounded-2xl bg-[#0f0f0f] border border-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20" title="LinkedIn">
                    <Linkedin size={22} strokeWidth={1.5} />
                  </button>
               </div>
               <p className="text-gray-700 text-xs font-bold tracking-widest uppercase">
                 © {new Date().getFullYear()} Marco Su. All Rights Reserved.
               </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Contact Button (if closed) */}
      {!isChatOpen && (
        <button
          onClick={() => {
            setChatInitialInput('');
            setIsChatOpen(true);
          }}
          className="fixed bottom-8 right-8 p-5 bg-emerald-500 text-black rounded-full shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] hover:scale-110 hover:bg-emerald-400 transition-all z-40 group border-4 border-black/20 hover:border-emerald-300/50"
        >
          <Mail size={28} strokeWidth={2.5} className="group-hover:-rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Message Form Interface */}
      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        initialInput={chatInitialInput}
      />
    </div>
  );
}

export default App;