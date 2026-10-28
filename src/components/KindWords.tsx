import React, { useState } from 'react';
import {
  Quotes,
  ChatCircleDots,
  Star,
  Play,
  Pause,
  ArrowsLeftRight,
  Sparkle,
  CheckCircle,
} from '@phosphor-icons/react';

interface TestimonialItem {
  id: string;
  category: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  status: string;
  rating: number;
}

const testimonialsRow1: TestimonialItem[] = [
  {
    id: 't1',
    category: 'Oreos Delicacies Client',
    quote:
      '[Client Review — Oreos Delicacies]: Real verified quote from client regarding the storefront and automated ordering portal delivery.',
    author: '[Client Name to be added]',
    role: 'Operations & Brand Lead',
    organization: 'Oreos Delicacies',
    status: 'Verified Project',
    rating: 5,
  },
  {
    id: 't2',
    category: 'ML & Predictive Modeling',
    quote:
      '[Engineering Collaborator]: Testimonial regarding Goodness\'s predictive modeling accuracy, clean data preprocessing pipelines, and rigorous model evaluation.',
    author: '[Engineering Partner]',
    role: 'Senior Data Scientist',
    organization: 'AI Research Lab',
    status: 'Collaborator',
    rating: 5,
  },
  {
    id: 't3',
    category: 'Full-Stack Model Delivery',
    quote:
      '[Product Partner]: Commending seamless integration of Scikit-learn/FastAPI inference backends with modern responsive React & Tailwind interfaces.',
    author: '[Technical Product Manager]',
    role: 'Product Lead',
    organization: 'Venture Studio',
    status: 'Verified Partner',
    rating: 5,
  },
];

const testimonialsRow2: TestimonialItem[] = [
  {
    id: 't4',
    category: 'Academic & Training',
    quote:
      '[Bitnox Technology Colleague]: Feedback regarding deep algorithmic curiosity, problem-solving speed, and commitment to accessible software engineering.',
    author: '[Lead Instructor]',
    role: 'Program Director',
    organization: 'Bitnox Technology',
    status: 'Verified Alumni',
    rating: 5,
  },
  {
    id: 't5',
    category: 'Open-Source & Kaggle',
    quote:
      '[Community Review]: Commendation on clear exploratory data analysis, well-structured Jupyter notebooks, and reproducible machine learning experiments.',
    author: '[Community Contributor]',
    role: 'Kaggle Master',
    organization: 'Open Data Group',
    status: 'Peer Review',
    rating: 5,
  },
  {
    id: 't6',
    category: 'UI/UX & Web Performance',
    quote:
      '[Web Client]: Feedback on lightning-fast load times, semantic accessibility, and elegant aesthetic execution that matches client brand identity.',
    author: '[Design Stakeholder]',
    role: 'Creative Director',
    organization: 'Digital Agency',
    status: 'Client Feedback',
    rating: 5,
  },
];

