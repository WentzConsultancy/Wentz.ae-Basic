import type { SiteContent } from '@/content/siteContent';

type InvestmentThesisProps = {
  content: SiteContent['investmentThesis'];
};

export default function InvestmentThesis({ content }: InvestmentThesisProps) {
  return (
    <section id="thesis" className="py-24 bg-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
          <p className="text-xl text-gray-200 mb-6">{content.intro}</p>
          <ol className="space-y-4 text-gray-300 text-lg">
            {content.steps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-gray-300 text-lg mt-6">{content.outro}</p>
        </div>
      </div>
    </section>
  );
}
