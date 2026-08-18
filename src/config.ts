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
export const BASIC_OFFER_URL = "https://pay.hotmart.com/L107213570W?off=g9zzm440&checkoutMode=10";
export const UPSELL_OFFER_URL = "https://pay.hotmart.com/L107213570W?off=9b33tyc2&checkoutMode=10";
export const COMPLETE_OFFER_URL = "https://pay.hotmart.com/L107213570W?off=ecjqfaq2&checkoutMode=10";

// Configurable Guarantee Days
export const GUARANTEE_DAYS = 7;

// Image asset paths / placeholders as defined in the system
export const IMAGE_ASSETS = {
  HERO_MOCKUP: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FMD74m733%2FChat-GPT-Image-17-de-ago-de-2026-21-53-21.png&w=900&output=webp&q=85",
  BASIC_KIT_MOCKUP: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FTxHDLDgw%2FChat-GPT-Image-18-de-ago-de-2026-00-09-34.png&w=800&output=webp&q=85",
  COMPLETE_KIT_MOCKUP: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2F6fZNmr9%2FChat-GPT-Image-18-de-ago-de-2026-00-13-52.png&w=800&output=webp&q=85",
  BONUS_MOCKUP: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FhFz36WgC%2FChat-GPT-Image-17-de-ago-de-2026-22-33-04.png&w=900&output=webp&q=85",
  BENEFIT_MORE_OPTIONS: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FrRJjqKWp%2FChat-GPT-Image-11-de-ago-de-2026-17-32-38.png&w=600&output=webp&q=82",
  BENEFIT_SAVE_TIME: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FrKDvFn9Z%2FChat-GPT-Image-11-de-ago-de-2026-17-36-25.png&w=600&output=webp&q=82",
  BENEFIT_DIVERSE_TOPICS: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2Ftpf6H0N7%2FChat-GPT-Image-11-de-ago-de-2026-17-41-02.png&w=600&output=webp&q=82",
  BENEFIT_PRACTICAL_VISUAL: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2Frfb7FbzX%2FChat-GPT-Image-Aug-11-2026-05-49-33-PM.png&w=600&output=webp&q=82",
  INSIDE_LOOK_1: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FzhgCjpN7%2FChat-GPT-Image-Aug-17-2026-10-08-20-PM.png&w=600&output=webp&q=85",
  INSIDE_LOOK_2: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2Fb4PnhHs%2FChat-GPT-Image-Aug-17-2026-10-10-39-PM.png&w=600&output=webp&q=85",
  INSIDE_LOOK_3: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FZ6SG9ZDM%2FChat-GPT-Image-Aug-17-2026-10-11-57-PM.png&w=600&output=webp&q=85",
  INSIDE_LOOK_4: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2F9HWwjmmw%2FChat-GPT-Image-Aug-17-2026-10-13-19-PM.png&w=600&output=webp&q=85",
  INSIDE_LOOK_5: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FQvsWv98M%2FChat-GPT-Image-Aug-17-2026-10-14-32-PM.png&w=600&output=webp&q=85",
  INSIDE_LOOK_6: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FfVzG7HLb%2FChat-GPT-Image-Aug-17-2026-10-15-12-PM.png&w=600&output=webp&q=85",
  FICHA_TECNICA: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2F0p4sJLK0%2FChat-GPT-Image-Aug-17-2026-10-55-13-PM.png&w=900&output=webp&q=85",
  WHATSAPP_PROOF_1: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FLztg48W6%2Fwsp1.webp&w=800&output=webp&q=85",
  WHATSAPP_PROOF_2: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FWWkbzK8M%2Fwsp2.webp&w=800&output=webp&q=85",
  WHATSAPP_PROOF_3: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2Fv6hSyk2M%2Fwsp3.webp&w=800&output=webp&q=85",
  SAMPLE_EMOTION_REGULATION: "",
  SAMPLE_COGNITIVE_DISTORTIONS: "",
  SAMPLE_ANXIETY_TRACKER: "",
  SAMPLE_SELF_ESTEEM_TREE: "",
  SAMPLE_ASSERTIVE_COMMUNICATION: "",
  AVATAR_CARLOS_MENDEZ: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2F7JbC3ZCW%2F83d47b87455cd548eb279f1fbd3f69f6.jpg&w=150&output=webp&q=85",
  AVATAR_LAURA_FERNANDEZ: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FTB3yzXvd%2F855218606b07085c6d4115f8fb2f6ed7.jpg&w=150&output=webp&q=85",
  AVATAR_SOFIA_ALARCON: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2FLhhVkkKS%2Fd4bfd9b8b18d634fcb3ad1490ddf4e92.jpg&w=150&output=webp&q=85",
  AVATAR_ROBERTO_GOMEZ: "https://wsrv.nl/?url=https%3A%2F%2Fi.ibb.co%2F3Y4B8dfw%2F80766c761bce7c580441e608d8166f3d.jpg&w=150&output=webp&q=85",
  RESOURCE_01: "",
  RESOURCE_02: "",
  RESOURCE_03: "",
  RESOURCE_04: "",
  RESOURCE_05: "",
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'pensamientos',
    iconName: 'Brain',
    title: '🧠 Pensamientos',
    description: 'Identificación y reestructuración de distorsiones cognitivas infantiles.'
  },
  {
    id: 'emociones',
    iconName: 'Smile',
    title: '❤️ Emociones',
    description: 'Psicoeducación, termómetros emocionales y rueda de sentimientos adaptada.'
  },
  {
    id: 'conducta',
    iconName: 'Activity',
    title: '⚡ Conducta',
    description: 'Técnicas de modificación conductual, economía de fichas y límites claros.'
  },
  {
    id: 'ansiedad',
    iconName: 'CloudRain',
    title: '🌧️ Ansiedad & Miedos',
    description: 'Técnicas de respiración lúdica, monstruos del miedo y jerarquía de exposición.'
  },
  {
    id: 'autoestima',
    iconName: 'Sparkles',
    title: '⭐ Autoestima & Identidad',
    description: 'Árbol de fortalezas, escudo protector y afirmaciones positivas ilustradas.'
  },
  {
    id: 'habilidades',
    iconName: 'Users',
    title: '🤝 Habilidades Sociales',
    description: 'Resolución de conflictos, asertividad y empatía a través de cómics y dilemas.'
  }
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: '1',
    quote: 'Horas perdidas buscando en internet fichas desactualizadas, con marcas de agua o de baja resolución.'
  },
  {
    id: '2',
    quote: 'Niños que se aburren o no se enganchan con materiales genéricos pensados para adultos.'
  },
  {
    id: '3',
    quote: 'Falta de estructura por áreas clínicas con archivos sueltos y desordenados.'
  },
  {
    id: '4',
    quote: 'Dificultad para entregar tareas visuales y tangibles que los padres puedan continuar en casa.'
  }
];

