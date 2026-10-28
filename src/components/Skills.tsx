import React from 'react';
import { Terminal, Cpu, Globe, Brain, Wrench, Stack } from '@phosphor-icons/react';
import type { IconProps } from '@phosphor-icons/react';

interface SkillGroup {
  title: string;
  icon: React.ComponentType<IconProps>;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      icon: Terminal,
      skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Machine learning and data',
      icon: Cpu,
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Model development'],
    },
    {
      title: 'Web',
      icon: Globe,
      skills: ['React', 'Tailwind CSS', 'REST APIs'],
    },
    {
      title: 'AI and integration',
      icon: Brain,
      skills: ['API integration', 'LLM integration'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Jupyter Notebook', 'PyCharm', 'VS Code', 'Git', 'GitHub', 'Postman'],
    },
    {
      title: 'Platforms',
      icon: Stack,
      skills: ['Kaggle', 'Google Colab', 'Vercel', 'GitHub'],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-mist py-24 sm:py-32 px-6 sm:px-8 md:px-12 border-y border-tide/10"
      aria-label="Technical Skills & Competencies"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-tide/15">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-slate-blue/60" />
              <h2 className="text-xs uppercase tracking-widest font-semibold text-slate-blue font-sans">
                03 &mdash; Toolkit &amp; Proficiencies
              </h2>
            </div>
            <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-tide font-light tracking-tight">
              Skills &amp; Capabilities
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-blue max-w-md font-sans">
            Core technologies and tools I utilize across model development, data analysis, API architecture, and modern interfaces.
          </p>
        </div>

        {/* Skills Grid - Simple Grouped Text, No Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillGroups.map((group, gIndex) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="bg-sand/65 rounded-2xl p-6 sm:p-7 border border-tide/10 backdrop-blur-sm transition-all duration-300 hover:bg-sand/90 hover:shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-tide/10">
                  <div className="p-2 rounded-lg bg-mist/80 text-tide">
                    <Icon size={18} weight="duotone" className="text-slate-blue" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-blue/60 block">
                      0{gIndex + 1}
                    </span>
                    <h3 className="text-base font-serif font-semibold text-tide tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>

                {/* Plain readable skill tags with clean spacing */}
                <div className="flex flex-wrap gap-2" aria-label={`Skills in ${group.title}`}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm font-sans font-medium px-3 py-1 rounded-full bg-sand-light/90 text-tide border border-tide/15 shadow-[0_1px_2px_rgba(31,45,53,0.04)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
