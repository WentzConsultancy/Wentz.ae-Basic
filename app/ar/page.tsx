import Hero from '@/components/Hero';
import InvestmentThesis from '@/components/InvestmentThesis';
import ThreePhaseModel from '@/components/ThreePhaseModel';
import DubaiOpportunity from '@/components/DubaiOpportunity';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { contentAr } from '@/content/siteContent';

export default function ArabicHome() {
  return (
    <main
      dir={contentAr.dir}
      className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <Navigation
        labels={contentAr.nav}
        isRtl={contentAr.dir === 'rtl'}
        aboutHref="/ar/about-us"
      />
      <Hero content={contentAr.hero} isRtl={contentAr.dir === 'rtl'} />
      <InvestmentThesis content={contentAr.investmentThesis} />
      <ThreePhaseModel content={contentAr.threePhase} />
      <DubaiOpportunity content={contentAr.dubai} />
      <Contact content={contentAr.contact} />
    </main>
  );
}
