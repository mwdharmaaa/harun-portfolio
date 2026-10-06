export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'normal' | 'tall';
  description: string;
  client?: string;
  year?: string;
  role?: string;
  tools?: string[];
  liveUrl?: string;
}
