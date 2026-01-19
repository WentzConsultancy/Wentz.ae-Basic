import type { SiteContent } from '@/content/siteContent';

type InvestmentThesisProps = {
  content: SiteContent['investmentThesis'];
};

export default function InvestmentThesis({ content }: InvestmentThesisProps) {
  return (
    <section id="thesis" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-slate-900/70 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.items[0].title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {content.items[0].body}
            </p>
          </div>

          <div className="bg-slate-900/70 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.items[1].title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {content.items[1].body}
            </p>
          </div>

          <div className="bg-slate-900/70 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.items[2].title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {content.items[2].body}
            </p>
          </div>

          <div className="bg-slate-900/70 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {content.items[3].title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {content.items[3].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
