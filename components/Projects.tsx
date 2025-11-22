
import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { PROJECTS, UI_TEXT } from '../constants';
import { Language } from '../types';

interface ProjectsProps {
  onOpenChat: (projectName: string) => void;
  lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenChat, lang }) => {
  const t = UI_TEXT.projects;
  
  return (
    <div className="max-w-[90rem] mx-auto py-20 md:py-32 px-4 md:px-6 lg:px-12 reveal-on-scroll">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/5 pb-12">
        <div>
           <span className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">{t.label[lang]}</span>
           <h2 className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter text-white">
              {t.title[lang].split("").map((char, i) => (
                <span key={i} className="char-float inline-block whitespace-pre" style={{transitionDelay: `${i*20}ms`}}>{char}</span>
              ))}
           </h2>
        </div>
        <div className="hidden md:block text-right">
           <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
             {t.subtitle[lang]}
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:gap-20">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative rounded-[2.5rem] md:rounded-[3rem] bg-[#080808] border border-white/5 overflow-hidden hover:border-emerald-500/30 transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)] reveal-on-scroll">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-auto md:min-h-[500px]">
               {/* Visual Side - Redesigned to match Experience/Timeline Style */}
               {/* Simple, clean, minimal icon in a glass circle */}
               <div className="lg:col-span-5 relative bg-white/[0.02] min-h-[200px] md:min-h-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 group-hover:bg-white/[0.04] transition-colors duration-700">
                  
                  <div className="relative z-10 float-animation">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-transform duration-500">
                        <TrendingUp className="text-emerald-500 w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                  </div>

               </div>

               {/* Content Side */}
               <div className="lg:col-span-7 p-6 md:p-10 lg:p-16 flex flex-col justify-between relative bg-black/20 backdrop-blur-sm">
                 <div>
                    <div className="flex flex-wrap justify-between items-start mb-6 md:mb-8 gap-4">
                        <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold tracking-widest text-[10px] uppercase">{project.role[lang]}</span>
                        
                        {/* Minimized Tag */}
                        <span className="px-3 py-1 rounded-full border border-white/5 text-[9px] font-bold tracking-[0.2em] text-gray-600 uppercase">
                            {t.tag[lang]}
                        </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter text-white mb-8 group-hover:text-emerald-50 transition-colors leading-tight">
                      {project.title[lang]}
                    </h3>
                    
                    <div className="space-y-6 md:space-y-8">
                      <div className="group/item pl-4 border-l-2 border-white/10 hover:border-emerald-500 transition-colors">
                        <h4 className="text-gray-500 text-[10px] font-bold uppercase mb-2 tracking-[0.2em] group-hover/item:text-white transition-colors">
                           {t.challenge[lang]}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                          {project.description[lang]}
                        </p>
                      </div>
                      
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/[0.07] transition-colors">
                        <h4 className="text-emerald-400 text-[10px] font-bold uppercase mb-2 tracking-[0.2em] flex items-center gap-2">
                           {t.impact[lang]}
                        </h4>
                        <p className="text-gray-200 leading-relaxed text-sm md:text-base font-medium">
                          {project.impact[lang]}
                        </p>
                      </div>
                    </div>
                 </div>
                 
                 <div 
                    onClick={() => onOpenChat(project.title[lang])}
                    className="mt-8 md:mt-10 pt-6 border-t border-white/5 flex items-center justify-between group/link cursor-pointer"
                 >
                    <span className="text-white font-bold text-xs md:text-sm group-hover/link:text-emerald-400 transition-colors tracking-widest uppercase">{t.btnInquire[lang]}</span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover/link:bg-emerald-500 group-hover/link:text-black transition-all transform group-hover/link:rotate-45 group-hover/link:scale-110">
                        <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                    </div>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
