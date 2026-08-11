import {
  CategoryItem,
  PainPointItem,
  FeatureBenefitItem,
  ResourceSampleItem,
  TestimonialItem,
  TestimonialPlaceholder,
  CountryFlag,
  FAQItem
} from './types';

// Hotmart Offer Links
export const BASIC_OFFER_URL = "https://pay.hotmart.com/M107100558A?off=oosp26rd";
export const COMPLETE_OFFER_URL = "https://pay.hotmart.com/M107100558A?off=wno8js5z";

// Configurable Guarantee Days
export const GUARANTEE_DAYS = 7;

// Image asset paths / placeholders as defined in the system
export const IMAGE_ASSETS = {
  HERO_MOCKUP: "/assets/images/regenerated_image_1786479724271.png",
  BASIC_KIT_MOCKUP: "/assets/images/regenerated_image_1786479274273.png",
  COMPLETE_KIT_MOCKUP: "/assets/images/regenerated_image_1786479391329.png",
  BONUS_MOCKUP: "/assets/images/regenerated_image_1786480001326.png",
  BENEFIT_MORE_OPTIONS: "/assets/images/regenerated_image_1786480380560.png",
  BENEFIT_SAVE_TIME: "/assets/images/regenerated_image_1786480624189.png",
  BENEFIT_DIVERSE_TOPICS: "/assets/images/regenerated_image_1786480901950.png",
  BENEFIT_PRACTICAL_VISUAL: "/assets/images/regenerated_image_1786481409258.png",
  SAMPLE_EMOTION_REGULATION: "/assets/images/sample_emotion_regulation_1786400334789.jpg",
  SAMPLE_COGNITIVE_DISTORTIONS: "/assets/images/sample_cognitive_distortions_1786400353513.jpg",
  SAMPLE_ANXIETY_TRACKER: "/assets/images/sample_anxiety_tracker_1786400373005.jpg",
  SAMPLE_SELF_ESTEEM_TREE: "/assets/images/sample_self_esteem_tree_1786400385822.jpg",
  SAMPLE_ASSERTIVE_COMMUNICATION: "/assets/images/sample_assertive_communication_1786400398050.jpg",
  AVATAR_CARLOS_MENDEZ: "/assets/images/carlos_mendez_avatar_1786482114510.jpg",
  AVATAR_LAURA_FERNANDEZ: "/assets/images/regenerated_image_1786482515365.jpg",
  AVATAR_SOFIA_ALARCON: "/assets/images/sofia_alarcon_avatar_1786482902148.jpg",
  AVATAR_ROBERTO_GOMEZ: "/assets/images/roberto_gomez_avatar_new_1786483807206.jpg",
  RESOURCE_01: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  RESOURCE_02: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
  RESOURCE_03: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  RESOURCE_04: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=800&q=80",
  RESOURCE_05: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'pensamientos',
    iconName: 'Brain',
    title: '🧠 Pensamientos',
    description: 'Herramientas para identificar, cuestionar y reestructurar pensamientos automáticos y patrones cognitivos rígidos en adolescentes.'
  },
  {
    id: 'emociones',
    iconName: 'Heart',
    title: '❤️ Emociones',
    description: 'Materiales interactivos para la identificación, validación y libre expresión del universo emocional juvenil.'
  },
  {
    id: 'autoestima',
    iconName: 'Sparkles',
    title: '🪞 Autoestima y autoconocimiento',
    description: 'Fichas reflexivas y dinámicas diseñadas para fortalecer el concepto propio, la autoaceptación y la seguridad personal.'
  },
  {
    id: 'ansiedad',
    iconName: 'ShieldAlert',
    title: '😰 Ansiedad y preocupaciones',
    description: 'Técnicas de afrontamiento, registros de preocupación y ejercicios prácticos para reducir estados de alta activación.'
  },
  {
    id: 'habilidades-sociales',
    iconName: 'Users',
    title: '👥 Habilidades sociales',
    description: 'Recursos prácticos para trabajar la asertividad, establecimiento de límites, empatía e interacción con pares.'
  },
  {
    id: 'metas',
    iconName: 'Target',
    title: '🎯 Metas y toma de decisiones',
    description: 'Guías de planificación, análisis de pros y contras y esquemas visuales para clarificar proyectos de vida.'
  },
  {
    id: 'regulacion-emocional',
    iconName: 'RefreshCw',
    title: '🔄 Regulación emocional',
    description: 'Estrategias concretas para tolerar el malestar, gestionar la impulsividad y encontrar calma en momentos intensos.'
  },
  {
    id: 'comunicacion',
    iconName: 'MessageSquare',
    title: '💬 Comunicación y reflexión',
    description: 'Preguntas detonantes, diarios guiados y actividades para fomentar un diálogo profundo durante las sesiones.'
  }
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 'p1',
    quote: '¿Qué actividad puedo utilizar hoy en consulta?'
  },
  {
    id: 'p2',
    quote: 'El adolescente responde con monosílabos o evasivas.'
  },
  {
    id: 'p3',
    quote: 'Quiero trabajar un tema específico, pero no tengo un recurso preparado.'
  },
  {
    id: 'p4',
    quote: 'Termino improvisando una actividad sobre la marcha.'
  },
  {
    id: 'p5',
    quote: 'Necesito variar mis herramientas de una sesión a otra.'
  }
];

