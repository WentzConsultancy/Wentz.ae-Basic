'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { SiteContent } from '@/content/siteContent';

type NavigationProps = {
  labels: SiteContent['nav'];
  isRtl?: boolean;
  aboutHref?: string;
};

export default function Navigation({ labels, isRtl, aboutHref }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const mobileAlignClass = isRtl ? 'text-right' : 'text-left';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
            aria-label="Home"
          >
            <div className="relative h-10 w-10">
              <Image
                src="/wentz-logo.png"
                alt="Wentz"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <span className="text-lg font-semibold hidden sm:inline">Wentz</span>
          </button>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('thesis')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.investmentThesis}
              </button>
              <a
                href={aboutHref ?? '/about-us'}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.about}
              </a>
              <button
                onClick={() => scrollToSection('model')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.threePhase}
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.team}
              </button>
              <button
                onClick={() => scrollToSection('dubai')}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.dubai}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {labels.contact}
              </button>
              <div className="flex items-center gap-2">
                <a
                  href="/"
                  className={`flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 text-lg ${
                    !isRtl ? 'bg-blue-600 text-white' : 'text-gray-300'
                  }`}
                  aria-label={labels.languageEnglish}
                >
                  🇬🇧
                </a>
                <a
                  href="/ar"
                  className={`flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 text-lg ${
                    isRtl ? 'bg-blue-600 text-white' : 'text-gray-300'
                  }`}
                  aria-label={labels.languageArabic}
                >
                  🇦🇪
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('thesis')}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.investmentThesis}
            </button>
            <a
              href={aboutHref ?? '/about-us'}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.about}
            </a>
            <button
              onClick={() => scrollToSection('model')}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.threePhase}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.team}
            </button>
            <button
              onClick={() => scrollToSection('dubai')}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.dubai}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full ${mobileAlignClass} bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium`}
            >
              {labels.contact}
            </button>
            <div className="flex items-center gap-3 px-3 py-2">
              <a
                href="/"
                className={`flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 text-lg ${
                  !isRtl ? 'bg-blue-600 text-white' : 'text-gray-300'
                }`}
                aria-label={labels.languageEnglish}
              >
                🇬🇧
              </a>
              <a
                href="/ar"
                className={`flex items-center justify-center h-9 w-9 rounded-full border border-slate-700 text-lg ${
                  isRtl ? 'bg-blue-600 text-white' : 'text-gray-300'
                }`}
                aria-label={labels.languageArabic}
              >
                🇦🇪
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
