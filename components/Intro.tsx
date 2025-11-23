
import React, { useEffect, useState } from 'react';

const WORDS = ["LOADING...", "STRATEGY", "DESIGN", "PORTFOLIO", "MARCO SU"];

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Counter animation
    const duration = 3500; // Increased to 3.5 seconds
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Word cycle animation - synchronized with the longer duration
    const cycleInterval = setInterval(() => {
        setTextIndex(prev => (prev + 1) % WORDS.length);
    }, 600); // Slower word changes

    if (count >= 100) {
        clearInterval(cycleInterval);
        setTextIndex(WORDS.length - 1); // Ensure it ends on MARCO SU
    }

    return () => clearInterval(cycleInterval);
  }, [count]);

  useEffect(() => {
    if (count === 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 1000); // Wait for transition to finish
      }, 500); 
      return () => clearTimeout(exitTimer);
    }
  }, [count, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#030303] flex flex-col justify-between p-6 md:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-start opacity-70">
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase font-sans text-emerald-500 animate-pulse">
          Initializing System...
        </span>
        <span className="text-xl md:text-2xl font-black font-mono text-white tabular-nums">
          {Math.floor(count).toString().padStart(3, '0')}%
        </span>
      </div>

      {/* Center Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center overflow-hidden">
         <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white transition-all duration-300 transform scale-105">
            {WORDS[textIndex]}
         </h1>
      </div>

      {/* Bottom Bar & Progress */}
      <div className="flex flex-col md:flex-row justify-between items-end w-full gap-4">
        <div className="hidden md:block text-[10px] font-mono text-gray-500 leading-tight">
           STATUS: LOADING ASSETS<br/>
           LOC: FLORENCE, IT
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="w-full md:w-1/3 h-1.5 bg-white/10 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/5">
            <div 
                className="absolute top-0 left-0 h-full bg-emerald-500 transition-all duration-100 ease-linear shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                style={{ width: `${count}%` }}
            />
        </div>
      </div>
    </div>
  );
};

export default Intro;