export const WHY_CHOOSE_ITEMS: FeatureBenefitItem[] = [
  {
    id: 'opciones',
    title: 'Más opciones para tus sesiones',
    description: 'Contarás con un abanico amplio de herramientas terapéuticas para abordar diferentes temáticas con flexibilidad.',
    iconName: 'Layers',
    imageUrl: IMAGE_ASSETS.BENEFIT_MORE_OPTIONS
  },
  {
    id: 'ahorra-tiempo',
    title: 'Ahorra tiempo buscando actividades',
    description: 'Olvídate de pasar horas navegando en internet o preparando fichas desde cero antes de cada consulta.',
    iconName: 'Zap',
    imageUrl: IMAGE_ASSETS.BENEFIT_SAVE_TIME
  },
  {
    id: 'diferentes-temas',
    title: 'Trabaja diferentes temas',
    description: 'Cubre desde ansiedad y pensamientos hasta autoestima, regulación emocional y habilidades sociales.',
    iconName: 'FolderCheck',
    imageUrl: IMAGE_ASSETS.BENEFIT_DIVERSE_TOPICS
  },
  {
    id: 'practico-visual',
    title: 'Material práctico y visual',
    description: 'Formatos diseñados con un lenguaje y estética visual que facilitan la conexión directa con el adolescente.',
    iconName: 'Eye',
    imageUrl: IMAGE_ASSETS.BENEFIT_PRACTICAL_VISUAL
  },
  {
    id: 'solo-kit',
    title: 'Todo en un solo kit',
    description: 'Un repertorio centralizado y organizado por demandas clínicas para consultar rápidamente cuando lo necesites.',
    iconName: 'FileText'
  },
  {
    id: 'digital-facil',
    title: 'Formato digital y fácil de consultar',
    description: 'Archivos en PDF de acceso inmediato, listos para imprimir o proyectar en sesiones presenciales u online.',
    iconName: 'Sliders'
  }
];

