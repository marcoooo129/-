import React from 'react';
import { Code, PenTool, Camera, TrendingUp, Globe, Cpu, Database, Layers } from 'lucide-react';

const SkillCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  items: string[]; 
  className?: string;
}> = ({ icon, title, items, className = "" }) => (
  <div className={`glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 ${className}`}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] group-hover:bg-white/10 transition-colors" />
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-white/10 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-syne font-bold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span key={idx} className="px-3 py-1.5 rounded-md bg-black/40 text-xs text-gray-300 border border-white/5 group-hover:border-white/20 transition-colors">
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto py-32 px-6">
      <div className="text-center mb-20">
        <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-4 block">Capabilities</span>
        <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mb-6">
          The Arsenal
        </h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Supply Chain - Large Card */}
        <SkillCard 
          className="lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-emerald-900/10 to-transparent"
          icon={<TrendingUp size={24} />} 
          title="Supply Chain & Operations"
          items={["Logistics Modeling", "Strategic Planning", "Cost Reduction", "Inventory Optimization", "Process Improvement", "Cross-functional Coordination"]}
        />
        
        <SkillCard 
          icon={<Code size={24} />} 
          title="Development"
          items={["Python", "Data Analysis", "Automation", "Algorithm Design"]}
        />
        
        <SkillCard 
          icon={<PenTool size={24} />} 
          title="Design & Creative"
          items={["Figma", "Photoshop (Coursera Certified)", "UI/UX", "Micro-films"]}
        />
        
        <SkillCard 
          className="lg:col-span-2"
          icon={<Globe size={24} />} 
          title="Languages & Global"
          items={["Chinese (Native)", "English (Fluent)", "Italian (Beginner)", "Intercultural Communication"]}
        />
        
        <SkillCard 
          icon={<Camera size={24} />} 
          title="Interests"
          items={["Photography", "TikTok Creator", "Basketball", "Road Cycling", "Volunteering"]}
        />
      </div>
    </div>
  );
};

export default Skills;