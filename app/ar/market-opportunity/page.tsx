import DubaiOpportunity from '@/components/DubaiOpportunity';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { contentAr } from '@/content/siteContent';

export default function MarketOpportunityPageArabic() {
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
      <DubaiOpportunity content={contentAr.dubai} />
      <Footer line1={contentAr.footer.line1} line2={contentAr.footer.line2} />
    </main>
  );
}
