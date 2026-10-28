import React from 'react';
import { Certificate, CalendarBlank, BookOpen, Clock } from '@phosphor-icons/react';

export const Training: React.FC = () => {
  return (
    <section
      id="training"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-6xl mx-auto"
      aria-label="Training and Education"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-tide/15">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-slate-blue/60" />
            <h2 className="text-xs uppercase tracking-widest font-semibold text-slate-blue font-sans">
              04 &mdash; Professional Development
            </h2>
          </div>
          <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-tide font-light tracking-tight">
            Training &amp; Learning
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-blue max-w-md font-sans">
          Structured technical coursework, continuous education, and foundational engineering development.
        </p>
      </div>

      {/* Training Card */}
      <div className="mt-12 bg-sand-light/60 border border-tide/15 rounded-2xl p-7 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-blue">
              <Certificate size={16} weight="duotone" className="text-seagreen" />
              <span>Technical Training Institution</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-medium text-tide tracking-tight">
              Bitnox Technology
            </h3>

            {/* Clearly marked spot to add course name and dates later */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Course Name Slot */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-mist/70 border border-slate-blue/20 text-xs sm:text-sm font-medium text-tide">
                <BookOpen size={15} weight="bold" className="text-slate-blue" />
                <span className="text-slate-blue font-mono text-xs">Course:</span>
                <span className="text-tide font-medium">
                  AI and Machine Learning
                </span>
              </div>

              {/* Dates Slot */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-mist/70 border border-slate-blue/20 text-xs sm:text-sm font-medium text-tide">
                <CalendarBlank size={15} weight="bold" className="text-slate-blue" />
                <span className="text-slate-blue font-mono text-xs">Period:</span>
                <span className="text-tide font-medium">
                  2025 &ndash; 2026
                </span>
              </div>
            </div>
          </div>

          {/* Status Note */}
          <div className="shrink-0 md:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand border border-tide/10 text-xs font-medium text-slate-blue">
              <Clock size={13} weight="bold" className="text-seagreen" />
              <span>Ready for certification details</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
