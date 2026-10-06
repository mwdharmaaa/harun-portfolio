import { useState } from 'react'
import { PresentationCardFrame } from './PresentationCardFrame'
import { PresentationHero } from './PresentationHero'
import { PresentationPortfolio } from './PresentationPortfolio'
import { PresentationContact } from './PresentationContact'
import { ProjectModal } from '@/features/portfolio/components/ProjectModal'
import { FEATURED_PROJECTS } from '@/core/constants/portfolio.constants'

export const PresentationView = ({
  onSuccessMessage,
  onCopyNotice,
}) => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenFeatured = () => {
    setSelectedProject(FEATURED_PROJECTS[1] || FEATURED_PROJECTS[0])
  }

  const scrollToCard = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen w-full bg-presentation-texture py-12 sm:py-16 px-4 sm:px-8 flex flex-col items-center">
      {/* Top Behance/Dribbble Title */}
      <header className="mb-10 sm:mb-14 text-center">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] text-white uppercase drop-shadow-lg">
          UI/UX DESINGER
        </h1>
      </header>

      {/* Screen Mockup Card 1: Hero */}
      <div id="card-hero" className="w-full flex justify-center">
        <PresentationCardFrame
          onNavigateProjects={() => scrollToCard('card-portfolio')}
          onNavigateContact={() => scrollToCard('card-contact')}
        >
          <PresentationHero />
        </PresentationCardFrame>
      </div>

      {/* Screen Mockup Card 2: Portfolio */}
      <div id="card-portfolio" className="w-full flex justify-center">
        <PresentationCardFrame
          onNavigateProjects={() => scrollToCard('card-portfolio')}
          onNavigateContact={() => scrollToCard('card-contact')}
        >
          <PresentationPortfolio onViewProjects={handleOpenFeatured} />
        </PresentationCardFrame>
      </div>

      {/* Screen Mockup Card 3: Contact */}
      <div id="card-contact" className="w-full flex justify-center">
        <PresentationCardFrame
          onNavigateProjects={() => scrollToCard('card-portfolio')}
          onNavigateContact={() => scrollToCard('card-contact')}
        >
          <PresentationContact
            onSuccessMessage={onSuccessMessage}
            onCopyNotice={onCopyNotice}
          />
        </PresentationCardFrame>
      </div>

      {/* Presentation Bottom Callout */}
      <footer className="mt-4 mb-8 text-center">
        <p className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white">
          Thanks for watching
        </p>
      </footer>

      {/* Project Case Study Dialog */}
      <ProjectModal
        project={selectedProject}
        projects={FEATURED_PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
      />
    </div>
  )
}
