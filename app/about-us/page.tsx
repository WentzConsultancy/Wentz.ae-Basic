import Navigation from '@/components/Navigation';
import Team from '@/components/Team';
import { contentEn } from '@/content/siteContent';

export default function AboutUs() {
  return (
    <main
      dir={contentEn.dir}
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <Navigation
        labels={contentEn.nav}
        isRtl={contentEn.dir === 'rtl'}
        aboutHref="/about-us"
      />

      <section className="pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {contentEn.about.title}
          </h1>
          <p className="text-xl text-gray-400">{contentEn.about.storySubtitle}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {contentEn.about.storyTitle}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {contentEn.about.storyBody}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {contentEn.about.fabianTitle}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {contentEn.about.fabianPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {contentEn.about.elyTitle}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {contentEn.about.elyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-blue-900/30 border border-blue-700/40 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {contentEn.about.combinedTitle}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {contentEn.about.combinedBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Team content={contentEn.team} />
        </div>
      </section>
    </main>
  );
}
