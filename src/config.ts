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

// Image asset paths / placeholders as defined in the system
export const IMAGE_ASSETS = {
  HERO_MOCKUP: "/src/assets/images/hero_mockup_1786393127242.jpg",
  BASIC_KIT_MOCKUP: "/src/assets/images/basic_kit_mockup_1786393158512.jpg",
  COMPLETE_KIT_MOCKUP: "/src/assets/images/complete_kit_mockup_1786393138892.jpg",
  BONUS_MOCKUP: "/src/assets/images/bonus_mockup_1786393148169.jpg",
  RESOURCE_IMAGE_01: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  RESOURCE_IMAGE_02: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
  RESOURCE_IMAGE_03: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  RESOURCE_IMAGE_04: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=800&q=80",
  RESOURCE_IMAGE_05: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
  RESOURCE_IMAGE_06: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
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
    quote: '¿Qué actividad puedo utilizar hoy?'
  },
  {
    id: 'p2',
    quote: 'El adolescente responde con pocas palabras.'
  },
  {
    id: 'p3',
    quote: 'Quiero trabajar un tema específico, pero no tengo un recurso preparado.'
  },
  {
    id: 'p4',
    quote: 'Termino improvisando una actividad.'
  },
  {
    id: 'p5',
    quote: 'Necesito variar mis herramientas de una sesión a otra.'
  }
];

export const WHY_CHOOSE_ITEMS: FeatureBenefitItem[] = [
  {
    id: 'practico',
    title: 'Práctico',
    description: 'Recursos listos para consultar y utilizar.',
    iconName: 'Zap'
  },
  {
    id: 'variado',
    title: 'Variado',
    description: 'Diferentes herramientas y temas para trabajar con adolescentes.',
    iconName: 'Layers'
  },
  {
    id: 'visual',
    title: 'Visual',
    description: 'Material pensado para facilitar una sesión más dinámica.',
    iconName: 'Eye'
  },
  {
    id: 'organizado',
    title: 'Organizado',
    description: 'Encuentra diferentes tipos de recursos en un solo lugar.',
    iconName: 'FolderCheck'
  },
  {
    id: 'digital',
    title: 'Digital',
    description: 'Acceso al material en formato digital.',
    iconName: 'FileText'
  },
  {
    id: 'flexible',
    title: 'Flexible',
    description: 'Utilízalo como apoyo según las necesidades de cada sesión.',
    iconName: 'Sliders'
  }
];

export const RESOURCE_SAMPLES: ResourceSampleItem[] = [
  {
    id: 'sample-1',
    imageKey: 'RESOURCE_IMAGE_01',
    title: 'Recurso terapéutico',
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
    imageKey: 'RESOURCE_IMAGE_02',
    title: 'Actividad de reflexión',
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
    imageKey: 'RESOURCE_IMAGE_03',
    title: 'Trabajo emocional',
    category: 'Expresión y Autoempatía',
    description: 'Mapa del mapa corporal de las emociones para ubicar dónde se sienten el enojo, la tristeza o el miedo.',
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
    imageKey: 'RESOURCE_IMAGE_04',
    title: 'Autoestima y autoconocimiento',
    category: 'Fortalezas Personales',
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
    imageKey: 'RESOURCE_IMAGE_05',
    title: 'Pensamientos y emociones',
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
  },
  {
    id: 'sample-6',
    imageKey: 'RESOURCE_IMAGE_06',
    title: 'Habilidades sociales y expresión',
    category: 'Comunicación Asertiva',
    description: 'Tarjetas de entrenamiento en asertividad para practicar la expresión de necesidades y el establecimiento de límites.',
    sampleContent: {
      subtitle: 'La Fórmula del Límite Asertivo',
      instructions: 'Practica la estructura: "Cuando ocurre [hecho], yo me siento [emoción] y necesito [petición clara]".',
      questions: [
        '¿En qué situaciones te resulta más difícil decir "no"?',
        '¿Cómo se escucha una respuesta firme pero respetuosa?',
        'Ensaya tu respuesta para la próxima interacción exigente.'
      ]
    }
  }
];

export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: 't1',
    placeholderText: '[DEPÓSITO REAL DEL CLIENTE 1]',
    author: 'Nombre del profesional',
    country: 'País',
    rating: 5
  },
  {
    id: 't2',
    placeholderText: '[DEPÓSITO REAL DEL CLIENTE 2]',
    author: 'Nombre del profesional',
    country: 'País',
    rating: 5
  },
  {
    id: 't3',
    placeholderText: '[DEPÓSITO REAL DEL CLIENTE 3]',
    author: 'Nombre del profesional',
    country: 'País',
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
    question: '¿Para quién está diseñado el Kit?',
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
    answer: 'La opción completa incluye más de 100 recursos terapéuticos más el Bono de Juegos y Dinámicas Terapéuticas.'
  },
  {
    id: 'faq-4',
    question: '¿Recibiré el material en formato digital?',
    answer: 'Sí. El material se entrega en formato digital.'
  },
  {
    id: 'faq-5',
    question: '¿Puedo utilizar los recursos durante mis sesiones?',
    answer: 'Los recursos están pensados como material de apoyo para profesionales durante su trabajo con adolescentes.'
  },
  {
    id: 'faq-6',
    question: '¿El material está en español?',
    answer: 'Sí, la oferta está presentada en español para profesionales de habla hispana.'
  },
  {
    id: 'faq-7',
    question: '¿Cómo recibiré mi compra?',
    answer: 'Después de completar la compra, recibirás acceso al contenido según la oferta adquirida.'
  },
  {
    id: 'faq-8',
    question: '¿Necesito conocimientos técnicos para utilizar el material?',
    answer: 'No. El objetivo del kit es ofrecer recursos prácticos y fáciles de consultar.'
  }
];
