
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-auto md:min-h-[600px]">
               {/* Visual Side - Geometric Data Sculpture */}
               <div className="relative bg-[#0c0c0c] min-h-[320px] md:min-h-0 flex flex-col justify-center items-center overflow-hidden group-hover:bg-[#0a0a0a] transition-colors duration-700 border-b md:border-b-0 md:border-r border-white/5">
                  
                  {/* Ambient Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  {/* The Sculpture */}
                  <div className="relative z-10 float-animation">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                        
                        {/* Outer Ring - Thin, elegant */}
                        <div className="absolute inset-0 border border-white/5 rounded-full scale-90 group-hover:scale-100 transition-transform duration-[1.5s] ease-out" />
                        
                        {/* Middle Geometric Shape - Diamond */}
                        <div className="absolute w-32 h-32 md:w-40 md:h-40 border border-emerald-500/20 rotate-45 transition-transform duration-1000 group-hover:rotate-90 group-hover:border-emerald-500/30 backdrop-blur-[2px]" />
                        
                        {/* Inner Glass Card */}
                        <div className="absolute w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.4)] transition-all duration-500 z-20">
                            <TrendingUp className="text-emerald-400 w-8 h-8 md:w-10 md:h-10 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                        </div>

                        {/* Orbiting Dot */}
                        <div className="absolute inset-0 animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_rgba(16,185,129,1)]" />
                        </div>
                        
                        {/* Accent Lines */}
                        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent top-1/2 left-0 -translate-y-1/2 scale-x-0 group-hover:scale-x-50 transition-transform duration-700 delay-100"></div>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="absolute bottom-10 z-20">
                    <span className="px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/5 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all duration-500">
                        {t.tag[lang]}
                    </span>
                  </div>
               </div>

               {/* Content Side */}
               <div className="p-6 md:p-10 lg:p-20 flex flex-col justify-between relative bg-black/20 backdrop-blur-sm">
                 <div>
                    <div className="flex justify-between items-start mb-8 md:mb-10">
                        <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold tracking-widest text-[10px] uppercase">{project.role[lang]}</span>
                        <span className="text-gray-500 text-xs font-mono font-medium">{project.period[lang]}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter text-white mb-8 md:mb-10 group-hover:text-emerald-50 transition-colors leading-tight">
                      {project.title[lang]}
                    </h3>
                    
                    <div className="space-y-8 md:space-y-10">
                      <div className="group/item pl-4 md:pl-6 border-l-2 border-white/10 hover:border-emerald-500 transition-colors">
                        <h4 className="text-gray-500 text-[10px] font-bold uppercase mb-2 md:mb-3 tracking-[0.2em] group-hover/item:text-white transition-colors">
                           {t.challenge[lang]}
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                          {project.description[lang]}
                        </p>
                      </div>
                      
                      <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/5 hover:bg-white/[0.07] transition-colors">
                        <h4 className="text-emerald-400 text-[10px] font-bold uppercase mb-3 md:mb-4 tracking-[0.2em] flex items-center gap-2">
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
                    className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5 flex items-center justify-between group/link cursor-pointer"
                 >
                    <span className="text-white font-bold text-xs md:text-sm group-hover/link:text-emerald-400 transition-colors tracking-widest uppercase">{t.btnInquire[lang]}</span>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover/link:bg-emerald-500 group-hover/link:text-black transition-all transform group-hover/link:rotate-45 group-hover/link:scale-110">
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
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
