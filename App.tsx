import React, { useState, useEffect } from 'react';
import { Github, Instagram, Linkedin, Mail, MessageSquare, ArrowRight, Phone, Download } from 'lucide-react';
import AIChat from './components/AIChat';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { MARCO_DATA } from './constants';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialInput, setChatInitialInput] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Functionality for buttons
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
        telLink.href = `tel:${phone.replace(/\s+/g, '')}`; // Remove spaces for tel: protocol
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
    setChatInitialInput(`Tell me details about the ${projectName} project.`);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 relative selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      {/* Ambient Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[128px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04]" />
      </div>

      <div className="relative z-10">
        {/* Premium Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 backdrop-blur-sm border-b border-white/0 hover:border-white/5 hover:bg-black/50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="font-syne font-bold text-xl tracking-tighter text-white hover:text-emerald-400 transition-colors cursor-pointer">
              MARCO.SU
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6 text-sm font-medium text-gray-400">
                <a href="#projects" className="hover:text-white transition-colors">Work</a>
                <a href="#experience" className="hover:text-white transition-colors">Journey</a>
                <a href="#skills" className="hover:text-white transition-colors">Arsenal</a>
              </div>
              <div className="h-4 w-px bg-white/10 hidden md:block"></div>
              <div className="flex gap-4">
                <button onClick={() => handleContact('email')} className="text-gray-400 hover:text-emerald-400 transition-colors" title="Email Me"><Mail size={18} /></button>
                <button onClick={() => handleContact('instagram')} className="text-gray-400 hover:text-emerald-400 transition-colors" title="Instagram"><Instagram size={18} /></button>
                <button onClick={() => handleContact('linkedin')} className="text-gray-400 hover:text-emerald-400 transition-colors" title="LinkedIn"><Linkedin size={18} /></button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section with Floating Title Effect */}
        <header className="min-h-screen flex flex-col justify-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8">
              <button 
                onClick={() => handleContact('email')}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 text-xs font-medium mb-8 tracking-wide uppercase animate-in fade-in slide-in-from-bottom-4 duration-700 hover:bg-emerald-500/10 transition-colors cursor-pointer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Hire
              </button>
              
              {/* Interaction: Group Hover splits the text slightly */}
              <div className="group perspective-1000 cursor-default">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-syne font-extrabold tracking-tight text-white mb-6 leading-[0.95] transition-all duration-500 ease-out transform">
                  <span className="block group-hover:translate-x-2 transition-transform duration-500 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                    LOGISTICS
                  </span>
                  <span className="block group-hover:-translate-x-2 transition-transform duration-500 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 italic pr-4">
                    & DESIGN
                  </span>
                  <span className="block group-hover:translate-x-4 transition-transform duration-500 text-gray-500 group-hover:text-white/20">
                    FUSION.
                  </span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed border-l border-emerald-500/30 pl-6 mt-8">
                I am <span className="text-white font-medium">{MARCO_DATA.name}</span>. A Supply Chain Planner & Digital Creator bridging the gap between operational data and visual innovation.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  onClick={() => {
                    setChatInitialInput('');
                    setIsChatOpen(true);
                  }}
                  className="group relative bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-medium transition-all hover:pr-10 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageSquare size={18} />
                    Talk to AI Marco
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button 
                  onClick={() => handleContact('email')}
                  className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all"
                >
                  Contact Me <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Abstract Visual / Stat Card */}
            <div className="lg:col-span-4 hidden lg:block relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/50 backdrop-blur-sm p-8 flex flex-col justify-between group hover:border-emerald-500/20 transition-colors duration-500">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-[100px] transition-all duration-700 group-hover:bg-emerald-500/20" />
                <div className="absolute bottom-10 left-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl" />

                <div className="z-10">
                   <div className="text-xs text-emerald-400 font-mono mb-2">CURRENT STATUS</div>
                   <div className="text-3xl font-syne font-bold text-white">Based in Rome</div>
                   <div className="text-sm text-gray-500 mt-1">Open to Relocation</div>
                </div>

                <div className="z-10 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
                      <span>Supply Chain</span>
                      <span>95%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[95%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
                      <span>Data Analysis</span>
                      <span>90%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[90%] shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-wider">
                      <span>Design</span>
                      <span>85%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[85%] shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Sections */}
        <div id="projects" className="scroll-mt-20">
           <Projects onOpenChat={handleProjectClick} />
        </div>
        <div id="experience" className="scroll-mt-20">
           <Timeline />
        </div>
        <div id="skills" className="scroll-mt-20">
           <Skills />
        </div>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 relative bg-black">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
               <h2 className="font-syne font-bold text-2xl text-white mb-2">Marco Su</h2>
               <p className="text-gray-500 text-sm">Supply Chain Planner • Data Analyst • Creator</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
               <div className="flex gap-4">
                  <button onClick={() => handleContact('email')} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-600 transition-all" title="Email">
                    <Mail size={16} />
                  </button>
                  <button onClick={() => handleContact('instagram')} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-600 transition-all" title="Instagram">
                    <Instagram size={16} />
                  </button>
                  <button onClick={() => handleContact('phone')} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-emerald-600 transition-all" title="Call">
                    <Phone size={16} />
                  </button>
               </div>
               <p className="text-gray-600 text-xs">
                 © {new Date().getFullYear()} All rights reserved.
               </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Chat Button (if closed) */}
      {!isChatOpen && (
        <button
          onClick={() => {
            setChatInitialInput('');
            setIsChatOpen(true);
          }}
          className="fixed bottom-8 right-8 p-4 bg-white text-black rounded-full shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform z-40 group"
        >
          <div className="absolute inset-0 rounded-full border border-black/10" />
          <MessageSquare size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Chat Interface */}
      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        initialInput={chatInitialInput}
      />
    </div>
  );
}

export default App;