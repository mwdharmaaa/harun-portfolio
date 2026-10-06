import { useEffect } from 'react'
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

export const ProjectModal = ({
  project,
  projects,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!project) return null

  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#172c36] border border-cyan-500/20 rounded-lg overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700/60 bg-[#14262f]">
          <div>
            <span className="text-[11px] font-mono-tech uppercase tracking-widest text-cyan-400">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          <div className="relative w-full h-64 sm:h-80 rounded overflow-hidden border border-slate-700/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-110"
            />
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block font-mono-tech uppercase">Client</span>
              <span className="text-white font-medium">{project.client || 'Internal Concept'}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-mono-tech uppercase">Year</span>
              <span className="text-white font-medium">{project.year || '2026'}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-mono-tech uppercase">Role</span>
              <span className="text-white font-medium">{project.role || 'Design Lead'}</span>
            </div>
          </div>

          {project.tools && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-[11px] font-mono-tech rounded bg-[#13242c] text-slate-300 border border-slate-700/60"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-700/60 bg-[#14262f]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="p-2 rounded border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="p-2 rounded border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-tech tracking-wider text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 rounded bg-cyan-950/30 hover:bg-cyan-950/50 transition-colors"
            >
              <span>SOURCE CODE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
