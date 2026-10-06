import { useState } from 'react'
import { FEATURED_PROJECTS } from '@/core/constants/portfolio.constants'
import { ProjectCard } from './ProjectCard'
import { PortfolioOverlay } from './PortfolioOverlay'
import { ProjectModal } from './ProjectModal'

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenFeatured = () => {
    // Open the center showcase project by default
    const centerProject = FEATURED_PROJECTS.find((p) => p.aspect === 'tall') || FEATURED_PROJECTS[0]
    setSelectedProject(centerProject)
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 sm:px-8 select-none"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        {/* Gallery Cards Container with Triptych Composition */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-6 md:gap-8 flex-wrap sm:flex-nowrap">
          {FEATURED_PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Center Typography Overlay & CTA */}
        <PortfolioOverlay onViewProjects={handleOpenFeatured} />
      </div>

      {/* Case Study Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        projects={FEATURED_PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </section>
  )
}
