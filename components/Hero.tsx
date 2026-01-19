'use client';

import Image from 'next/image';
import type { SiteContent } from '@/content/siteContent';

type HeroProps = {
  content: SiteContent['hero'];
  isRtl?: boolean;
};

export default function Hero({ content, isRtl }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {content.title}
          <span className="block mt-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {content.highlight}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          {content.subtitle}
        </p>
        <div
          className={`flex items-center justify-center gap-4 mb-10 ${
            isRtl ? 'flex-row-reverse' : ''
          }`}
        >
          <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
            {content.poweredBy}
          </span>
          <div className="relative h-10 w-36">
            <Image
              src="/synapsis-logo.png"
              alt="Synapsis IT"
              fill
              className="object-contain"
              sizes="144px"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            {content.ctaPrimary}
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('thesis');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-blue-500 hover:border-blue-400 text-blue-400 hover:text-blue-300 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
          >
            {content.ctaSecondary}
          </button>
        </div>

        <div className="mt-12 mx-auto max-w-4xl rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 shadow-2xl">
          <div className="px-6 py-4 text-left text-sm font-semibold text-blue-400">
            {content.heritageLabel}
          </div>
          <video
            className="w-full"
            controls
            muted
            playsInline
            preload="metadata"
            poster="/synapsis-logo.png"
          >
            <source src="/synapsis-heritage.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
