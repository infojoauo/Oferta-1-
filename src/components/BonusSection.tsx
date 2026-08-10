import React from 'react';
import { Gift, ArrowRight, Dices, Target, Brain, MessageSquare, Sparkles } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface BonusSectionProps {
  onScrollToOffers: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onScrollToOffers }) => {
  const bonusFeatures = [
    {
      id: 'bonus-feat-1',
      icon: <Dices className="w-6 h-6 text-[#D25432]" />,
      title: '🎴 Juegos terapéuticos',
      description: 'Barajas de cartas y recursos lúdicos para romper el hielo y favorecer la expresión espontánea.'
    },
    {
      id: 'bonus-feat-2',
      icon: <Target className="w-6 h-6 text-[#2D5A27]" />,
      title: '🎯 Dinámicas para sesiones',
      description: 'Ejercicios guiados para encauzar conversaciones profundas sobre situaciones complejas.'
    },
    {
      id: 'bonus-feat-3',
      icon: <Brain className="w-6 h-6 text-[#D25432]" />,
      title: '🧠 Actividades emocionales',
      description: 'Fichas interactivas centradas en el registro, comprensión y autorregulación de las emociones.'
    },
    {
      id: 'bonus-feat-4',
      icon: <MessageSquare className="w-6 h-6 text-[#2D5A27]" />,
      title: '💬 Recursos de reflexión',
      description: 'Preguntas detonantes y dinámicas proyectivas para el fortalecimiento de la autoestima.'
    },
    {
      id: 'bonus-feat-5',
      icon: <Sparkles className="w-6 h-6 text-[#D25432]" />,
      title: '🎡 Dinámicas interactivas',
      description: 'Formatos participativos creados para abordar habilidades sociales y toma de decisiones.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D25432]/10 text-[#D25432] border border-[#D25432]/20 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-[#D25432]" />
            <span>Regalo Exclusivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Y además, recibe un <span className="text-[#D25432] italic">BONO ESPECIAL</span>
          </h2>
        </div>

        {/* Featured Bonus Spotlight Card */}
        <div className="bg-white border-2 border-[#D25432]/30 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden max-w-4xl mx-auto">
          
          {/* Included Badge Ribbon */}
          <div className="inline-block bg-[#D25432] text-white font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs mb-6">
            INCLUIDO EN EL KIT COMPLETO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Mockup Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8E2D8] p-2">
                <img
                  src={IMAGE_ASSETS.BONUS_MOCKUP}
                  alt="Kit de Juegos y Dinámicas Terapéuticas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-7 space-y-4 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] font-serif-display">
                Kit de Juegos y Dinámicas Terapéuticas
              </h3>

              <p className="text-base text-[#57534E] leading-relaxed font-medium">
                Un complemento pensado para ampliar tus opciones durante las sesiones con juegos, dinámicas y recursos interactivos relacionados con emociones, reflexión, autoestima y habilidades sociales.
              </p>

              <div className="pt-2 text-xs font-bold text-[#2D5A27] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2D5A27]"></span>
                <span>Complemento perfecto para el Kit Completo</span>
              </div>
            </div>

          </div>

          {/* 5 Bonus Feature Cards Grid */}
          <div className="mt-10 pt-8 border-t border-[#E8E2D8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bonusFeatures.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-white border border-[#E8E2D8] shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#1C1917] text-sm font-serif-display">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[#78716C] font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={onScrollToOffers}
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Quiero el Kit Completo con Bono Incluido</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </section>
  );
};


