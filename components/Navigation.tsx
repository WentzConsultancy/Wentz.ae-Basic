'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { SiteContent } from '@/content/siteContent';

type NavigationProps = {
  labels: SiteContent['nav'];
  isRtl?: boolean;
  links: {
    home: string;
    advisory: string;
    model: string;
    market: string;
    contact: string;
  };
};

export default function Navigation({ labels, isRtl, links }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a
            href={links.home}
            className="text-base sm:text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            aria-label="Home"
          >
            Wentz Consultancy
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href={links.advisory}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.investmentThesis}
              </a>
              <a
                href={links.model}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.threePhase}
              </a>
              <a
                href={links.market}
                className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {labels.dubai}
              </a>
              <a
                href={links.contact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {labels.contact}
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="/"
                  className={`flex flex-col items-center justify-center rounded-md border border-slate-700 px-2 py-1 ${
                    !isRtl ? 'bg-blue-600/20' : ''
                  }`}
                  aria-label={labels.languageEnglish}
                >
                  <Image
                    src="/flags/uk.svg"
                    alt="English"
                    width={18}
                    height={12}
                  />
                  <span className="mt-1 text-[10px] text-gray-300">
                    {labels.languageEnglish}
                  </span>
                </a>
                <a
                  href="/ar"
                  className={`flex flex-col items-center justify-center rounded-md border border-slate-700 px-2 py-1 ${
                    isRtl ? 'bg-blue-600/20' : ''
                  }`}
                  aria-label={labels.languageArabic}
                >
                  <Image
                    src="/flags/uae.svg"
                    alt="Arabic"
                    width={18}
                    height={12}
                  />
                  <span className="mt-1 text-[10px] text-gray-300">
                    {labels.languageArabic}
                  </span>
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
            <a
              href={links.advisory}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.investmentThesis}
            </a>
            <a
              href={links.model}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.threePhase}
            </a>
            <a
              href={links.market}
              className={`block w-full ${mobileAlignClass} text-gray-300 hover:text-blue-400 px-3 py-2 text-base font-medium`}
            >
              {labels.dubai}
            </a>
            <a
              href={links.contact}
              className={`block w-full ${mobileAlignClass} bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium`}
            >
              {labels.contact}
            </a>
            <div className="flex items-center gap-3 px-3 py-2">
              <a
                href="/"
                className={`flex flex-col items-center justify-center rounded-md border border-slate-700 px-2 py-1 ${
                  !isRtl ? 'bg-blue-600/20' : ''
                }`}
                aria-label={labels.languageEnglish}
              >
                <Image
                  src="/flags/uk.svg"
                  alt="English"
                  width={18}
                  height={12}
                />
                <span className="mt-1 text-[10px] text-gray-300">
                  {labels.languageEnglish}
                </span>
              </a>
              <a
                href="/ar"
                className={`flex flex-col items-center justify-center rounded-md border border-slate-700 px-2 py-1 ${
                  isRtl ? 'bg-blue-600/20' : ''
                }`}
                aria-label={labels.languageArabic}
              >
                <Image
                  src="/flags/uae.svg"
                  alt="Arabic"
                  width={18}
                  height={12}
                />
                <span className="mt-1 text-[10px] text-gray-300">
                  {labels.languageArabic}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
