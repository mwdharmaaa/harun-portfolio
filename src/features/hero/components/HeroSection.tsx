import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-12 select-none"
    >
      <div className="flex flex-col items-center justify-center text-center z-10 max-w-4xl mx-auto">
        {/* Intro Tagline */}
        <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] text-[#8ea8b4] uppercase mb-3 sm:mb-4 animate-fade-in">
          I AM
        </p>

        {/* Hero Display Moniker */}
        <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-extrabold tracking-wider text-white leading-none drop-shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
          HARUN
        </h1>

        {/* Professional Subtitle */}
        <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.3em] text-[#8ea8b4] uppercase mt-4 sm:mt-6">
          UI/UX DESIGNER
        </p>

        {/* Quick Jump Action Button */}
        <button
          onClick={onExplore}
          className="mt-12 sm:mt-16 flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-700/60 bg-[#162b34]/50 hover:bg-[#1f3c49]/80 text-xs font-mono-tech tracking-[0.2em] text-slate-300 hover:text-white transition-all transform hover:translate-y-1 group"
          aria-label="Explore Portfolio"
        >
          <span>EXPLORE WORK</span>
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
