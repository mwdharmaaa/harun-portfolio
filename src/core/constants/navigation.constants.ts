import type { NavItem, SocialLink } from '../types/navigation.types';

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
] as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { id: 'github', name: 'GitHub', url: 'https://github.com/mwdharmaaa', icon: 'github' },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { id: 'twitter', name: 'X / Twitter', url: 'https://x.com', icon: 'twitter' },
] as const;