export const FEATURE_BENEFITS: FeatureBenefitItem[] = [
  {
    id: '1',
    title: '+130 Recursos Listos',
    description: 'Fichas, juegos, barajas y actividades clasificadas por temática clínica.',
    iconName: 'Sparkles',
    imageUrl: IMAGE_ASSETS.BENEFIT_MORE_OPTIONS
  },
  {
    id: '2',
    title: '100% en Formato PDF A4',
    description: 'Diseñados con alta resolución vectorial para imprimir con nitidez perfecta.',
    iconName: 'Printer',
    imageUrl: IMAGE_ASSETS.BENEFIT_PRACTICAL_VISUAL
  },
  {
    id: '3',
    title: 'Ahorro de Horas de Planificación',
    description: 'Material listo para usar en cada sesión sin improvisar ni buscar en internet.',
    iconName: 'Clock',
    imageUrl: IMAGE_ASSETS.BENEFIT_SAVE_TIME
  },
  {
    id: '4',
    title: 'Temáticas Variadas',
    description: 'Desde gestión emocional y ansiedad hasta conducta y habilidades sociales.',
    iconName: 'BookOpen',
    imageUrl: IMAGE_ASSETS.BENEFIT_DIVERSE_TOPICS
  }
];

export const WHY_CHOOSE_ITEMS = FEATURE_BENEFITS;

