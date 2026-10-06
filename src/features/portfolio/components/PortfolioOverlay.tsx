import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PortfolioOverlayProps {
  onViewProjects: () => void;
}

export const PortfolioOverlay: React.FC<PortfolioOverlayProps> = ({ onViewProjects }) => {
  return (
    <div className="relative z-20 flex flex-col items-center text-center mt-6 sm:mt-8 px-4">
      {/* Portfolio Display Title */}
      <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase drop-shadow-md">
        MY PORTFOLIO
      </h2>

      {/* Subtitle */}
      <p className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.25em] text-[#93b0bd] uppercase mt-2 sm:mt-3">
        HELLO I AM HARUN UI/UX DESIGNER
      </p>

      {/* CTA Button VIEW PROJECT */}
      <button
        onClick={onViewProjects}
        className="mt-5 sm:mt-6 group inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 border border-slate-600/70 hover:border-cyan-400/80 bg-[#162a32]/60 hover:bg-[#1a3844] text-xs font-mono-tech tracking-[0.25em] text-white uppercase rounded-sm transition-all duration-300 shadow-lg shadow-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <span>VIEW PROJECT</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
