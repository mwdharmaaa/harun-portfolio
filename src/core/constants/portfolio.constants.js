const BASE_URL = import.meta.env.BASE_URL || '/'

export const FEATURED_PROJECTS = [
  {
    id: 'vision-optics',
    title: 'Visionary Iris - AI Sensory Interface',
    category: 'Spatial Design & Bio-Telemetry',
    image: `${BASE_URL}images/portfolio-eye.jpg`,
    aspect: 'normal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    client: 'Lorem Ipsum Labs',
    year: '2026',
    role: 'Lead UI/UX Designer',
    tools: ['Figma', 'React', 'Three.js', 'Tailwind CSS'],
    liveUrl: './404.html',
  },
  {
    id: 'minimalist-studio',
    title: 'Architectural Workspace & Editor',
    category: 'Productivity & Creative Direction',
    image: `${BASE_URL}images/portfolio-glasses.jpg`,
    aspect: 'tall',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    client: 'Atelier Lorem',
    year: '2026',
    role: 'Product Designer',
    tools: ['Figma', 'JavaScript', 'Tailwind CSS', 'Radix UI'],
    liveUrl: './404.html',
  },
  {
    id: 'dynamic-rhythm',
    title: 'Kinetic Movement & Sound System',
    category: 'Interaction Design & Audio Visuals',
    image: `${BASE_URL}images/portfolio-dance.jpg`,
    aspect: 'normal',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    client: 'Ipsum Foundation',
    year: '2025',
    role: 'Interaction Designer',
    tools: ['Figma', 'Web Audio API', 'Canvas API', 'GLSL'],
    liveUrl: './404.html',
  },
]
