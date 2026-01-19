import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ThreePhaseModel from '@/components/ThreePhaseModel';
import { contentAr } from '@/content/siteContent';

export default function ThreePhasePageArabic() {
  return (
    <main
      dir={contentAr.dir}
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <Navigation
        labels={contentAr.nav}
        isRtl={contentAr.dir === 'rtl'}
        links={{
          home: '/ar',
          advisory: '/ar/from-advisory-to-automation-ip',
          model: '/ar/3-phase-model',
          market: '/ar/market-opportunity',
          contact: '/ar/contact',
        }}
      />
      <ThreePhaseModel content={contentAr.threePhase} />
      <Footer poweredBy={contentAr.hero.poweredBy} />
    </main>
  );
}
