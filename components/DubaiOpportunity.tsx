import type { SiteContent } from '@/content/siteContent';

type DubaiOpportunityProps = {
  content: SiteContent['dubai'];
};

export default function DubaiOpportunity({ content }: DubaiOpportunityProps) {
  return (
    <section id="dubai" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            {content.subtitle}
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
              {content.marketTitle}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {content.marketSubtitle}
            </h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto text-center">
            {content.menaTitle}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {content.menaSections.map((section) => (
              <div
                key={section.title}
                className="bg-slate-800/60 border border-slate-700 rounded-xl p-6"
              >
                <h4 className="text-xl font-semibold text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="text-gray-300 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-blue-300 text-lg font-semibold mt-8 text-center">
            {content.menaResult}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {content.cards[0].title}
                  </h3>
                  <p className="text-gray-300">
                    {content.cards[0].body}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {content.cards[1].title}
                  </h3>
                  <p className="text-gray-300">
                    {content.cards[1].body}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {content.cards[2].title}
                  </h3>
                  <p className="text-gray-300">
                    {content.cards[2].body}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              {content.whyTitle}
            </h3>
            <ul className="space-y-4">
              {content.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300 text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
