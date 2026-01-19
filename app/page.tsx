import Hero from '@/components/Hero';
import InvestmentThesis from '@/components/InvestmentThesis';
import ThreePhaseModel from '@/components/ThreePhaseModel';
import DubaiOpportunity from '@/components/DubaiOpportunity';
import Contact from '@/components/Contact';
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
        aboutHref="/about-us"
      />
      <Hero content={contentEn.hero} isRtl={contentEn.dir === 'rtl'} />
      <InvestmentThesis content={contentEn.investmentThesis} />
      <ThreePhaseModel content={contentEn.threePhase} />
      <DubaiOpportunity content={contentEn.dubai} />
      <Contact content={contentEn.contact} />
    </main>
  );
}
