import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Sparkle,
  Cpu,
  TerminalWindow,
  Play,
  Lightning,
  Brain,
  Sliders,
} from '@phosphor-icons/react';
import heroImage from '../assets/hero.png';
import { Boxes } from '@/components/ui/background-boxes';
import { HeroDemoPlayground } from './HeroDemoPlayground';

export const Hero: React.FC = () => {
  const [heroViewMode, setHeroViewMode] = useState<'cinematic' | 'demo' | 'terminal'>('cinematic');

  return (
    <section
      id="top"
      className="relative min-h-screen bg-[#070709] text-white flex flex-col justify-between pt-28 sm:pt-36 pb-16 px-4 sm:px-8 md:px-12 overflow-hidden"
      aria-label="Goodness Adegbenle Hero Showcase"
    >
      {/* ------------------------------------------------------------- */}
      {/* Ambient Red & Dark Volumetric Lighting Backdrops */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-36 w-96 h-96 bg-red-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-96 h-96 bg-red-700/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ------------------------------------------------------------- */}
      {/* Interactive Background Boxes (Aceternity UI matching hero page) */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto z-0 opacity-40">
        <div className="absolute inset-0 w-full h-full bg-[#070709] z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#070709_85%)] pointer-events-none" />
        <Boxes />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Top Status & View Mode Controls Bar */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 max-w-6xl mx-auto w-full mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Status indicator pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs tracking-wider uppercase font-medium text-neutral-300 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
          <span>Nigeria &middot; AI/ML Model Developer &middot; Open to Global Roles</span>
        </div>

        {/* Hero View Switcher (The Demo Kind of Hero View Toggle) */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-neutral-900/90 border border-neutral-800/90 backdrop-blur-lg shadow-lg shadow-black/50">
          <button
            type="button"
            id="view-cinematic-btn"
            onClick={() => setHeroViewMode('cinematic')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 ${
              heroViewMode === 'cinematic'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md shadow-red-700/40'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Sparkle size={14} weight="fill" />
            <span>Cinematic Hero</span>
          </button>

          <button
            type="button"
            id="view-demo-btn"
            onClick={() => setHeroViewMode('demo')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 ${
              heroViewMode === 'demo'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md shadow-red-700/40'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Play size={13} weight="fill" />
            <span>Live AI Demo</span>
          </button>

          <button
            type="button"
            id="view-terminal-btn"
            onClick={() => setHeroViewMode('terminal')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 ${
              heroViewMode === 'terminal'
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md shadow-red-700/40'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <TerminalWindow size={14} />
            <span>Terminal</span>
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* VIEW 1: CINEMATIC SHOWCASE (Main Default Hero Experience) */}
      {/* ------------------------------------------------------------- */}
      {heroViewMode === 'cinematic' && (
        <div className="relative z-10 max-w-6xl mx-auto w-full my-auto transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              {/* Engineering Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-800/40 text-red-300 text-xs font-mono tracking-wide">
                <Brain size={14} weight="bold" className="text-red-400" />
                <span>Production AI &middot; Deep Learning Systems</span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white leading-[1.08]">
                  Goodness <br />
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-red-300">
                    Adegbenle
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-lg font-light">
                  I turn ideas into practical solutions, from trained models to the web applications that put them to use.
                </p>
              </div>

              {/* Live Status Metric Indicators */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-3.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <Lightning size={14} className="text-red-400" />
                    <span>Inference Speed</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white">24ms</div>
                  <div className="text-[11px] text-neutral-400">Real-time REST API</div>
                </div>

                <div className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-3.5 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
                    <Cpu size={14} className="text-red-400" />
                    <span>Top Model Accuracy</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white">96.4%</div>
                  <div className="text-[11px] text-neutral-400">BitFinder Classifier</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  id="hero-launch-demo-btn"
                  onClick={() => setHeroViewMode('demo')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-medium tracking-wide transition-all shadow-lg shadow-red-700/30 hover:shadow-red-600/50 hover:scale-[1.02]"
                >
                  <Play size={16} weight="fill" />
                  <span>Launch Live Model Demo</span>
                </button>

                <a
                  href="#projects"
                  id="hero-see-projects-btn"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white text-sm font-medium tracking-wide transition-all hover:bg-neutral-800 hover:border-neutral-600"
                >
                  <span>See Projects</span>
                  <ArrowDown size={15} weight="bold" className="transition-transform group-hover:translate-y-0.5" />
                </a>

                <a
                  href="#contact"
                  id="hero-talk-btn"
                  className="group inline-flex items-center gap-1.5 px-4 py-3.5 text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight size={14} weight="bold" className="opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Right Stage: Cinematic Portrait Stage */}
            <div className="lg:col-span-7 relative order-1 lg:order-2 flex justify-center">
              {/* Glow backdrop behind the stage */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/25 via-red-900/30 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              {/* Main Visual Stage Container */}
              <div className="relative rounded-3xl overflow-hidden border border-red-500/40 shadow-2xl shadow-red-950/80 bg-[#070709]/95 backdrop-blur-xl group max-w-[620px] w-full p-4 sm:p-6 flex flex-col items-center justify-center min-h-[480px]">
                {/* Floating Top Control Bar */}
                <div className="w-full flex items-center justify-between gap-3 mb-3 z-20">
                  {/* Floating HUD Badge: Model active indicator */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 border border-red-500/40 backdrop-blur-md text-xs font-mono text-white shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="text-red-400 font-semibold">LIVE:</span>
                    <span>Model Engine Online</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-[11px] font-mono text-neutral-400 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-neutral-300">Portfolio Stage</span>
                  </div>
                </div>

                {/* Visual Stage Content: Cinematic Portrait */}
                <div className="relative rounded-2xl overflow-hidden border border-red-500/30 w-full group">
                  <img
                    src={heroImage}
                    alt="Adegbenle Goodness Boluwatife holding an open laptop with cinematic lighting"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* Bottom Footer Info Strip */}
                <div className="w-full flex items-center justify-between gap-3 mt-3 pt-3 border-t border-neutral-800/80 z-20 text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Adegbenle Goodness Boluwatife</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setHeroViewMode('demo')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/90 hover:bg-red-500 text-white text-xs font-medium tracking-wide transition-all shadow-md shadow-red-950"
                  >
                    <Sliders size={13} weight="bold" />
                    <span>Live Demo &rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* VIEW 2 & 3: LIVE DEMO PLAYGROUND & TERMINAL */}
      {/* ------------------------------------------------------------- */}
      {(heroViewMode === 'demo' || heroViewMode === 'terminal') && (
        <div className="relative z-10 max-w-6xl mx-auto w-full my-auto transition-all duration-500">
          <HeroDemoPlayground
            initialTab={heroViewMode === 'terminal' ? 'terminal' : 'bitfinder'}
            onClose={() => setHeroViewMode('cinematic')}
          />
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* Hero Bottom Strip & Transition Wave into the Website */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 max-w-6xl mx-auto w-full pt-10 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <Sparkle size={15} weight="fill" className="text-red-500" />
          <span>Focused on machine learning, predictive models &amp; full-stack delivery</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-neutral-300 hover:text-white transition-colors underline-offset-4 hover:underline flex items-center gap-1.5"
          >
            <span>Explore background &amp; skills</span>
            <ArrowDown size={13} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
};