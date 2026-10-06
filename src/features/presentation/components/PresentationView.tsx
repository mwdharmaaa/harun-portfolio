import React from 'react';
import { HeroSection } from '@/features/hero/components/HeroSection';
import { PortfolioSection } from '@/features/portfolio/components/PortfolioSection';
import { ContactSection } from '@/features/contact/components/ContactSection';
import { SocialSidebar } from '@/features/navigation/components/SocialSidebar';
import { ScrollIndicator } from '@/features/navigation/components/ScrollIndicator';

interface PresentationViewProps {
  onSuccessMessage: (name: string) => void;
  onCopyNotice: (label: string) => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  onSuccessMessage,
  onCopyNotice,
}) => {
  return (
    <div className="min-h-screen w-full bg-presentation-texture py-16 px-4 sm:px-8 flex flex-col items-center">
      {/* Presentation Top Title */}
      <div className="mb-14 text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-white uppercase drop-shadow-lg">
          UI/UX DESIGNER
        </h2>
      </div>

      {/* Mockup Frame 1: Hero Card */}
      <div className="w-full max-w-5xl bg-[#1b353e] rounded-md border border-slate-700/60 shadow-2xl relative overflow-hidden mb-16 p-4 sm:p-8">
        <div className="flex items-center justify-between mb-2 px-4 py-2 border-b border-white/5">
          <span className="font-display text-xl font-bold text-white tracking-wider">HE</span>
          <div className="flex gap-6 text-xs font-semibold tracking-widest text-slate-300">
            <span>PROJECTS</span>
            <span>CONTACT</span>
          </div>
        </div>
        <HeroSection onExplore={() => {}} />
        <SocialSidebar />
        <ScrollIndicator />
      </div>

      {/* Mockup Frame 2: Portfolio Card */}
      <div className="w-full max-w-5xl bg-[#1b353e] rounded-md border border-slate-700/60 shadow-2xl relative overflow-hidden mb-16 p-4 sm:p-8">
        <div className="flex items-center justify-between mb-2 px-4 py-2 border-b border-white/5">
          <span className="font-display text-xl font-bold text-white tracking-wider">HE</span>
          <div className="flex gap-6 text-xs font-semibold tracking-widest text-slate-300">
            <span>PROJECTS</span>
            <span>CONTACT</span>
          </div>
        </div>
        <PortfolioSection />
        <SocialSidebar />
        <ScrollIndicator />
      </div>

      {/* Mockup Frame 3: Contact Card */}
      <div className="w-full max-w-5xl bg-[#1b353e] rounded-md border border-slate-700/60 shadow-2xl relative overflow-hidden mb-16 p-4 sm:p-8">
        <div className="flex items-center justify-between mb-2 px-4 py-2 border-b border-white/5">
          <span className="font-display text-xl font-bold text-white tracking-wider">HE</span>
          <div className="flex gap-6 text-xs font-semibold tracking-widest text-slate-300">
            <span>PROJECTS</span>
            <span>CONTACT</span>
          </div>
        </div>
        <ContactSection
          onSuccessMessage={onSuccessMessage}
          onCopyNotice={onCopyNotice}
        />
        <SocialSidebar />
        <ScrollIndicator />
      </div>

      {/* Presentation Bottom Footer */}
      <div className="mt-8 mb-6 text-center">
        <p className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white">
          Thanks for watching
        </p>
      </div>
    </div>
  );
};
