
import React, { useEffect, useState } from 'react';

const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["FIRENZE", "STRATEGY", "DESIGN", "MARCO SU"];

  useEffect(() => {
    // Word cycle animation
    const wordInterval = setInterval(() => {
      setWordIndex(prev => {
        if (prev < words.length - 1) return prev + 1;
        return prev;
      });
    }, 500); // Change word every 500ms

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(wordInterval);
          // Wait a moment at 100% before sliding up
          setTimeout(() => setIsExiting(true), 600);
          return 100;
        }
        // Random increment for realistic "loading" feel
        return Math.min(prev + Math.floor(Math.random() * 5) + 1, 100); 
      });
    }, 40);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
    };
  }, []);

  useEffect(() => {
    if (isExiting) {
      // Notify parent that animation is visually complete (after CSS transition)
      const timer = setTimeout(() => {
        onComplete();
      }, 1000); // Match the duration-1000 class
      return () => clearTimeout(timer);
    }
  }, [isExiting, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[999] bg-[#030303] flex flex-col justify-between p-8 md:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-start animate-in fade-in duration-700">
         <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Portfolio 2025</span>
         <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Initialising System
         </span>
      </div>

      {/* Center Text Sequence */}
      <div className="flex justify-center items-center flex-grow overflow-hidden">
         <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white uppercase animate-in slide-in-from-bottom-10 duration-300 key={wordIndex}">
            {words[wordIndex]}
         </h1>
      </div>

      {/* Bottom Bar & Progress */}
      <div className="flex justify-between items-end animate-in fade-in duration-700 delay-200">
         <span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden md:block">Based in Florence, Italy</span>
         
         <div className="flex flex-col items-end w-full md:w-auto">
            <span className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">{progress}%</span>
            <div className="w-full md:w-64 h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 transition-all duration-75 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Intro;
