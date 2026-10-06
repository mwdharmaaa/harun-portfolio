import { SOCIAL_LINKS } from '@/core/constants/navigation.constants'
import { FacebookIcon, InstagramIcon, TwitterIcon, GithubIcon } from './SocialIcons'

export const SocialSidebar = ({
  position = 'fixed',
  compact = false,
}) => {
  const renderIcon = (type) => {
    switch (type) {
      case 'github':
        return <GithubIcon className={compact ? 'w-3 h-3' : 'w-3.5 sm:w-4 h-3.5 sm:h-4'} />
      case 'instagram':
        return <InstagramIcon className={compact ? 'w-3 h-3' : 'w-3.5 sm:w-4 h-3.5 sm:h-4'} />
      case 'twitter':
        return <TwitterIcon className={compact ? 'w-3 h-3' : 'w-3.5 sm:w-4 h-3.5 sm:h-4'} />
      default:
        return <FacebookIcon className={compact ? 'w-3 h-3' : 'w-3.5 sm:w-4 h-3.5 sm:h-4'} />
    }
  }

  const positionClasses =
    position === 'absolute'
      ? 'absolute left-4 sm:left-8 md:left-10 bottom-4 sm:bottom-8 z-20'
      : 'fixed left-6 sm:left-10 md:left-14 bottom-8 sm:bottom-12 z-40'

  return (
    <aside
      className={`${positionClasses} flex flex-col items-center pointer-events-auto`}
      aria-label="Social Profiles"
    >
      <div className={`flex flex-col ${compact ? 'gap-2.5' : 'gap-3 sm:gap-4'}`}>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-[#7e99a6] hover:text-white transition-all transform hover:-translate-y-0.5 hover:scale-110 p-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
          >
            {renderIcon(link.icon)}
          </a>
        ))}
      </div>
    </aside>
  )
}
