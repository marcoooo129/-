import React from 'react';
import { Code, PenTool, Camera, TrendingUp, Globe } from 'lucide-react';
import { UI_TEXT } from '../constants';
import { Language } from '../types';

const SkillCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  items: string[]; 
  className?: string;
}> = ({ icon, title, items, className = "" }) => (
  <div className={`glass-panel p-6 md:p-10 rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 reveal-on-scroll ${className}`}>
    {/* Inner glow */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-[60px] group-hover:bg-emerald-500/10 transition-colors duration-700" />
    
    <div className="relative z-10">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 md:mb-10 text-white group-hover:text-emerald-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-lg group-hover:shadow-emerald-900/20">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-6 md:mb-8 group-hover:text-emerald-50 transition-colors">{title}</h3>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {items.map((item, idx) => (
          <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-white/5 text-[10px] md:text-xs font-bold text-gray-400 border border-white/5 group-hover:border-white/10 group-hover:text-gray-200 transition-all cursor-default hover:bg-white/10 hover:scale-105">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Skills = ({ lang }: { lang: Language }) => {
  const t = UI_TEXT.skills;
  
  return (
    <div className="max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-12 reveal-on-scroll">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">{t.label[lang]}</span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black italic tracking-tighter text-white mb-6">
          {t.title[lang].split("").map((char, i) => (
             <span key={i} className="char-float inline-block whitespace-pre" style={{transitionDelay: `${i*20}ms`}}>{char}</span>
          ))}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        <SkillCard 
          className="lg:col-span-2 lg:row-span-1"
          icon={<TrendingUp className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />} 
          title={t.catSupply[lang]}
          items={["Logistics Modeling", "Strategic Planning", "Cost Reduction", "Inventory Optimization", "Process Improvement", "Cross-functional Coordination"]}
        />
        
        <SkillCard 
          icon={<Code className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />} 
          title={t.catDev[lang]}
          items={["Python", "Data Analysis", "Automation", "Algorithm Design"]}
        />
        
        <SkillCard 
          icon={<PenTool className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />} 
          title={t.catDesign[lang]}
          items={["Figma", "Photoshop", "UI/UX", "Micro-films"]}
        />
        
        <SkillCard 
          className="lg:col-span-2"
          icon={<Globe className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />} 
          title={t.catLang[lang]}
          items={["Chinese (Native)", "English (Fluent)", "Italian (Beginner)", "Intercultural Communication"]}
        />
        
        <SkillCard 
          icon={<Camera className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />} 
          title={t.catInterest[lang]}
          items={["Photography", "TikTok Creator", "Basketball", "Road Cycling", "Volunteering"]}
        />
      </div>
    </div>
  );
};

export default Skills;