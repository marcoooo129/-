import React from 'react';
import { ArrowUpRight, Boxes, TrendingUp, MessageCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onOpenChat: (projectName: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenChat }) => {
  return (
    <div className="max-w-[90rem] mx-auto py-32 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/5 pb-12">
        <div>
           <span className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Selected Works</span>
           <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white">
              {"Case Studies".split("").map((char, i) => (
                <span key={i} className="char-float inline-block whitespace-pre" style={{transitionDelay: `${i*20}ms`}}>{char}</span>
              ))}
           </h2>
        </div>
        <div className="hidden md:block text-right">
           <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
             Strategic initiatives focusing on cost reduction, logistics optimization, and digital integration.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-20">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative rounded-[3rem] bg-[#080808] border border-white/5 overflow-hidden hover:border-emerald-500/30 transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)]">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
               {/* Visual Side */}
               <div className="relative bg-[#0c0c0c] p-12 lg:p-16 flex flex-col justify-center items-center overflow-hidden group-hover:bg-[#0e100f] transition-colors duration-700">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] group-hover:bg-emerald-500/15 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
                  
                  {/* Conceptual Icon Representation */}
                  <div className="relative z-10 grid grid-cols-2 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-2">
                    <div className="w-32 h-40 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl">
                        <Boxes className="text-white w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <div className="w-32 h-40 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 mt-16 flex items-center justify-center shadow-2xl">
                        <TrendingUp className="text-white w-12 h-12" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="mt-16 relative z-10">
                    <span className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md text-xs font-bold tracking-wider border border-white/10 text-gray-400 group-hover:text-white group-hover:border-emerald-500/40 transition-all uppercase">
                      Optimization Project
                    </span>
                  </div>
               </div>

               {/* Content Side */}
               <div className="p-10 lg:p-20 flex flex-col justify-between relative bg-black/20 backdrop-blur-sm">
                 <div>
                    <div className="flex justify-between items-start mb-10">
                        <span className="px-4 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold tracking-widest text-[10px] uppercase">{project.role}</span>
                        <span className="text-gray-500 text-xs font-mono font-medium">{project.period}</span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-5xl font-black italic tracking-tighter text-white mb-10 group-hover:text-emerald-50 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-10">
                      <div className="group/item pl-6 border-l-2 border-white/10 hover:border-emerald-500 transition-colors">
                        <h4 className="text-gray-500 text-[10px] font-bold uppercase mb-3 tracking-[0.2em] group-hover/item:text-white transition-colors">
                           Challenge
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-lg font-light">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-white/[0.07] transition-colors">
                        <h4 className="text-emerald-400 text-[10px] font-bold uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
                           Impact
                        </h4>
                        <p className="text-gray-200 leading-relaxed text-base font-medium">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                 </div>
                 
                 <div 
                    onClick={() => onOpenChat(project.title)}
                    className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between group/link cursor-pointer"
                 >
                    <span className="text-white font-bold text-sm group-hover/link:text-emerald-400 transition-colors tracking-widest uppercase">Inquire about Project</span>
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover/link:bg-emerald-500 group-hover/link:text-black transition-all transform group-hover/link:rotate-45 group-hover/link:scale-110">
                        <ArrowUpRight size={24} strokeWidth={2} />
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