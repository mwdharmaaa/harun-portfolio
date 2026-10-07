# project0001 - UI/UX Designer Landing Page

A minimalist dark petroleum teal portfolio landing page for project0001 (UI/UX Designer), crafted with React 19, Tailwind CSS, and Vite. Features dual-mode rendering: an interactive continuous viewport landing page and a Behance-inspired showcase board presentation.

## Core Features

- **Dual View Modes**:
  - **Immersive Mode**: Smooth-scrolling, high-contrast landing page with reactive ambient cursor glow, active section highlights, and responsive drawers.
  - **Showcase Board Mode**: Chalkboard presentation canvas displaying the three core mockup cards side by side as shown in the original design specification.
- **Hero Display Section**:
  - Monumental geometric typography (`PROJECT0001`) with sub-pixel tracking and clean subtitle scale.
- **Triptych Portfolio Gallery**:
  - Three photographic cards with elevated center aspect ratio, hover transitions, and dark monochrome aesthetics.
  - Interactive case study modal with project specifications, design tools, and source code links.
- **Direct Contact Channel**:
  - Two-column split layout with contact information, interactive copy-to-clipboard actions, and form validation.
  - Lightweight toast notification system for instant action feedback.
- **Zero AI-Slop Discipline**:
  - Handcrafted SVG icons, neutral dark teal palette (`#1a333d`), zero emojis, and zero em dashes.

## Architectural Structure

This project follows Semantic Atomic Architecture principles with strict Single Responsibility Files (~150 lines soft cap):

```text
src/
├── core/
│   ├── types/          # Domain contracts (navigation, project, contact)
│   ├── constants/      # Static data and metadata specifications
│   └── hooks/          # Cross-cutting UI hooks (active section, scroll progress)
├── features/
│   ├── navigation/     # Top navbar, social sidebar, and scroll indicator
│   ├── hero/           # Hero section and ambient cursor spotlight
│   ├── portfolio/      # Triptych gallery cards, overlay, and case study modal
│   ├── contact/        # Contact info, validated contact form, and actions
│   ├── presentation/   # Mockup board canvas view
│   ├── footer/         # Monospace metadata and back-to-top control
│   └── toast/          # Lightweight toast notification system
├── App.tsx             # Root orchestrator
├── index.css           # Theme tokens and texture backgrounds
└── main.tsx            # Application entry point
```

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run verification suite (lint + build)
npm run lint
npm run build
```

### Containerized Deployment (Docker)

Launch the complete application via single-enter bash bundle:

```bash
bash deploy.sh
```

Or deploy directly with Docker Compose:

```bash
docker compose up -d --build
```

Access the application in your browser at `http://localhost:3000`.

## License

MIT License
