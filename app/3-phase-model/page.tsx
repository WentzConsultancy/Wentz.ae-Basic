import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ThreePhaseModel from '@/components/ThreePhaseModel';
import { contentEn } from '@/content/siteContent';

export default function ThreePhasePage() {
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
      <ThreePhaseModel content={contentEn.threePhase} />
      <Footer />
    </main>
  );
}
