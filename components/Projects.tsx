import React from 'react';
import { ArrowUpRight, Boxes, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onOpenChat: (projectName: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenChat }) => {
  return (
    <div className="max-w-7xl mx-auto py-32 px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
           <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-2 block">Selected Works</span>
           <h2 className="text-4xl md:text-6xl font-syne font-bold text-white">
            Case Studies
           </h2>
        </div>
        <div className="hidden md:block text-right">
           <p className="text-gray-400 text-sm max-w-xs">
             Strategic initiatives focusing on cost reduction, logistics optimization, and digital integration.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative rounded-[2rem] bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-emerald-500/30 transition-colors duration-500">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
               {/* Visual Side */}
               <div className="relative bg-gradient-to-br from-emerald-900/20 to-black p-8 lg:p-12 flex flex-col justify-center items-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] group-hover:bg-emerald-500/30 transition-all duration-700" />
                  
                  {/* Conceptual Icon Representation */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 opacity-80 group-hover:scale-105 transition-transform duration-700">
                    <div className="w-24 h-32 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center">
                        <Boxes className="text-emerald-400 w-8 h-8" />
                    </div>
                    <div className="w-24 h-32 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 mt-8 flex items-center justify-center">
                        <TrendingUp className="text-emerald-400 w-8 h-8" />
                    </div>
                  </div>
                  <div className="mt-12 relative z-10">
                    <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur text-xs border border-white/10 text-gray-300">
                      Optimization Project
                    </span>
                  </div>
               </div>

               {/* Content Side */}
               <div className="p-8 lg:p-16 flex flex-col justify-between relative">
                 <div>
                    <div className="flex justify-between items-start">
                        <span className="text-emerald-500 font-bold tracking-wide text-xs uppercase">{project.role}</span>
                        <span className="text-gray-500 text-xs font-mono">{project.period}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-syne font-bold text-white mt-4 mb-6 leading-tight">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-wider flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-white rounded-full"></span> Challenge
                        </h4>
                        <p className="text-gray-400 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="bg-emerald-900/10 p-6 rounded-xl border border-emerald-500/10">
                        <h4 className="text-emerald-400 text-sm font-bold uppercase mb-2 tracking-wider flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Impact
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                 </div>
                 
                 <div 
                    onClick={() => onOpenChat(project.title)}
                    className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between group/link cursor-pointer"
                 >
                    <span className="text-white font-medium group-hover/link:text-emerald-400 transition-colors">View Case Detail (Ask AI)</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-emerald-500 group-hover/link:text-white transition-all">
                        <ArrowUpRight size={18} />
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