import React from 'react';
import { FEATURED_PROJECTS } from '@/core/constants/portfolio.constants';

interface PresentationPortfolioProps {
  onViewProjects: () => void;
}

export const PresentationPortfolio: React.FC<PresentationPortfolioProps> = ({
  onViewProjects,
}) => {
  const eyeImg = FEATURED_PROJECTS[0]?.image || '/images/portfolio-eye.jpg';
  const glassesImg = FEATURED_PROJECTS[1]?.image || '/images/portfolio-glasses.jpg';
  const danceImg = FEATURED_PROJECTS[2]?.image || '/images/portfolio-dance.jpg';

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
      {/* 3 Photos Triptych */}
      <div className="flex items-end justify-center gap-2 sm:gap-4 md:gap-5">
        {/* Left Photo: Eye */}
        <div className="w-20 sm:w-28 md:w-36 h-24 sm:h-32 md:h-40 overflow-hidden ring-1 ring-white/10 shadow-lg">
          <img
            src={eyeImg}
            alt="Vision Perception Interface"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>

        {/* Center Photo: Glasses (Taller & Elevated) */}
        <div className="w-24 sm:w-34 md:w-42 h-32 sm:h-42 md:h-52 overflow-hidden ring-1 ring-white/15 shadow-2xl z-10 -translate-y-3 sm:-translate-y-5">
          <img
            src={glassesImg}
            alt="Studio Desk Workspace"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>

        {/* Right Photo: Dance */}
        <div className="w-20 sm:w-28 md:w-36 h-24 sm:h-32 md:h-40 overflow-hidden ring-1 ring-white/10 shadow-lg">
          <img
            src={danceImg}
            alt="Kinetic Movement Interface"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      </div>

      {/* Solid Black Horizontal Bar */}
      <div className="w-full max-w-lg bg-black py-1.5 sm:py-2.5 px-6 text-center z-20 -mt-4 sm:-mt-6 shadow-2xl">
        <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase">
          MY PORTFOLIO
        </h3>
      </div>

      {/* Subtitle */}
      <p className="text-[9px] sm:text-xs font-medium tracking-[0.25em] text-[#8ea8b4] uppercase mt-2 sm:mt-3 text-center">
        HELLO I AM HARUN UI/UX DESIGNER
      </p>

      {/* Framed Outline Button */}
      <button
        onClick={onViewProjects}
        className="mt-2.5 sm:mt-3 px-5 sm:px-7 py-1.5 sm:py-2 border border-[#375867] hover:border-cyan-400 bg-[#162d36]/90 hover:bg-[#1f3c49] text-[10px] sm:text-xs font-mono-tech tracking-[0.25em] text-white uppercase cursor-pointer transition-all duration-300"
      >
        VIEW PROJECT
      </button>
    </div>
  );
};
