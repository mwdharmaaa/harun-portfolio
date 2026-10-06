export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'github' | 'instagram' | 'twitter' | 'linkedin' | 'dribbble';
}

export type ViewMode = 'immersive' | 'showcase';
