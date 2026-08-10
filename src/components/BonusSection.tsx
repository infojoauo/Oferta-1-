import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface BonusSectionProps {
  onScrollToOffers: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onScrollToOffers }) => {
  const bonusCards = [
    {
      id: 'bonus-1',
      title: 'Guía de Primera Sesión con Adolescentes',
      description: 'Guía práctica de 8 pasos para hacer que hable y conecte más allá del "no sé" en la primera consulta.',
      originalPrice: 'US$47',
      mockupImg: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'bonus-2',
      title: 'Cartilla "Conversando con los Padres"',
      description: 'Cómo conducir la devolución familiar con profesionalismo sin romper la alianza de confianza con el adolescente.',
      originalPrice: 'US$37',
      mockupImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'bonus-3',
      title: 'Banco de Frases para Destrabar la Sesión',
      description: 'Más de 50 preguntas disparadoras y frases clave para desbloquear conversaciones cuando el paciente guarda silencio.',
      originalPrice: 'US$29',
      mockupImg: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'bonus-4',
      title: 'Kit de Juegos y Dinámicas Terapéuticas',
      description: 'Barajas de cartas, juegos proyectivos y ruedas dinámicas para abordar temas delicados de forma liviana e interactiva.',
      originalPrice: 'US$35',
      mockupImg: IMAGE_ASSETS.BONUS_MOCKUP
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Todo lo que <span className="text-[#2D5A27] italic">vas a recibir:</span>
          </h2>
        </div>

        {/* Main Product Feature Summary Box */}
        <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Mockup */}
            <div className="md:col-span-5">
              <img
                src={IMAGE_ASSETS.HERO_MOCKUP}
                alt="Kit Consultorio Teen Completo"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl drop-shadow-md"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
                }}
              />
            </div>

            {/* Right Checklist */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#1C1917] font-serif-display">
                  Kit Consultorio Teen
                </h3>
                <p className="text-[#2D5A27] font-extrabold text-lg">
                  +80 recursos terapéuticos
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-sm sm:text-base text-[#44403C] font-medium">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Recursos organizados por 8 demandas clínicas clave</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Material visual e indirecto — el adolescente habla sin sentirse presionado</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Listo para imprimir o usar directamente en pantalla</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Diseñado con el lenguaje que el adolescente respeta</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#2D5A27] shrink-0 mt-0.5" />
                  <span>Funciona tanto en modalidad presencial como en consulta online</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bonus Transition Paragraph */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <p className="text-base sm:text-lg text-[#292524] font-medium leading-relaxed">
            Y esto no se detiene aquí. En el kit completo, también recibes <strong>4 bonos exclusivos</strong> que complementan tu material y resuelven los mayores desafíos de tu día a día clínico:
          </p>

          <div className="inline-block bg-[#D25432] text-white font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs">
            4 BONOS EXCLUSIVOS INCLUIDOS
          </div>
        </div>

        {/* 4 Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonusCards.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white border border-[#E8E2D8] rounded-2xl p-5 shadow-2xs hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="w-20 h-20 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] shrink-0 overflow-hidden p-1 flex items-center justify-center">
                <img
                  src={bonus.mockupImg}
                  alt={bonus.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80";
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-bold text-[#1C1917] text-base leading-snug">
                  {bonus.title}
                </h4>
                <p className="text-xs text-[#78716C] leading-relaxed">
                  {bonus.description}
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-bold">
                  <span className="line-through text-[#A8A29E]">De {bonus.originalPrice}</span>
                  <span className="text-[#D25432] uppercase tracking-wider">GRATIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-4">
          <button
            onClick={onScrollToOffers}
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Quiero recibir el kit completo con todos los bonos</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};

