import { ArrowUp } from 'lucide-react'

export const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-slate-800/80 py-8 px-6 sm:px-12 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-500">
      <div className="flex items-center gap-2">
        <span className="text-white font-bold">0001</span>
        <span>/</span>
        <span>PROJECT0001 UI/UX PORTFOLIO</span>
      </div>

      <div className="flex items-center gap-6">
        <span>CRAFTED WITH PRECISION</span>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  )
}
