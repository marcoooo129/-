import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION, EXPERIENCE } from '../constants';

const TimelineItem: React.FC<{
  type: 'work' | 'edu';
  title: string;
  subtitle: string;
  period: string;
  location: string;
  details: string[];
}> = ({ type, title, subtitle, period, location, details }) => (
  <div className="relative pl-12 pb-16 last:pb-0 group">
    {/* Vertical Line */}
    <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent group-last:hidden"></div>
    
    {/* Node */}
    <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-[#030303] shadow-[0_0_0_4px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(16,185,129,0.2)] ${type === 'work' ? 'bg-emerald-500' : 'bg-indigo-500'}`}></div>
    
    <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:border-white/10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-2xl font-syne font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">{title}</h3>
          <div className="flex items-center gap-2 text-gray-400">
             {type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
             <span className="text-lg">{subtitle}</span>
          </div>
        </div>
        <div className="text-sm text-right mt-2 md:mt-0">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 font-mono text-xs mb-1">
            {period}
          </div>
          <p className="flex items-center gap-1 justify-end mt-1 text-gray-500 text-xs uppercase tracking-wider"><MapPin size={10} /> {location}</p>
        </div>
      </div>
      
      <div className="space-y-3 mt-6">
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-400 leading-relaxed pl-4 border-l border-white/10 hover:border-emerald-500/50 transition-colors">
            {detail}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div className="max-w-5xl mx-auto py-32 px-6">
      <div className="mb-16">
          <span className="text-emerald-500 font-mono text-xs tracking-widest uppercase mb-2 block">Career Path</span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-white">
            Experience & <br/><span className="text-gray-600">Education.</span>
          </h2>
      </div>
      
      <div className="space-y-2">
        {EXPERIENCE.map(exp => (
          <TimelineItem
            key={exp.id}
            type="work"
            title={exp.role}
            subtitle={exp.company}
            period={exp.period}
            location={exp.location}
            details={[exp.description]}
          />
        ))}
        
        {EDUCATION.map(edu => (
          <TimelineItem
            key={edu.id}
            type="edu"
            title={edu.school}
            subtitle={edu.degree}
            period={edu.period}
            location={edu.location}
            details={edu.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;