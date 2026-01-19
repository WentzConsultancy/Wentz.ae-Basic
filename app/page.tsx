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
            Principal-Led Risk Advisory &amp; Cybersecurity Automation
            <span className="block">
              for Regulated Institutions and Market-Critical Infrastructure
            </span>
          </p>
          <p className="text-lg text-gray-400 mt-6">
            Driven by real-world SOC transformation, incident command under nation-state
            threats, and automation outcomes across the UAE, GCC &amp; EMEA.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Delivery in Regulated &amp; Market-Critical Environments
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Wentz Consultancy delivers principal-led cybersecurity advisory and automation
              for institutions where availability, integrity, and response time have systemic impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Experience spans financial markets, payment infrastructure, national telecom,
              and critical utilities — operating under live regulatory and adversarial pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Proven Delivery Across Regulated Domains
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Engagements span regulated financial markets, payment infrastructure,
              national telecom, and critical utilities. Delivery focuses on measurable
              SOC transformation, incident command under adversarial pressure, and
              repeatable automation outcomes.
            </p>
          </div>
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
