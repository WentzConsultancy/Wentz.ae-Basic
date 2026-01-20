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

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proven Delivery in Regulated &amp; Market-Critical Environments
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            Wentz Consultancy delivers principal-led cybersecurity advisory and automation
            for institutions where availability, integrity, and response time have systemic impact.
          </p>
          <p className="text-gray-300 text-base leading-relaxed mt-4">
            Experience spans financial markets, payment infrastructure, national telecom,
            and critical utilities — operating under live regulatory and adversarial pressure.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Measured Outcomes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-base">
            <li>13+ FTE equivalent SOC workload reduction through automation</li>
            <li>Executive-level incident command under nation-state threat activity</li>
            <li>VARA, SOC 2 &amp; SOX regulatory readiness in live operational environments</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Core Focus Areas
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-base">
            <li>SOC transformation and operating-model redesign</li>
            <li>Incident command and executive decision support</li>
            <li>Detection engineering and SOC automation</li>
            <li>Regulatory and audit readiness (VARA, SOC 2, SOX)</li>
          </ul>
        </div>
      </section>

      <section className="pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-base">
            Delivering principal-led cybersecurity advisory and automation across
            regulated institutions in the UAE, GCC &amp; EMEA.
          </p>
        </div>
      </section>

      <Footer line1={contentEn.footer.line1} line2={contentEn.footer.line2} />
    </main>
  );
}
