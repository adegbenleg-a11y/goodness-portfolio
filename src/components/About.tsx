import React from 'react';
import { Compass, Lightbulb, MapPin, TrendUp } from '@phosphor-icons/react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-mist py-24 sm:py-32 px-6 sm:px-8 md:px-12 border-y border-tide/10"
      aria-label="About Goodness"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-[1px] bg-slate-blue/60" />
          <h2 className="text-xs uppercase tracking-widest font-semibold text-slate-blue font-sans">
            01 &mdash; About Me
          </h2>
        </div>

        {/* Editorial Text Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-8">
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-tide leading-[1.25]">
              &ldquo;I'm Goodness, based in Nigeria. I'm passionate about web development, data analysis and machine learning, and I like building solutions to real-world problems.&rdquo;
            </p>

            <p className="text-lg md:text-xl text-tide/80 leading-relaxed font-sans font-light max-w-2xl">
              Beyond tech, I'm an entrepreneur who loves opportunities and keeps learning, so I can grow into a better version of myself.
            </p>
          </div>

          {/* Quick Context Highlights */}
          <div className="lg:col-span-4 bg-sand/60 rounded-2xl p-6 sm:p-8 border border-tide/10 backdrop-blur-sm space-y-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-mist-dark/30 text-tide shrink-0 mt-0.5">
                <MapPin size={18} weight="duotone" className="text-slate-blue" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-blue">Location</h3>
                <p className="text-sm font-medium text-tide mt-0.5">Nigeria &middot; West Africa (GMT+1)</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-mist-dark/30 text-tide shrink-0 mt-0.5">
                <TrendUp size={18} weight="bold" className="text-slate-blue" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-blue">Core Focus</h3>
                <p className="text-sm font-medium text-tide mt-0.5">Applied ML Models &middot; Predictive Systems &middot; Web Interfaces</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-mist-dark/30 text-tide shrink-0 mt-0.5">
                <Lightbulb size={18} weight="duotone" className="text-slate-blue" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-blue">Mindset</h3>
                <p className="text-sm font-medium text-tide mt-0.5">Curiosity-driven, entrepreneurial, continuous growth</p>
              </div>
            </div>

            <div className="pt-2 border-t border-tide/10">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-tide hover:text-slate-blue transition-colors focus-visible:ring-1 focus-visible:ring-seagreen rounded"
              >
                <Compass size={16} weight="bold" className="text-seagreen" />
                <span>See practical work below</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