export const RESOURCE_SAMPLES: ResourceSampleItem[] = [
  {
    id: 'sample-1',
    imageKey: IMAGE_ASSETS.SAMPLE_EMOTION_REGULATION,
    title: 'Ficha de Regulación Emocional',
    category: 'Regulación Emocional',
    description: 'Recurso psicoterapéutico diseñado para guiar al adolescente a identificar la intensidad de sus estados emocionales y aplicar técnicas de autorregulación consciente.',
    sampleContent: {
      subtitle: 'Exploración y Calma Emocional',
      instructions: 'Acompaña al adolescente a evaluar su estado físico y emocional para activar herramientas de calma.',
      questions: [
        '¿Cómo describirías la emoción que estás experimentando en este momento?',
        '¿En qué nivel de intensidad te encuentras del 1 al 10?',
        '¿Qué herramienta de autorregulación te gustaría aplicar hoy?'
      ]
    }
  },
  {
    id: 'sample-2',
    imageKey: IMAGE_ASSETS.SAMPLE_COGNITIVE_DISTORTIONS,
    title: 'Identificación de Pensamientos Distorsionados',
    category: 'Reestructuración Cognitiva',
    description: 'Guía visual y práctica para detectar trampas del pensamiento, cuestionar interpretaciones automáticas y construir respuestas racionales y compasivas.',
    sampleContent: {
      subtitle: 'Detective de Pensamientos Automáticos',
      instructions: 'Analiza situaciones desencadenantes y evalúa las evidencias a favor y en contra de cada pensamiento.',
      questions: [
        '¿Qué pensamiento vino a tu mente inmediatamente?',
        '¿Qué evidencias reales confirman o contradicen este pensamiento?',
        '¿Existe una forma alternativa y más equilibrada de ver esta situación?'
      ]
    }
  },
  {
    id: 'sample-3',
    imageKey: IMAGE_ASSETS.SAMPLE_ANXIETY_TRACKER,
    title: 'Mapa Terapéutico de la Ansiedad',
    category: 'Manejo de Ansiedad',
    description: 'Plantilla de registro visual que facilita mapear los detonantes de la ansiedad, sensaciones corporales y planificar acciones de afrontamiento gradual.',
    sampleContent: {
      subtitle: 'Mapeo y Afrontamiento Gradual',
      instructions: 'Identifica la curva de ansiedad y establece acciones concretas de anclaje al presente.',
      questions: [
        '¿Qué situaciones suelen detonar tu curva de ansiedad?',
        '¿Qué señales físicas en tu cuerpo indican un aumento de tensión?',
        '¿Qué ejercicio de anclaje sensorial o respiración te da mayor alivio?'
      ]
    }
  },
  {
    id: 'sample-4',
    imageKey: IMAGE_ASSETS.SAMPLE_SELF_ESTEEM_TREE,
    title: 'Mi Árbol de Fortalezas y Autoconcepto',
    category: 'Autoestima y Fortalezas',
    description: 'Dinámica creativa e interactiva para conectar con el propio valor, rescatar habilidades personales y fortalecer la confianza en la etapa adolescente.',
    sampleContent: {
      subtitle: 'Consolidación del Autoconcepto',
      instructions: 'Explora raíces (valores), tronco (habilidades) y ramas (logros) para construir una visión integrada de sí mismo.',
      questions: [
        '¿Cuáles son tus 3 valores más importantes como persona?',
        '¿Qué fortaleza te ha ayudado a atravesar desafíos pasados?',
        '¿De qué aspecto de ti mismo te sientes más orgulloso actualmente?'
      ]
    }
  },
  {
    id: 'sample-5',
    imageKey: IMAGE_ASSETS.SAMPLE_ASSERTIVE_COMMUNICATION,
    title: 'Comunicación Asertiva y Vínculos',
    category: 'Habilidades Sociales',
    description: 'Tarjetas de diálogo y ejercicios de roles para entrenar la expresión de límites, comunicación clara y resolución pacífica de conflictos con pares y familia.',
    sampleContent: {
      subtitle: 'Entrenamiento en Asertividad',
      instructions: 'Ensaya situaciones sociales cotidianas diferenciando entre respuestas pasivas, agresivas y asertivas.',
      questions: [
        '¿Cómo puedes comunicar tu necesidad de forma clara y respetuosa?',
        '¿Qué límite personal necesitas marcar en esta situación?',
        '¿Qué palabras te permiten expresar lo que sientes sin agredir?'
      ]
    }
  }
];

