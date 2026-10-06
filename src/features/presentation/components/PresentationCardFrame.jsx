import { SocialSidebar } from '@/features/navigation/components/SocialSidebar'
import { ScrollIndicator } from '@/features/navigation/components/ScrollIndicator'

export const PresentationCardFrame = ({
  children,
  onNavigateProjects,
  onNavigateContact,
}) => {
  return (
    <div className="w-full max-w-4xl lg:max-w-5xl aspect-[16/9] min-h-[440px] sm:min-h-[500px] md:min-h-[540px] bg-[#1a343f] rounded-none sm:rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-12 mb-12 sm:mb-16 border border-white/5 select-none">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between w-full z-20">
        <span className="font-display text-xl sm:text-2xl font-extrabold tracking-wider text-white">
          HE
        </span>
        <div className="flex items-center gap-6 sm:gap-8 text-xs font-semibold tracking-[0.25em] text-[#8ea8b4]">
          <button
            onClick={onNavigateProjects}
            className="hover:text-white transition-colors uppercase cursor-pointer"
          >
            PROJECTS
          </button>
          <button
            onClick={onNavigateContact}
            className="hover:text-white transition-colors uppercase cursor-pointer"
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* Center Screen Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-4">
        {children}
      </div>

      {/* Frame Corners: Social Profiles & Scroll Line */}
      <SocialSidebar position="absolute" compact={true} />
      <ScrollIndicator position="absolute" compact={true} />
    </div>
  )
}
