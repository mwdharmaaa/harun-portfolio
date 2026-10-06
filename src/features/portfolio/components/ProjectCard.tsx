import React from 'react';
import type { ProjectItem } from '@/core/types/project.types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isCenter = project.aspect === 'tall';

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 rounded-sm ${
        isCenter
          ? 'w-48 sm:w-60 md:w-72 h-64 sm:h-80 md:h-96 z-10 -translate-y-2 sm:-translate-y-4 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-500/20'
          : 'w-44 sm:w-56 md:w-64 h-56 sm:h-72 md:h-80 opacity-80 hover:opacity-100 ring-1 ring-white/10'
      }`}
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
