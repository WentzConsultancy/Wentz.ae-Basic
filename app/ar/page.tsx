import Image from 'next/image';
import Footer from '@/components/Footer';
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
        links={{
          home: '/ar',
          advisory: '/ar/from-advisory-to-automation-ip',
          model: '/ar/3-phase-model',
          market: '/ar/market-opportunity',
          contact: '/ar/contact',
        }}
      />

      <section className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            وينتز للاستشارات
          </h1>
          <p className="text-xl text-gray-300">
            أتمتة الأمن السيبراني واستشارات مخاطر بقيادة الخبراء.
          </p>
          <p className="text-lg text-gray-400 mt-6">
            مدفوعون بخبرة تحويل SOC الواقعية، وقيادة الحوادث تحت تهديدات دولية،
            ونتائج أتمتة عبر الإمارات والخليج وEMEA.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تنفيذ مُثبت في بيئات منظمة وبنى تحتية حرجة
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              تقدم Wentz Consultancy استشارات وأتمتة أمن سيبراني بقيادة الخبراء
              للمؤسسات التي تؤثر فيها الإتاحة والنزاهة وزمن الاستجابة على النظام بأكمله.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              تمتد الخبرة عبر الأسواق المالية وبنية المدفوعات والاتصالات الوطنية
              والمرافق الحيوية — تحت ضغط تنظيمي وتخاطري مباشر.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            مشاركات مختارة في البنى التحتية والتنظيمية
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: '/logos/deribit.svg',
                name: 'Deribit (Coinbase Group)',
                caption:
                  'منصة مشتقات عالمية — استجابة لحوادث تهديدات دولية، تحويل SOC، جاهزية VARA وSOC 2 وSOX.',
              },
              {
                src: '/logos/ccv-fiserv.svg',
                name: 'CCV / Fiserv',
                caption:
                  'بنية معاملات مالية أوروبية ومحطات دفع تدعم توفر البنوك والتجزئة.',
              },
              {
                src: '/logos/abn-amro.svg',
                name: 'ABN AMRO',
                caption:
                  'بنك من الفئة الأولى — أتمتة SOC وهندسة كشف في بيئة منظمة.',
              },
              {
                src: '/logos/kpn.svg',
                name: 'KPN',
                caption:
                  'بنية اتصالات وطنية — أتمتة SOC مدفوعة بـ SOAR بخفض عبء العمل بشكل ملموس.',
              },
              {
                src: '/logos/brabant-water.svg',
                name: 'Brabant Water',
                caption:
                  'مرفق حيوي — قيادة SOC وحوكمة صيد التهديدات لبنية المياه الإقليمية.',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 text-center"
              >
                <div className="relative h-24 w-full mb-4">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 200px, 260px"
                  />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.caption}</p>
              </div>
            ))}
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

      <Footer poweredBy={contentAr.hero.poweredBy} />
    </main>
  );
}
