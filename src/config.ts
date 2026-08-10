import {
  CategoryItem,
  PainPointItem,
  FeatureBenefitItem,
  ResourceSampleItem,
  TestimonialPlaceholder,
  CountryFlag,
  FAQItem
} from './types';

// Hotmart Offer Links (Variables requested explicitly in prompt)
export const BASIC_OFFER_URL = "COLOCAR_LINK_HOTMART_US5_AQUI";
export const COMPLETE_OFFER_URL = "COLOCAR_LINK_HOTMART_US10_AQUI";

// Configurable Guarantee Days
export const GUARANTEE_DAYS = 7;

// Image asset paths / placeholders as defined in the system
export const IMAGE_ASSETS = {
  HERO_MOCKUP: "/src/assets/images/hero_mockup_1786393127242.jpg",
  BASIC_KIT_MOCKUP: "/src/assets/images/basic_kit_mockup_1786393158512.jpg",
  COMPLETE_KIT_MOCKUP: "/src/assets/images/complete_kit_mockup_1786393138892.jpg",
  BONUS_MOCKUP: "/src/assets/images/bonus_mockup_1786393148169.jpg",
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
    iconName: 'Layers'
  },
  {
    id: 'ahorra-tiempo',
    title: 'Ahorra tiempo buscando actividades',
    description: 'Olvídate de pasar horas navegando en internet o preparando fichas desde cero antes de cada consulta.',
    iconName: 'Zap'
  },
  {
    id: 'diferentes-temas',
    title: 'Trabaja diferentes temas',
    description: 'Cubre desde ansiedad y pensamientos hasta autoestima, regulación emocional y habilidades sociales.',
    iconName: 'FolderCheck'
  },
  {
    id: 'practico-visual',
    title: 'Material práctico y visual',
    description: 'Formatos diseñados con un lenguaje y estética visual que facilitan la conexión directa con el adolescente.',
    iconName: 'Eye'
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
    imageKey: 'RESOURCE_01',
    title: 'Muestra de Recurso 01',
    category: 'Regulación Emocional',
    description: 'Ficha de exploración visual para identificar la intensidad del malestar emocional y seleccionar estrategias de calma.',
    sampleContent: {
      subtitle: 'Semáforo de la Regulación Emocional',
      instructions: 'Guía al adolescente a ubicar su estado actual (Rojo - Carga alta, Amarillo - Alerta, Verde - Calma) y elegir una técnica de autorregulación.',
      questions: [
        '¿En qué nivel del semáforo sientes tu cuerpo ahora mismo?',
        '¿Qué señal física te avisa que estás pasando de amarillo a rojo?',
        'Selecciona 2 estrategias de tu lista de calma para probar hoy.'
      ]
    }
  },
  {
    id: 'sample-2',
    imageKey: 'RESOURCE_02',
    title: 'Muestra de Recurso 02',
    category: 'Pensamientos y Creencias',
    description: 'Plantilla de reestructuración cognitiva para analizar pensamientos automáticos negativos y encontrar alternativas realistas.',
    sampleContent: {
      subtitle: 'El Detective de Pensamientos',
      instructions: 'Analiza el pensamiento recurrente como si fueras un detective buscando evidencia real a favor y en contra.',
      questions: [
        '¿Cuál es la situación que desencadenó esta preocupación?',
        '¿Qué evidencia objetiva apoya este pensamiento?',
        'Si un amigo querido estuviera en tu lugar, ¿qué le dirías?'
      ]
    }
  },
  {
    id: 'sample-3',
    imageKey: 'RESOURCE_03',
    title: 'Muestra de Recurso 03',
    category: 'Expresión y Autoempatía',
    description: 'Mapa del esquema corporal de las emociones para ubicar dónde se sienten el enojo, la tristeza o el miedo.',
    sampleContent: {
      subtitle: 'Geografía Corporal Emocional',
      instructions: 'Utiliza colores para marcar en el esquema corporal la presión, tensión o temperatura asociada a cada emoción.',
      questions: [
        '¿Qué color representa mejor la emoción dominante hoy?',
        '¿En qué parte de tu cuerpo se siente más pesada o intensa?',
        '¿Qué necesita esa parte de tu cuerpo para soltar la tensión?'
      ]
    }
  },
  {
    id: 'sample-4',
    imageKey: 'RESOURCE_04',
    title: 'Muestra de Recurso 04',
    category: 'Autoestima y Autoconocimiento',
    description: 'Dinámica de rescate de valores, talentos y recursos internos para consolidar el autoconcepto positivo.',
    sampleContent: {
      subtitle: 'El Árbol de Mis Fortalezas',
      instructions: 'Escribe en las raíces tus valores, en el tronco tus habilidades demostradas y en los frutos tus logros recientes.',
      questions: [
        '¿Qué cualidad tuya te ha ayudado a superar un momento difícil?',
        '¿Qué elogio genuino te ha costado trabajo aceptar pero es verdadero?',
        '¿Qué nueva habilidad te gustaría cultivar esta semana?'
      ]
    }
  },
  {
    id: 'sample-5',
    imageKey: 'RESOURCE_05',
    title: 'Muestra de Recurso 05',
    category: 'Ansiedad y Expresión',
    description: 'Diario gráfico de desempaque de preocupaciones para diferenciar entre problemas bajo control y situaciones fuera de control.',
    sampleContent: {
      subtitle: 'Círculo de Control vs. Círculo de Preocupación',
      instructions: 'Clasifica las situaciones en el círculo interno (lo que yo controlo) o externo (lo que no depende de mí).',
      questions: [
        'De todo lo que te preocupa, ¿qué porcentaje depende 100% de tus acciones?',
        '¿Cómo podemos soltar la energía gastada en lo que no puedes controlar?',
        '¿Cuál es el primer paso concreto que sí puedes dar hoy?'
      ]
    }
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

