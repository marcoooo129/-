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
  <div className="relative pl-16 pb-24 last:pb-0 group">
    {/* Vertical Line */}
    <div className="absolute left-[9px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-white/10 to-transparent group-last:hidden"></div>
    
    {/* Node */}
    <div className={`absolute left-0 top-4 w-5 h-5 rounded-full border-4 border-[#030303] transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] ${type === 'work' ? 'bg-emerald-500' : 'bg-white'}`}></div>
    
    <div className="glass-panel p-10 rounded-[2rem] hover:bg-white/[0.07] transition-all duration-500 border border-white/5 hover:border-emerald-500/30 hover:-translate-y-1 group-hover:shadow-2xl">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
          <div className="flex items-center gap-3 text-gray-400 text-base">
             {type === 'work' ? <Briefcase size={18} className="text-emerald-500" /> : <GraduationCap size={18} className="text-white" />}
             <span className="font-medium">{subtitle}</span>
          </div>
        </div>
        <div className="text-right mt-6 md:mt-0 flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-mono text-xs mb-1">
            {period}
          </div>
          <p className="flex items-center gap-1.5 justify-end mt-1 text-gray-500 text-[10px] uppercase tracking-wider font-bold"><MapPin size={12} /> {location}</p>
        </div>
      </div>
      
      <div className="space-y-4 pt-6 border-t border-white/5">
        {details.map((detail, idx) => (
          <p key={idx} className="text-gray-400 leading-relaxed text-base font-light">
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
      <div className="mb-24">
          <span className="text-emerald-500 font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Career Path</span>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white leading-none">
            {"Experience &".split("").map((char, i) => (
                <span key={i} className="char-float inline-block whitespace-pre" style={{transitionDelay: `${i*20}ms`}}>{char}</span>
            ))}
             <br/>
             <span className="text-gray-600">
                {"Education.".split("").map((char, i) => (
                    <span key={`edu-${i}`} className="char-float inline-block whitespace-pre" style={{transitionDelay: `${i*20 + 300}ms`}}>{char}</span>
                ))}
             </span>
          </h2>
      </div>
      
      <div className="space-y-4">
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