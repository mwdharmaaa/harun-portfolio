import React from 'react';

export const PresentationHero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#8ea8b4] uppercase mb-2 sm:mb-3">
        I AM
      </p>
      <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-wider text-white leading-none">
        HARUN
      </h2>
      <p className="text-xs sm:text-sm font-medium tracking-[0.3em] text-[#8ea8b4] uppercase mt-3 sm:mt-5">
        UI/UX DESIGNER
      </p>
    </div>
  );
};