export const RESOURCE_SAMPLES: ResourceSampleItem[] = [
  {
    id: '1',
    imageKey: 'SAMPLE_EMOTION_REGULATION',
    title: 'Termómetro de la Calma',
    category: 'Regulación Emocional',
    description: 'Escala visual con técnicas progresivas de desactivación fisiológica adaptadas a niños de 4 a 12 años.'
  },
  {
    id: '2',
    imageKey: 'SAMPLE_COGNITIVE_DISTORTIONS',
    title: 'Detective de Pensamientos',
    category: 'TCC Infantil',
    description: 'Ficha lúdica para cazar "pensamientos trampa" y transformarlos en pensamientos útiles con lupa ilustrada.'
  },
  {
    id: '3',
    imageKey: 'SAMPLE_ANXIETY_TRACKER',
    title: 'Mi Medidor de Valentía',
    category: 'Miedos & Ansiedad',
    description: 'Jerarquía de exposición lúdica por niveles con recompensas y registro de avances paso a paso.'
  },
  {
    id: '4',
    imageKey: 'SAMPLE_SELF_ESTEEM_TREE',
    title: 'El Árbol de Mis Superpoderes',
    category: 'Autoestima & Identidad',
    description: 'Actividad proyectiva para identificar fortalezas internas, redes de apoyo y logros personales.'
  },
  {
    id: '5',
    imageKey: 'SAMPLE_ASSERTIVE_COMMUNICATION',
    title: 'El Semáforo de la Comunicación',
    category: 'Habilidades Sociales',
    description: 'Guía visual para diferenciar respuestas pasivas, agresivas y asertivas con ejemplos cotidianos.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    initials: 'LF',
    name: 'Lic. Laura Fernández',
    role: 'Psicóloga Infantil y Juvenil',
    country: 'México',
    flag: '🇲🇽',
    quote: 'El kit transformó por completo la dinámica de mis primeras sesiones. Los niños conectan inmediatamente con los personajes y los materiales. Me ahorra al menos 3 horas de planificación cada fin de semana.',
    avatarUrl: IMAGE_ASSETS.AVATAR_LAURA_FERNANDEZ,
    rating: 5
  },
  {
    id: '2',
    initials: 'SA',
    name: 'Dra. Sofía Alarcón',
    role: 'Neuropsicóloga Infantil',
    country: 'Colombia',
    flag: '🇨🇴',
    quote: 'La calidad del diseño y el sustento clínico de cada ficha es impecable. No son simples dibujos para colorear, son herramientas terapéuticas reales con objetivos claros. 100% recomendado.',
    avatarUrl: IMAGE_ASSETS.AVATAR_SOFIA_ALARCON,
    rating: 5
  },
  {
    id: '3',
    initials: 'CM',
    name: 'Lic. Carlos Méndez',
    role: 'Psicólogo Escolar y Clínico',
    country: 'Argentina',
    flag: '🇦🇷',
    quote: 'Excelente relación valor-precio. Las fichas de psicoeducación para padres son una joya, me permiten darles pautas claras y profesionales para continuar el trabajo en casa con facilidad.',
    avatarUrl: IMAGE_ASSETS.AVATAR_CARLOS_MENDEZ,
    rating: 5
  },
  {
    id: '4',
    initials: 'RG',
    name: 'Lic. Roberto Gómez',
    role: 'Psicólogo Clínico Infanto-Juvenil',
    country: 'Chile',
    flag: '🇨🇱',
    quote: 'Llevo 8 años atendiendo niños y es el mejor compendio que he comprado. La organización por demandas clínicas ahorra muchísimo tiempo entre paciente y paciente.',
    avatarUrl: IMAGE_ASSETS.AVATAR_ROBERTO_GOMEZ,
    rating: 5
  }
];

export const REAL_TESTIMONIALS = TESTIMONIALS;
export const TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [];

export const COUNTRY_FLAGS: CountryFlag[] = [
  { name: 'México', code: 'MX', flag: '🇲🇽' },
  { name: 'Colombia', code: 'CO', flag: '🇨🇴' },
  { name: 'Argentina', code: 'AR', flag: '🇦🇷' },
  { name: 'Chile', code: 'CL', flag: '🇨🇱' },
  { name: 'Perú', code: 'PE', flag: '🇵🇪' },
  { name: 'Ecuador', code: 'EC', flag: '🇪🇨' },
  { name: 'España', code: 'ES', flag: '🇪🇸' },
  { name: 'Uruguay', code: 'UY', flag: '🇺🇾' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: '¿Cómo recibo el material una vez realizada la compra?',
    answer: 'El acceso es 100% inmediato y automático. En cuanto se confirma tu pago en Hotmart, recibes un correo electrónico con tus credenciales y el enlace directo para descargar todos los archivos en formato PDF a tu computadora, tablet o celular.'
  },
  {
    id: '2',
    question: '¿Los materiales vienen listos para imprimir?',
    answer: 'Sí, absolutamente todos los recursos están diseñados en formato estándar A4 con resolución vectorial de 300 DPI. Puedes imprimirlos en casa, en la oficina o en cualquier imprenta local con excelente nitidez.'
  },
  {
    id: '3',
    question: '¿Para qué edades está recomendado el kit?',
    answer: 'Los recursos cubren un amplio rango desde los 3 hasta los 12 años, con actividades adaptables según el nivel de desarrollo cognitivo y emocional de cada niño.'
  },
  {
    id: '4',
    question: '¿Qué incluye la garantía de 7 días?',
    answer: 'Cuentas con 7 días completos desde tu compra para explorar, descargar y probar los materiales en tus sesiones. Si por cualquier motivo sientes que el kit no cumple con tus expectativas profesionales, solicitas el reembolso dentro de la plataforma Hotmart y se te reintegra el 100% de tu pago sin preguntas.'
  },
  {
    id: '5',
    question: '¿El pago es mensual o de una sola vez?',
    answer: 'Es un pago único. No existen suscripciones mensuales, cobros sorpresa ni renovaciones automáticas. Pagas una sola vez y el acceso a los materiales es tuyo de por vida.'
  },
  {
    id: '6',
    question: '¿Qué medios de pago están disponibles?',
    answer: 'A través de la pasarela segura de Hotmart puedes pagar con Tarjeta de Crédito, Tarjeta de Débito, PayPal y métodos en efectivo según tu país (como OXXO en México, Baloto en Colombia, PagoFácil/Rapipago en Argentina, Sencillito en Chile, etc.).'
  }
];
