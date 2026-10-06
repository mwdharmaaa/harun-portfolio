import React from 'react';
import { Github, Instagram, Twitter } from 'lucide-react';
import { SOCIAL_LINKS } from '@/core/constants/navigation.constants';

export const SocialSidebar: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      default:
        return <Github className="w-4 h-4" />;
    }
  };

  return (
    <aside
      className="fixed left-6 sm:left-10 md:left-14 bottom-8 sm:bottom-12 z-40 flex flex-col items-center gap-5 pointer-events-auto"
      aria-label="Social Profiles"
    >
      <div className="flex flex-col gap-4">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-slate-400 hover:text-white transition-all transform hover:-translate-y-0.5 hover:scale-110 p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
          >
            {getIcon(link.icon)}
          </a>
        ))}
      </div>
    </aside>
  );
};