export const REAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    initials: 'CM',
    name: 'Carlos Méndez',
    role: 'Psicólogo Infanto-Juvenil',
    avatarUrl: IMAGE_ASSETS.AVATAR_CARLOS_MENDEZ,
    quote: 'Este material cambió totalmente la forma en que planifico mis sesiones. Ahora ahorro tiempo en la preparación previa y los adolescentes se conectan mucho más rápido con las actividades visuales.',
    country: 'México',
    flag: '🇲🇽',
    rating: 5
  },
  {
    id: 't2',
    initials: 'LF',
    name: 'Laura Fernández',
    role: 'Terapeuta Cognitivo Conductual',
    avatarUrl: IMAGE_ASSETS.AVATAR_LAURA_FERNANDEZ,
    quote: 'Las herramientas están excelentemente organizadas y listas para aplicar en consulta. Me han ayudado muchísimo a conectar con mis pacientes jóvenes y estructurar mis sesiones de forma dinámica. Lo recomiendo 100%.',
    country: 'Colombia',
    flag: '🇨🇴',
    rating: 5
  },
  {
    id: 't3',
    initials: 'SA',
    name: 'Sofía Alarcón',
    role: 'Psicopedagoga Clínica',
    avatarUrl: IMAGE_ASSETS.AVATAR_SOFIA_ALARCON,
    quote: 'Buscaba recursos con un diseño moderno y cercano a la etapa adolescente. La respuesta de mis pacientes a las fichas de autoestima y regulación emocional ha sido increíble.',
    country: 'Chile',
    flag: '🇨🇱',
    rating: 5
  },
  {
    id: 't4',
    initials: 'RG',
    name: 'Roberto Gómez',
    role: 'Orientador Escolar y Familiar',
    avatarUrl: IMAGE_ASSETS.AVATAR_ROBERTO_GOMEZ,
    quote: 'Los juegos y dinámicas del bono me han ayudado muchísimo a romper el hielo en las primeras sesiones. Ha sido una de las mejores inversiones para mi consultorio.',
    country: 'Argentina',
    flag: '🇦🇷',
    rating: 5
  }
];

export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: 't1',
    placeholderText: '[TESTIMONIO REAL 1]',
    author: 'Psicóloga / Terapeuta',
    country: 'México',
    rating: 5
  },
  {
    id: 't2',
    placeholderText: '[TESTIMONIO REAL 2]',
    author: 'Psicóloga / Terapeuta',
    country: 'Colombia',
    rating: 5
  },
  {
    id: 't3',
    placeholderText: '[TESTIMONIO REAL 3]',
    author: 'Psicólogo / Terapeuta',
    country: 'Argentina',
    rating: 5
  }
];

export const LATAM_COUNTRIES: CountryFlag[] = [
  { code: 'MX', name: 'México', flag: '🇲🇽' },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'PE', name: 'Perú', flag: '🇵🇪' },
  { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
  { code: 'BO', name: 'Bolivia', flag: '🇧🇴' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Para quién está diseñado este kit?',
    answer: 'Está pensado como material de apoyo para psicólogos, terapeutas y profesionales que trabajan con adolescentes.'
  },
  {
    id: 'faq-2',
    question: '¿Qué incluye la opción de US$5?',
    answer: 'La opción básica incluye 50 recursos terapéuticos en formato digital.'
  },
  {
    id: 'faq-3',
    question: '¿Qué incluye la opción de US$10?',
    answer: 'La opción completa incluye más de 100 recursos terapéuticos y el Bono de Juegos y Dinámicas Terapéuticas.'
  },
  {
    id: 'faq-4',
    question: '¿Recibiré el material en español?',
    answer: 'Sí. El material de esta oferta está presentado en español.'
  },
  {
    id: 'faq-5',
    question: '¿Cómo recibiré mi compra?',
    answer: 'Después de completar la compra, recibirás acceso al contenido correspondiente a la oferta adquirida.'
  },
  {
    id: 'faq-6',
    question: '¿Puedo imprimir los recursos?',
    answer: 'Los materiales se entregan en formato digital y pueden utilizarse de acuerdo con las condiciones de uso del material.'
  }
];

