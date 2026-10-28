import React from 'react';
import { ArrowUp } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t border-tide/15 bg-sand py-12 px-6 sm:px-8 md:px-12"
      role="contentinfo"
      aria-label="Site Footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-blue">
        {/* Copyright notice */}
        <p className="font-sans text-xs sm:text-sm text-tide/80">
          &copy; 2026 Adegbenle Goodness Boluwatife
        </p>

        {/* Center note */}
        <p className="text-xs text-slate-blue font-serif italic hidden md:block">
          Calm, quiet &amp; confident &mdash; Designed &amp; engineered for purposeful impact
        </p>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-tide hover:text-slate-blue transition-colors focus-visible:ring-2 focus-visible:ring-seagreen rounded py-1 px-2"
          aria-label="Scroll back to top of the page"
        >
          <span>Back to top</span>
          <ArrowUp size={14} weight="bold" className="transition-transform duration-200 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
};
