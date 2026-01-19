import type { SiteContent } from '@/content/siteContent';

type ThreePhaseModelProps = {
  content: SiteContent['threePhase'];
};

export default function ThreePhaseModel({ content }: ThreePhaseModelProps) {
  const phases = content.phases;

  return (
    <section id="model" className="py-24 bg-slate-900">
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

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 p-8 rounded-xl border border-slate-700 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-bold text-blue-500/30">
                      {phase.number}
                    </span>
                    <h3 className="text-3xl font-bold text-white">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {phase.description}
                  </p>
                  <ul className="space-y-3">
                    {phase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < phases.length - 1 && (
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  <div className="w-0.5 h-24 bg-gradient-to-b from-blue-600 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
