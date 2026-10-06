import React from 'react';
import { useScrollProgress } from '@/core/hooks/useScrollProgress';

export const ScrollIndicator: React.FC = () => {
  const progress = useScrollProgress();

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
  };

  return (
    <aside
      className="fixed right-6 sm:right-10 md:right-14 bottom-8 sm:bottom-12 z-40 flex items-center pointer-events-auto cursor-pointer group"
      onClick={handleScrollDown}
      aria-label="Scroll down"
    >
      <div className="flex items-center gap-3 transform rotate-90 origin-right translate-x-2">
        <span className="text-[10px] md:text-xs font-mono-tech tracking-[0.3em] text-slate-400 group-hover:text-white uppercase transition-colors select-none">
          SCROLL
        </span>
        <div className="relative w-10 sm:w-14 h-[1px] bg-slate-700 overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 bg-cyan-400 transition-all duration-150"
            style={{ width: `${Math.max(15, progress)}%` }}
          />
        </div>
      </div>
    </aside>
  );
};
