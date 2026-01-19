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

      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            تنفيذ مُثبت في بيئات منظمة وبنى تحتية حرجة
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            تقدم Wentz Consultancy استشارات وأتمتة أمن سيبراني بقيادة الخبراء
            للمؤسسات التي تؤثر فيها الإتاحة والنزاهة وزمن الاستجابة على النظام بأكمله.
          </p>
          <p className="text-gray-300 text-base leading-relaxed mt-4">
            تمتد الخبرة عبر الأسواق المالية وبنية المدفوعات والاتصالات الوطنية
            والمرافق الحيوية — تحت ضغط تنظيمي وتخاطري مباشر.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            نتائج قابلة للقياس
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-base">
            <li>خفض عبء العمل في SOC بما يعادل أكثر من 13 موظفاً عبر الأتمتة</li>
            <li>قيادة تنفيذية للحوادث تحت نشاط تهديدات دولية</li>
            <li>جاهزية VARA وSOC 2 وSOX في بيئات تشغيلية حيّة</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            مجالات التركيز الأساسية
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300 text-base">
            <li>تحويل SOC وإعادة تصميم نموذج التشغيل</li>
            <li>قيادة الحوادث ودعم قرارات الإدارة التنفيذية</li>
            <li>هندسة الكشف وأتمتة SOC</li>
            <li>جاهزية الامتثال والمراجعات (VARA وSOC 2 وSOX)</li>
          </ul>
        </div>
      </section>

      <section className="pt-12 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-300 text-base">
            تقديم استشارات وأتمتة أمن سيبراني بقيادة الخبراء عبر المؤسسات المنظمة
            في الإمارات والخليج وEMEA.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
