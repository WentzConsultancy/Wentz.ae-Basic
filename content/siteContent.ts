export type SiteContent = {
  lang: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
  nav: {
    investmentThesis: string;
    threePhase: string;
    about: string;
    dubai: string;
    contact: string;
    languageEnglish: string;
    languageArabic: string;
  };
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    poweredBy: string;
    heritageLabel: string;
  };
  footer: {
    line1: string;
    line2: string;
  };
  investmentThesis: {
    title: string;
    intro: string;
    steps: string[];
    outro: string;
  };
  about: {
    title: string;
    foundersTitle: string;
    storyTitle: string;
    storySubtitle: string;
    storyBody: string;
    fabianTitle: string;
    fabianPoints: string[];
    elyTitle: string;
    elyPoints: string[];
    combinedTitle: string;
    combinedBody: string;
  };
  threePhase: {
    title: string;
    subtitle: string;
    phases: Array<{
      number: string;
      title: string;
      description: string;
      features: string[];
    }>;
  };
  team: {
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      role: string;
      image: string;
      bio: string;
      objectPosition?: string;
    }>;
  };
  dubai: {
    title: string;
    subtitle: string;
    marketTitle: string;
    marketSubtitle: string;
    menaTitle: string;
    menaIntro: string;
    menaSections: Array<{
      title: string;
      points: string[];
    }>;
    menaResult: string;
    cards: Array<{ title: string; body: string }>;
    whyTitle: string;
    points: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    locationTitle: string;
    location: string;
    emailTitle: string;
    email: string;
    linkedinTitle: string;
    linkedinUrl: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    footer: string;
  };
};

