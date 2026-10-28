import React, { useState } from 'react';
import {
  EnvelopeSimple,
  WhatsappLogo,
  TelegramLogo,
  GithubLogo,
  LinkedinLogo,
  ArrowSquareOut,
  Copy,
  Check,
} from '@phosphor-icons/react';
import type { IconProps } from '@phosphor-icons/react';

interface ContactChannel {
  name: string;
  url: string;
  handle: string;
  icon: React.ComponentType<IconProps>;
  description: string;
}

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'adegbenleg@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const contactChannels: ContactChannel[] = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/2349074704123',
      handle: '+234 907 470 4123',
      icon: WhatsappLogo,
      description: 'Quick chat & messaging',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/+2349074704123',
      handle: '+234 907 470 4123',
      icon: TelegramLogo,
      description: 'Direct messaging',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/adegbenleg-a11y',
      handle: 'adegbenleg-a11y',
      icon: GithubLogo,
      description: 'Open source & repositories',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adegbenle-.goodness-57bb26418',
      handle: 'Goodness Adegbenle',
      icon: LinkedinLogo,
      description: 'Professional network',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-6xl mx-auto"
      aria-label="Contact Information"
    >
      {/* Section Tag */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-[1px] bg-slate-blue/60" />
        <h2 className="text-xs uppercase tracking-widest font-semibold text-slate-blue font-sans">
          06 &mdash; Contact
        </h2>
      </div>

      {/* Large Heading */}
      <div className="space-y-6 max-w-4xl">
        <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-tide font-light tracking-tight leading-[1.05]">
          Let's build something useful.
        </h3>
        <p className="text-lg sm:text-xl text-slate-blue font-sans font-normal max-w-2xl leading-relaxed">
          Whether you're developing machine learning models, deploying modern web applications, or exploring a new collaboration, I'd love to hear from you.
        </p>
      </div>

      {/* Primary Email Box */}
      <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-mist/60 border border-tide/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-blue flex items-center gap-2">
            <EnvelopeSimple size={16} weight="bold" className="text-seagreen" />
            Direct Email
          </span>
          <a
            href={`mailto:${emailAddress}`}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-tide hover:text-slate-blue transition-colors block mt-2 underline decoration-tide/30 underline-offset-8 hover:decoration-slate-blue focus-visible:ring-2 focus-visible:ring-seagreen rounded"
          >
            {emailAddress}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${emailAddress}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-tide text-sand text-sm font-medium hover:bg-slate-blue transition-all duration-200 focus-visible:ring-2 focus-visible:ring-seagreen"
          >
            <span>Send Email</span>
            <ArrowSquareOut size={15} weight="bold" />
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-tide/20 text-tide text-sm font-medium hover:bg-sand transition-all duration-200 focus-visible:ring-2 focus-visible:ring-seagreen"
            title="Copy email address"
            aria-label="Copy email address to clipboard"
          >
            {copied ? (
              <>
                <Check size={16} weight="bold" className="text-seagreen" />
                <span className="text-xs">Copied</span>
              </>
            ) : (
              <>
                <Copy size={16} weight="bold" className="text-slate-blue" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Other Channels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {contactChannels.map((channel) => {
          const Icon = channel.icon;
          return (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-sand-light/60 hover:bg-mist/70 border border-tide/10 hover:border-tide/25 transition-all duration-200 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-seagreen"
              aria-label={`Open Goodness's ${channel.name} (${channel.handle}) in a new tab`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-sand border border-tide/10 text-tide group-hover:text-slate-blue transition-colors">
                    <Icon size={20} weight="regular" />
                  </div>
                  <ArrowSquareOut size={15} weight="bold" className="text-slate-blue/60 group-hover:text-tide group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h4 className="font-serif text-xl font-medium text-tide">{channel.name}</h4>
                <p className="text-xs text-slate-blue mt-1">{channel.description}</p>
              </div>
              <p className="text-xs font-mono text-tide/80 mt-5 pt-3 border-t border-tide/10 truncate">
                {channel.handle}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
