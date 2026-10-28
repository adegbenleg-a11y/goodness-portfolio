import React from 'react';
import { ArrowUpRight, LockSimple, ArrowSquareOut } from '@phosphor-icons/react';
import type { Project } from '../data/projects';

interface ProjectRowProps {
  project: Project;
  index: number;
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, index }) => {
  return (
    <article
      className="group relative border-b border-tide/15 py-7 sm:py-8 px-4 sm:px-6 rounded-xl transition-all duration-300 ease-out hover:bg-mist/70 hover:translate-x-1.5 motion-reduce:hover:translate-x-0 motion-reduce:hover:bg-mist/40"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-start md:items-center">
        {/* Number & Title */}
        <div className="md:col-span-4 flex items-baseline gap-4">
          <span className="text-xs font-mono text-slate-blue/60 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h4
              id={`project-title-${project.id}`}
              className="text-2xl sm:text-3xl font-serif font-medium text-tide group-hover:text-tide transition-colors tracking-tight"
            >
              {project.title}
            </h4>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mt-2.5" aria-label="Technologies used">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-block text-[11px] font-sans font-medium px-2.5 py-0.5 rounded-full bg-sand/80 group-hover:bg-sand text-slate-blue border border-tide/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="md:col-span-5">
          <p className="text-sm sm:text-base text-tide/80 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Extendable Screenshot slot if provided */}
          {project.screenshot && (
            <div className="mt-3 overflow-hidden rounded-lg border border-tide/10 max-w-xs shadow-sm">
              <img
                src={project.screenshot}
                alt={`${project.title} preview`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Links & Actions */}
        <div className="md:col-span-3 flex flex-col md:items-end gap-2 pt-1 md:pt-0">
          {project.links.map((link, lIndex) => {
            if (link.isContact) {
              return (
                <a
                  key={lIndex}
                  href={link.url}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-blue hover:text-tide bg-sand/70 hover:bg-sand px-3 py-1.5 rounded-full border border-tide/15 transition-all duration-200 group-hover:border-tide/30 focus-visible:ring-2 focus-visible:ring-seagreen"
                  aria-label={`${project.title}: ${link.label}`}
                >
                  <LockSimple size={14} weight="bold" className="text-seagreen" />
                  <span>{link.label}</span>
                </a>
              );
            }

            return (
              <a
                key={lIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-tide hover:text-slate-blue bg-sand/70 hover:bg-sand px-3.5 py-1.5 rounded-full border border-tide/15 hover:border-tide/30 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-seagreen"
                aria-label={`Open repository for ${project.title} (${link.label}) on GitHub in a new tab`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} weight="bold" className="text-slate-blue group-hover:text-tide transition-colors" />
              </a>
            );
          })}

          {/* Extendable Live Link slot if provided */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-seagreen hover:text-slate-blue mt-1"
            >
              <span>Live Site</span>
              <ArrowSquareOut size={13} weight="bold" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
