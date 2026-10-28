import React from 'react';
import { CATEGORIES, PROJECTS } from '../data/projects';
import { ProjectRow } from './ProjectRow';
import { GitBranch, ArrowRight } from '@phosphor-icons/react';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-6xl mx-auto"
      aria-label="Selected Projects"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-tide/15">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-slate-blue/60" />
            <h2 className="text-xs uppercase tracking-widest font-semibold text-slate-blue font-sans">
              02 &mdash; Selected Works
            </h2>
          </div>
          <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-tide font-light tracking-tight">
            Projects &amp; Systems
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-blue max-w-md font-sans">
          A collection of machine learning algorithms, APIs, client storefronts, and civic digital tools built for real users.
        </p>
      </div>

      {/* Projects Grouped by Category */}
      <div className="space-y-20 mt-16">
        {CATEGORIES.map((category, catIndex) => {
          const categoryProjects = PROJECTS.filter((p) => p.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="space-y-6">
              {/* Category Subheading */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-tide/20">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-mono text-slate-blue/60">
                    [{String(catIndex + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-tide font-medium tracking-tight">
                    {category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-blue bg-mist/60 px-2.5 py-1 rounded-full border border-tide/10">
                  {categoryProjects.length} {categoryProjects.length === 1 ? 'project' : 'projects'}
                </span>
              </div>

              {/* Project Rows */}
              <div className="divide-y-0" role="list">
                {categoryProjects.map((project, pIndex) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    index={pIndex}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer note in projects */}
      <div className="mt-16 pt-8 border-t border-tide/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-blue">
        <div className="flex items-center gap-2">
          <GitBranch size={16} weight="bold" className="text-seagreen" />
          <span>Need a customized machine learning pipeline or web application?</span>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-medium text-tide hover:text-slate-blue underline underline-offset-4 focus-visible:ring-1 focus-visible:ring-seagreen rounded"
        >
          <span>Discuss your requirements</span>
          <ArrowRight size={13} weight="bold" />
        </a>
      </div>
    </section>
  );
};
