import { useScrollProgress } from '@/core/hooks/useScrollProgress'

export const ScrollIndicator = ({
  position = 'fixed',
  compact = false,
}) => {
  const progress = useScrollProgress()

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
  }

  const positionClasses =
    position === 'absolute'
      ? 'absolute right-4 sm:right-8 md:right-10 bottom-6 sm:bottom-8 z-20'
      : 'fixed right-6 sm:right-10 md:right-14 bottom-8 sm:bottom-12 z-40'

  return (
    <aside
      className={`${positionClasses} flex items-center pointer-events-auto cursor-pointer group`}
      onClick={handleScrollDown}
      aria-label="Scroll down"
    >
      <div className="flex items-center gap-2 transform rotate-90 origin-right translate-x-2">
        <span className={`${compact ? 'text-[9px]' : 'text-[10px] md:text-xs'} font-mono-tech tracking-[0.3em] text-[#8ea8b4] group-hover:text-white uppercase transition-colors select-none`}>
          SCROLL
        </span>
        <div className={`relative ${compact ? 'w-6' : 'w-8 sm:w-12'} h-[1px] bg-slate-600/70 overflow-hidden`}>
          <div
            className="absolute left-0 top-0 bottom-0 bg-cyan-400 transition-all duration-150"
            style={{ width: `${Math.max(20, progress)}%` }}
          />
        </div>
      </div>
    </aside>
  )
}
