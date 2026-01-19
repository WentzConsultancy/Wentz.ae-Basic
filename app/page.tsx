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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Selected Infrastructure &amp; Regulated Engagements
            </h2>
            <div className="space-y-5 text-gray-300 text-lg">
              <div>
                <p className="font-semibold text-white">Deribit (Coinbase Group)</p>
                <p>
                  Global derivatives trading platform — nation-state incident response,
                  SOC transformation, VARA, SOC 2 &amp; SOX readiness.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">CCV / Fiserv</p>
                <p>
                  European financial transaction backbone and payment-terminal
                  infrastructure supporting banks and retail availability.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">ABN AMRO</p>
                <p>
                  Tier-1 banking — SOC automation and detection engineering in a
                  regulated environment.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">KPN</p>
                <p>
                  National telecom infrastructure — SOAR-driven SOC automation delivering
                  measurable workload reduction.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Brabant Water</p>
                <p>
                  Critical utility — SOC leadership and threat-hunting governance for
                  regional water infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
