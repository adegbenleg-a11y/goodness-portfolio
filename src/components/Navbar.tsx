import React, { useState, useEffect } from 'react';
import { List, X, ArrowUpRight } from '@phosphor-icons/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sand/95 backdrop-blur-md border-b border-tide/10 py-3.5 shadow-sm text-tide'
          : 'bg-[#070709]/80 backdrop-blur-md border-b border-white/5 py-4 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className={`group inline-flex items-center gap-2 text-2xl md:text-3xl font-serif font-semibold tracking-tight transition-colors focus-visible:ring-2 focus-visible:ring-red-500 rounded ${
            isScrolled ? 'text-tide hover:text-slate-blue' : 'text-white hover:text-red-300'
          }`}
          aria-label="Goodness portfolio home"
        >
          <span className="relative">
            Goodness
            <span
              className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-300 ${
                isScrolled ? 'bg-seagreen group-hover:w-full' : 'bg-red-500 group-hover:w-full'
              }`}
            />
          </span>
          <span
            className={`w-2 h-2 rounded-full inline-block ml-0.5 animate-pulse ${
              isScrolled ? 'bg-seagreen' : 'bg-red-500 shadow-sm shadow-red-500/80'
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus-visible:ring-2 rounded ${
                isScrolled
                  ? 'text-tide/80 hover:text-tide focus-visible:ring-seagreen'
                  : 'text-neutral-300 hover:text-white focus-visible:ring-red-500'
              }`}
            >
              <span>{link.label}</span>
            </a>
          ))}

          <a
            href="#contact"
            className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full border transition-all duration-300 focus-visible:ring-2 ${
              isScrolled
                ? 'border-tide/20 text-tide hover:bg-tide hover:text-sand focus-visible:ring-seagreen'
                : 'border-red-500/40 text-red-200 bg-red-950/30 hover:bg-red-600 hover:text-white hover:border-red-600 shadow-sm shadow-red-900/30 focus-visible:ring-red-500'
            }`}
          >
            <span>Let's talk</span>
            <ArrowUpRight size={14} weight="bold" className="opacity-80" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors focus-visible:ring-2 ${
            isScrolled
              ? 'text-tide hover:bg-tide/5 focus-visible:ring-seagreen'
              : 'text-white hover:bg-white/10 focus-visible:ring-red-500'
          }`}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-6 pt-4 pb-8 shadow-2xl ${
            isScrolled
              ? 'bg-sand border-tide/15 text-tide'
              : 'bg-[#0a0a0d] border-neutral-800 text-white'
          }`}
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-serif font-medium transition-colors py-1 border-b ${
                  isScrolled
                    ? 'text-tide hover:text-slate-blue border-tide/5'
                    : 'text-neutral-200 hover:text-white border-neutral-800'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-3 rounded-full transition-colors mt-2 ${
                isScrolled
                  ? 'bg-tide text-sand hover:bg-slate-blue'
                  : 'bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-900/40'
              }`}
            >
              <span>Get in touch</span>
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
