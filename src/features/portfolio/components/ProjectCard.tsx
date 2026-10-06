import React from 'react';
import type { ProjectItem } from '@/core/types/project.types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  compact = false,
}) => {
  const isCenter = project.aspect === 'tall';

  const sizeClasses = compact
    ? isCenter
      ? 'w-24 sm:w-32 md:w-36 h-36 sm:h-44 md:h-52 z-10 -translate-y-3 sm:-translate-y-5 shadow-2xl shadow-black/80 ring-1 ring-white/10'
      : 'w-20 sm:w-28 md:w-32 h-28 sm:h-36 md:h-44 opacity-90 hover:opacity-100 ring-1 ring-white/10'
    : isCenter
      ? 'w-44 sm:w-60 md:w-72 h-64 sm:h-84 md:h-96 z-10 -translate-y-3 sm:-translate-y-6 shadow-2xl shadow-black/80 ring-1 ring-white/15'
      : 'w-36 sm:w-52 md:w-60 h-52 sm:h-72 md:h-84 opacity-90 hover:opacity-100 ring-1 ring-white/10';

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 rounded-none ${sizeClasses}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      aria-label={`View ${project.title}`}
    >
      {/* Background Project Image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:contrast-110 group-hover:brightness-100 transition-all duration-700"
      />

      {/* Subtle Dark Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#14262f]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

      {/* Quick Corner Category Badge */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur text-cyan-300 border border-cyan-500/30">
          {project.category.split(' ')[0]}
        </span>
      </div>
    </div>
  );
};
