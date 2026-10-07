import { ArrowUpRight } from 'lucide-react'

export const PortfolioOverlay = ({
  onViewProjects,
  compact = false,
}) => {
  return (
    <div className={`relative z-20 flex flex-col items-center text-center w-full max-w-2xl mx-auto px-4 ${compact ? '-mt-4 sm:-mt-6' : '-mt-6 sm:-mt-8'}`}>
      {/* Black Horizontal Banner Bar */}
      <a
        href="./404.html"
        className="w-full block bg-black py-2 sm:py-2.5 px-4 sm:px-8 text-center shadow-2xl hover:bg-neutral-900 transition-colors cursor-pointer group"
        title="Explore Portfolio"
      >
        <h2 className={`font-display ${compact ? 'text-xl sm:text-2xl md:text-3xl' : 'text-2xl sm:text-4xl md:text-5xl'} font-extrabold tracking-tight text-white group-hover:text-cyan-300 uppercase transition-colors`}>
          MY PORTFOLIO
        </h2>
      </a>

      {/* Subtitle */}
      <p className={`${compact ? 'text-[9px] sm:text-[10px]' : 'text-[11px] sm:text-xs md:text-sm'} font-medium tracking-[0.25em] text-[#8ea8b4] uppercase mt-2.5 sm:mt-3`}>
        HELLO I AM PROJECT0001 UI/UX DESIGNER
      </p>

      {/* CTA Button VIEW PROJECT */}
      <button
        onClick={onViewProjects}
        className={`${compact ? 'mt-2.5 sm:mt-3 px-5 py-1.5 text-[10px]' : 'mt-4 sm:mt-5 px-6 sm:px-8 py-2 sm:py-2.5 text-xs'} group inline-flex items-center gap-2 border border-[#375867] hover:border-cyan-400 bg-[#162d36]/90 hover:bg-[#1a3844] font-mono-tech tracking-[0.25em] text-white uppercase rounded-none sm:rounded-sm transition-all duration-300 shadow-lg shadow-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer`}
      >
        <span>VIEW PROJECT</span>
        <ArrowUpRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  )
}