export const KindWords: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<'normal' | 'fast' | 'slow'>('normal');

  const speedDuration = {
    slow: '48s',
    normal: '30s',
    fast: '18s',
  }[speed];

  return (
    <section
      id="testimonials"
      className="bg-mist py-24 sm:py-32 border-y border-tide/10 overflow-hidden relative"
      aria-label="Client & Collaborator Testimonials"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-tide/15">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-slate-blue/60" />
              <h2 className="text-xs uppercase tracking-widest font-semibold text-slate-blue font-sans flex items-center gap-2">
                <span>05 — Kind Words</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-seagreen/15 text-seagreen text-[10px] font-mono font-medium">
                  <Sparkle size={10} weight="fill" />
                  Marquee Showcase
                </span>
              </h2>
            </div>
            <p className="font-serif text-4xl sm:text-5xl md:text-6xl text-tide font-light tracking-tight">
              Feedback &amp; Collaboration
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-slate-blue max-w-sm font-sans">
              Continuous live marquee demo showcasing client feedback and verified collaborative experiences. Hover over any card to pause.
            </p>

            {/* Interactive Marquee Controls */}
            <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-sand-light border border-tide/15 shadow-sm text-xs">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-mist-dark hover:bg-seagreen text-tide hover:text-white font-medium transition-all"
                title={isPlaying ? 'Pause marquee animation' : 'Resume marquee animation'}
                aria-label={isPlaying ? 'Pause marquee' : 'Resume marquee'}
              >
                {isPlaying ? (
                  <>
                    <Pause size={13} weight="bold" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play size={13} weight="bold" />
                    <span>Play</span>
                  </>
                )}
              </button>

              <div className="h-4 w-[1px] bg-tide/15" />

              <div className="flex items-center gap-1">
                {(['slow', 'normal', 'fast'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-1 rounded text-[11px] font-mono capitalize transition-all ${
                      speed === s
                        ? 'bg-seagreen text-white font-semibold'
                        : 'text-slate-blue hover:text-tide'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Outer Container with Gradient Masks for Smooth Edge Fade */}
      <div
        className="relative w-full space-y-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{
          ['--marquee-play-state' as any]: isPlaying ? 'running' : 'paused',
          ['--marquee-duration' as any]: speedDuration,
        }}
      >
        {/* ROW 1: Scrolling Left */}
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] [animation-play-state:var(--marquee-play-state)] [animation-duration:var(--marquee-duration)]">
          {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((item, idx) => (
            <TestimonialCard key={`r1-${item.id}-${idx}`} item={item} />
          ))}
        </div>

        {/* ROW 2: Scrolling Right (Reverse) */}
        <div className="flex w-max gap-6 animate-marquee-reverse hover:[animation-play-state:paused] [animation-play-state:var(--marquee-play-state)] [animation-duration:var(--marquee-duration)]">
          {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((item, idx) => (
            <TestimonialCard key={`r2-${item.id}-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* Subtle indicator under marquee */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 mt-8 flex items-center justify-between text-xs text-slate-blue/70 font-mono">
        <div className="flex items-center gap-2">
          <ArrowsLeftRight size={14} weight="bold" className="text-seagreen" />
          <span>Interactive Infinite Carousel · Responsive Touch &amp; Mouse Hover Enabled</span>
        </div>
        <span>Slots actively updated upon project verification</span>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="w-[360px] sm:w-[420px] shrink-0 bg-sand-light/80 hover:bg-mist-light/95 rounded-2xl p-6 sm:p-7 border border-tide/15 hover:border-seagreen/40 relative flex flex-col justify-between backdrop-blur-md shadow-md transition-all duration-300 group">
      <div>
        {/* Top Header of Card */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand text-[11px] font-mono uppercase tracking-wider text-slate-blue border border-tide/10">
            <ChatCircleDots size={14} weight="duotone" className="text-seagreen" />
            <span>{item.category}</span>
          </span>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} size={13} weight="fill" />
              ))}
            </div>
            <Quotes size={20} weight="fill" className="text-slate-blue/30" />
          </div>
        </div>

        {/* Quote Content */}
        <div className="p-4 rounded-xl bg-sand/60 border border-dashed border-tide/15 text-tide/90 font-serif italic text-base sm:text-lg leading-relaxed mb-5 group-hover:border-seagreen/30 transition-colors">
          &ldquo;{item.quote}&rdquo;
        </div>
      </div>

      {/* Author Footer */}
      <div className="pt-4 border-t border-tide/10 flex items-center justify-between text-xs">
        <div>
          <p className="font-sans font-semibold text-tide flex items-center gap-1.5">
            <span>{item.author}</span>
            <CheckCircle size={13} weight="fill" className="text-seagreen" />
          </p>
          <p className="text-slate-blue text-[11px]">
            {item.role} &middot; <span className="font-medium text-tide/80">{item.organization}</span>
          </p>
        </div>

        <span className="text-[10px] font-mono text-slate-blue/80 bg-mist/90 px-2 py-0.5 rounded border border-tide/10">
          {item.status}
        </span>
      </div>
    </div>
  );
};