export const contentEn: SiteContent = {
  lang: 'en',
  dir: 'ltr',
  nav: {
    investmentThesis: 'From Advisory to Automation IP',
    threePhase: '3-Phase Model',
    about: 'About Us',
    dubai: 'Market Opportunity',
    contact: 'Get in Touch',
    languageEnglish: 'English',
    languageArabic: 'Arabic',
  },
  hero: {
    title: 'Transforming Principal-Led Risk Expertise into',
    highlight: 'Scalable Automation Revenue',
    subtitle:
      'Building the future of cybersecurity automation through proven expertise and innovative technology solutions',
    ctaPrimary: 'Get Started',
    ctaSecondary: 'Learn More',
    poweredBy:
      'Delivery backed by Synapsis IT (EU) — leveraging a proven engineering and automation foundation across regulated environments.',
    heritageLabel: 'Heritage Video',
  },
  footer: {
    line1: 'Delivery backed by Synapsis IT (EU)',
    line2: 'Engineering and automation support across regulated environments',
  },
  investmentThesis: {
    title: 'From Advisory to Automation IP',
    intro:
      'Wentz Consultancy operates a structured progression from advisory to execution:',
    steps: [
      'Principal-led incident command and risk advisory',
      'SOC transformation and automation design',
      'Repeatable automation IP embedded into client environments',
    ],
    outro:
      'This model ensures advisory insight translates directly into operational outcomes, not reports.',
  },
  about: {
    title: 'About Us',
    foundersTitle: 'Founders',
    storyTitle: 'Our Story',
    storySubtitle: 'A Synergistic Team Creating a Defensible Niche',
    storyBody:
      'Two distinct leadership profiles, aligned in purpose, create a differentiated and defensible market position for integrated risk advisory and automation.',
    fabianTitle: 'Principal-Led Cybersecurity (Fabian)',
    fabianPoints: [
      'SOC Transformation & Automation',
      'Threat-Led Risk Scrutiny',
      'Incident Command',
    ],
    elyTitle: 'Financial & Operational Rigour (Ely)',
    elyPoints: [
      'Supply Chain & Logistics Expertise',
      'Financial Management & Process Optimisation',
      'Cross-Border Execution',
    ],
    combinedTitle: 'Combined Offering',
    combinedBody:
      'Integrated Risk Advisory — a unique ability to assess and automate risk across technology, finance, and physical supply chains. We offer a seamless client journey from baseline financial/logistics consulting to deep-dive cybersecurity audits, providing holistic risk reduction.',
  },
  threePhase: {
    title: '3-Phase Model',
    subtitle:
      'A proven framework for transforming expertise into scalable automation revenue',
    phases: [
      {
        number: '01',
        title: 'Advisory Foundation',
        description:
          'Leverage principal-level expertise to deliver high-value advisory services. Build deep client relationships and understand unique risk landscapes while establishing credibility and trust.',
        features: [
          'Principal-led risk assessments',
          'Strategic cybersecurity consulting',
          'Custom automation roadmap development',
          'Executive advisory services',
        ],
      },
      {
        number: '02',
        title: 'Automation Productization',
        description:
          'Transform proven methodologies and expert knowledge into repeatable automation products. Package advisory insights into scalable technology solutions that deliver consistent value.',
        features: [
          'IP development and documentation',
          'Automation tool creation',
          'Standardized service delivery',
          'Productized service offerings',
        ],
      },
      {
        number: '03',
        title: 'Scale & Expansion',
        description:
          "Scale automated solutions across markets and geographies. Dubai's explosive growth in logistics, finance, and high-value services creates a surging demand for our integrated risk advisory. Leverage Dubai as a strategic hub for EMEA and APAC expansion while maintaining quality and consistency.",
        features: [
          'Regional market expansion',
          'Partner ecosystem development',
          'Continuous product innovation',
          'Revenue diversification',
        ],
      },
    ],
  },
  team: {
    title: 'Founders',
    subtitle: 'Principal-level expertise driving cybersecurity automation innovation',
    members: [
      {
        name: 'Fabian',
        role: 'Principal & Co-Founder',
        image: '/fabian.jpg',
        bio:
          'Proven Business Acumen: Founder of Synapsis IT, generating €200k+ annual revenue. Deep Technical Expertise: 8+ years in SOC leadership, incident command (nation-state intrusions, ransomware), and automation architecture for some of Europe’s most demanding regulated environments. Managing experience since 2005, leading 40-player teams in adversarial, high-pressure environments.',
        objectPosition: '50% 70%',
      },
      {
        name: 'Ely',
        role: 'Principal & Co-Founder',
        image: '/ely.jpg',
        bio:
          'Extensive Corporate Experience: 20+ years in supply chain, logistics, and financial management. Proven Leadership at Major Multinationals: Senior roles at Accenture (Asia HQ), Yamato Global Logistics, and Yazaki Group, managing teams of up to 21 employees.',
      },
    ],
  },
  dubai: {
    title: 'The Market Opportunity: Why Dubai is the Epicentre of Growth',
    subtitle:
      'Strategic placement for expanding MENA market and gateway to EMEA and APAC regions',
    marketTitle: 'MENA market trends',
    marketSubtitle: 'Dubai: The Strategic Business Gateway',
    menaTitle:
      "The UAE's $35 billion infrastructure expansion and regulatory innovation create unprecedented demand for integrated cybersecurity automation:",
    menaIntro: '',
    menaSections: [
      {
        title: 'Critical Infrastructure Growth',
        points: [
          'Al Maktoum International Airport expansion establishing Dubai as the primary EU-Asia logistics corridor',
          'Etihad Rail network revolutionizing GCC supply chain security requirements',
          'Dubai Logistics District 2040 driving need for automated, compliant operations',
        ],
      },
      {
        title: 'Regulatory Leadership',
        points: [
          'UAE National Cyber Security Strategy 2031 mandating enhanced protection across sectors',
          'Virtual Assets Regulatory Authority (VARA) positioning Dubai as global crypto hub',
          'ADGM & DIFC financial centers attracting regulated entities needing compliance solutions',
        ],
      },
      {
        title: 'High-Value Sector Expansion',
        points: [
          '$6.4 billion luxury resort development (Wynn, MGM) boosting financial services security needs',
          'Sharjah Media City & specialized free zones creating demand for sector-specific security frameworks',
        ],
      },
    ],
    menaResult:
      'Result: A perfect convergence of infrastructure investment, regulatory evolution, and economic diversification—precisely aligned with our automation expertise.',
    cards: [
      {
        title: 'Strategic Location',
        body:
          'Dubai serves as the perfect hub for serving both EMEA and APAC markets, with world-class infrastructure and business-friendly regulations.',
      },
      {
        title: 'Growing Market',
        body:
          'The Middle East cybersecurity market is experiencing rapid growth, with increasing demand for automation and advisory services across financial services, energy, and government sectors.',
      },
      {
        title: 'Partnership Ecosystem',
        body:
          'Access to a vibrant ecosystem of technology partners, enterprise clients, and regional expertise that accelerates market entry and business development.',
      },
    ],
    whyTitle: 'Why Dubai?',
    points: [
      'Gateway to $2T+ EMEA and APAC markets',
      '24-hour connectivity across time zones',
      'Low corporate and zero personal income tax',
      'World-class infrastructure and logistics',
      'Growing cybersecurity regulatory framework',
      'Access to diverse talent pool',
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle:
      'Ready to transform your cybersecurity expertise into scalable automation revenue?',
    infoTitle: 'Contact Information',
    locationTitle: 'Location',
    location: 'EMAAR Square\nDubai, United Arab Emirates',
    emailTitle: 'Email',
    email: 'info@wentz.ae',
    linkedinTitle: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/in/fabian-wentz-aa0a9918a/',
    formTitle: 'Send us a Message',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your.email@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your cybersecurity automation needs...',
    submitLabel: 'Send Message',
    footer: '© 2025 Wentz. All rights reserved. | Dubai, UAE',
  },
};

export const contentAr: SiteContent = {
  lang: 'ar',
  dir: 'rtl',
  nav: {
    investmentThesis: 'من الاستشارات إلى ملكية الأتمتة',
    threePhase: 'نموذج المراحل الثلاث',
    about: 'من نحن',
    dubai: 'فرصة السوق',
    contact: 'تواصل',
    languageEnglish: 'الإنجليزية',
    languageArabic: 'العربية',
  },
  hero: {
    title: 'تحويل خبرة إدارة المخاطر بقيادة الخبراء إلى',
    highlight: 'عوائد أتمتة قابلة للتوسع',
    subtitle:
      'نبني مستقبل أتمتة الأمن السيبراني عبر خبرة مثبتة وحلول تقنية مبتكرة',
    ctaPrimary: 'ابدأ الآن',
    ctaSecondary: 'اعرف المزيد',
    poweredBy:
      'التسليم مدعوم من Synapsis IT (EU) — بالاعتماد على أساس هندسي وأتمتة مثبت في بيئات منظمة.',
    heritageLabel: 'فيديو الإرث',
  },
  footer: {
    line1: 'التسليم مدعوم من Synapsis IT (EU)',
    line2: 'دعم هندسي وأتمتة عبر بيئات منظمة',
  },
  investmentThesis: {
    title: 'من الاستشارات إلى ملكية الأتمتة',
    intro: 'تعمل Wentz Consultancy وفق انتقال منهجي من الاستشارة إلى التنفيذ:',
    steps: [
      'قيادة الخبراء في إدارة الحوادث والاستشارات المخاطرية',
      'تحويل SOC وتصميم الأتمتة',
      'ملكية أتمتة قابلة للتكرار داخل بيئات العملاء',
    ],
    outro:
      'يضمن هذا النموذج أن تتحول الرؤى الاستشارية مباشرةً إلى نتائج تشغيلية، لا تقارير.',
  },
  about: {
    title: 'من نحن',
    foundersTitle: 'المؤسسون',
    storyTitle: 'قصتنا',
    storySubtitle: 'فريق متكامل يصنع ميزة تنافسية قابلة للدفاع عنها',
    storyBody:
      'قيادتان بخبرتين مختلفتين ولكن بهدف واحد، تصنعان مكانة سوقية متمايزة لخدمات الاستشارات المتكاملة والأتمتة.',
    fabianTitle: 'الأمن السيبراني بقيادة الخبراء (Fabian)',
    fabianPoints: [
      'تحويل مراكز العمليات الأمنية والأتمتة',
      'تدقيق المخاطر بقيادة التهديدات',
      'قيادة الاستجابة للحوادث',
    ],
    elyTitle: 'الصرامة المالية والتشغيلية (Ely)',
    elyPoints: [
      'خبرة سلاسل الإمداد والخدمات اللوجستية',
      'الإدارة المالية وتحسين العمليات',
      'تنفيذ عبر الحدود',
    ],
    combinedTitle: 'العرض المتكامل',
    combinedBody:
      'استشارات مخاطر متكاملة — قدرة فريدة على تقييم المخاطر وأتمتتها عبر التقنية والتمويل وسلاسل الإمداد المادية. نقدم رحلة عميل سلسة من الاستشارات المالية/اللوجستية الأساسية إلى تدقيقات أمن سيبراني متعمقة، لتحقيق خفض شامل للمخاطر.',
  },
  threePhase: {
    title: 'نموذج المراحل الثلاث',
    subtitle:
      'إطار عمل مجرّب لتحويل الخبرة إلى عوائد أتمتة قابلة للتوسع',
    phases: [
      {
        number: '01',
        title: 'أساس استشاري',
        description:
          'توظيف خبرات قيادية لتقديم خدمات استشارية عالية القيمة وبناء علاقات عميقة مع العملاء وفهم بيئات المخاطر الخاصة بهم.',
        features: [
          'تقييمات مخاطر بقيادة الخبراء',
          'استشارات استراتيجية للأمن السيبراني',
          'خرائط طريق للأتمتة مخصصة',
          'خدمات استشارية تنفيذية',
        ],
      },
      {
        number: '02',
        title: 'تحويل إلى منتجات أتمتة',
        description:
          'تحويل المنهجيات والخبرة إلى منتجات أتمتة قابلة للتكرار. تقديم رؤى استشارية ضمن حلول تقنية قابلة للتوسع.',
        features: [
          'تطوير الملكية الفكرية وتوثيقها',
          'إنشاء أدوات الأتمتة',
          'توحيد تقديم الخدمات',
          'حزم خدمات مُنتَجة',
        ],
      },
      {
        number: '03',
        title: 'التوسع والنمو',
        description:
          'توسيع الحلول الآلية عبر الأسواق والمناطق. يخلق النمو المتسارع في دبي ضمن الخدمات اللوجستية والمالية والخدمات عالية القيمة طلباً متزايداً على استشاراتنا المتكاملة. الاستفادة من دبي كمركز استراتيجي للتوسع في EMEA وAPAC مع الحفاظ على الجودة والاتساق.',
        features: [
          'التوسع الإقليمي للأسواق',
          'تطوير منظومة الشركاء',
          'ابتكار مستمر للمنتجات',
          'تنويع مصادر الإيرادات',
        ],
      },
    ],
  },
  team: {
    title: 'المؤسسون',
    subtitle: 'خبرة قيادية تدفع ابتكار أتمتة الأمن السيبراني',
    members: [
      {
        name: 'Fabian',
        role: 'الشريك المؤسس والرئيسي',
        image: '/fabian.jpg',
        bio:
          'خبرة أعمال مثبتة: مؤسس Synapsis IT بإيرادات سنوية تتجاوز 200 ألف يورو. خبرة تقنية عميقة: أكثر من 8 سنوات في قيادة SOC وقيادة الحوادث (تهديدات دولية وبرمجيات فدية) وبنية الأتمتة لبيئات أوروبية منظمة شديدة المتطلبات. خبرة إدارية منذ 2005 بقيادة فرق من 40 فرداً في بيئات تنافسية عالية الضغط.',
        objectPosition: '50% 70%',
      },
      {
        name: 'Ely',
        role: 'الشريك المؤسس والرئيسي',
        image: '/ely.jpg',
        bio:
          'خبرة مؤسسية واسعة: أكثر من 20 عاماً في سلاسل الإمداد والخدمات اللوجستية والإدارة المالية. قيادة مثبتة في شركات متعددة الجنسيات: أدوار قيادية في أكسنتشر (المقر الإقليمي لآسيا)، ياماتو لوجستكس، ومجموعة يازاكي مع إدارة فرق حتى 21 موظفاً.',
      },
    ],
  },
  dubai: {
    title: 'فرصة السوق: لماذا دبي هي مركز النمو',
    subtitle:
      'تموضع استراتيجي للتوسع في سوق MENA وبوابة إلى مناطق EMEA وAPAC',
    marketTitle: 'اتجاهات سوق MENA',
    marketSubtitle: 'دبي: البوابة الاستراتيجية للأعمال',
    menaTitle:
      'يوفر توسع البنية التحتية في الإمارات بقيمة 35 مليار دولار والابتكار التنظيمي طلباً غير مسبوق على أتمتة الأمن السيبراني المتكاملة:',
    menaIntro: '',
    menaSections: [
      {
        title: 'نمو البنية التحتية الحرجة',
        points: [
          'توسعة مطار آل مكتوم الدولي لترسيخ دبي كممر لوجستي رئيسي بين أوروبا وآسيا',
          'شبكة قطار الاتحاد تعيد تشكيل متطلبات أمن سلاسل الإمداد في دول الخليج',
          'منطقة دبي اللوجستية 2040 تدفع الحاجة لعمليات متوافقة ومؤتمتة',
        ],
      },
      {
        title: 'الريادة التنظيمية',
        points: [
          'استراتيجية الأمن السيبراني الوطنية 2031 تفرض حماية متقدمة عبر القطاعات',
          'هيئة تنظيم الأصول الافتراضية (VARA) تموضع دبي كمركز عالمي للعملات المشفرة',
          'مركزا ADGM وDIFC يجذبان جهات منظمة تحتاج حلول امتثال',
        ],
      },
      {
        title: 'توسع القطاعات عالية القيمة',
        points: [
          'تطوير منتجعات فاخرة بقيمة 6.4 مليار دولار (Wynn وMGM) يزيد احتياجات أمن الخدمات المالية',
          'مدينة الشارقة للإعلام والمناطق الحرة المتخصصة تخلق طلباً على أطر أمن قطاعية',
        ],
      },
    ],
    menaResult:
      'النتيجة: تقاطع مثالي بين الاستثمار في البنية التحتية وتطور الأطر التنظيمية والتنويع الاقتصادي — متوافق تماماً مع خبرتنا في الأتمتة.',
    cards: [
      {
        title: 'موقع استراتيجي',
        body:
          'تُعد دبي مركزاً مثالياً لخدمة أسواق EMEA وAPAC مع بنية تحتية عالمية وبيئة تنظيمية صديقة للأعمال.',
      },
      {
        title: 'سوق متنامٍ',
        body:
          'يشهد سوق الأمن السيبراني في الشرق الأوسط نمواً سريعاً مع طلب متزايد على الأتمتة والخدمات الاستشارية.',
      },
      {
        title: 'منظومة شراكات',
        body:
          'الوصول إلى منظومة نشطة من الشركاء والعملاء والخبرات الإقليمية التي تسرّع الدخول إلى السوق وتطوير الأعمال.',
      },
    ],
    whyTitle: 'لماذا دبي؟',
    points: [
      'بوابة إلى أسواق EMEA وAPAC التي تتجاوز 2 تريليون دولار',
      'اتصال 24 ساعة عبر المناطق الزمنية',
      'ضرائب شركات منخفضة وصفر ضريبة على الدخل الشخصي',
      'بنية تحتية ولوجستيات عالمية',
      'إطار تنظيمي متنامٍ للأمن السيبراني',
      'الوصول إلى مواهب متنوعة',
    ],
  },
  contact: {
    title: 'تواصل معنا',
    subtitle: 'هل أنت جاهز لتحويل خبرتك إلى عوائد أتمتة قابلة للتوسع؟',
    infoTitle: 'معلومات التواصل',
    locationTitle: 'الموقع',
    location: 'إعمار سكوير\nدبي، الإمارات العربية المتحدة',
    emailTitle: 'البريد الإلكتروني',
    email: 'info@wentz.ae',
    linkedinTitle: 'لينكدإن',
    linkedinUrl: 'https://www.linkedin.com/in/fabian-wentz-aa0a9918a/',
    formTitle: 'أرسل رسالة',
    nameLabel: 'الاسم',
    namePlaceholder: 'اسمك',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'name@example.com',
    messageLabel: 'الرسالة',
    messagePlaceholder: 'حدثنا عن احتياجاتك في أتمتة الأمن السيبراني...',
    submitLabel: 'إرسال',
    footer: '© 2025 Wentz. جميع الحقوق محفوظة. | دبي، الإمارات العربية المتحدة',
  },
};
