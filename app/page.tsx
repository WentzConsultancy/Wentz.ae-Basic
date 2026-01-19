import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { contentEn } from '@/content/siteContent';

export default function Home() {
  return (
    <main
      dir={contentEn.dir}
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <Navigation
        labels={contentEn.nav}
        isRtl={contentEn.dir === 'rtl'}
        links={{
          home: '/',
          advisory: '/from-advisory-to-automation-ip',
          model: '/3-phase-model',
          market: '/market-opportunity',
          contact: '/contact',
        }}
      />

      <section className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Wentz Consultancy
          </h1>
          <p className="text-xl text-gray-300">
            Cybersecurity automation and principal-led risk advisory.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 shadow-2xl">
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
      </section>

      <Footer poweredBy={contentEn.hero.poweredBy} />
    </main>
  );
}
