import React from 'react';
import { motion } from 'motion/react';
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
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D25432]/10 text-[#D25432] border border-[#D25432]/20 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-[#D25432]" />
            <span>Regalo Exclusivo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Y además, recibe un <span className="text-[#D25432]">BONO ESPECIAL</span>
          </h2>
        </motion.div>

        {/* Featured Bonus Spotlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-[#D25432]/30 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden max-w-4xl mx-auto text-center md:text-left flex flex-col items-center md:items-start"
        >
          
          {/* Included Badge Ribbon */}
          <div className="inline-block bg-[#D25432] text-white font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xs mb-6 text-center mx-auto md:mx-0">
            INCLUIDO EN EL KIT COMPLETO
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
            
            {/* Mockup Image - Borderless & Centered */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-[#FAF7F2] border border-[#E8E2D8]">
                {IMAGE_ASSETS.BONUS_MOCKUP ? (
                  <img
                    src={IMAGE_ASSETS.BONUS_MOCKUP}
                    alt="Kit de Juegos y Dinámicas Terapéuticas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 text-stone-400 bg-stone-100 border-2 border-dashed border-stone-300 rounded-2xl">
                    <span className="text-xs font-bold text-stone-500">Kit de Juegos (Bonus)</span>
                    <span className="text-[10px]">Bloque de imagen</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description - Centered on Mobile */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] font-serif-display leading-tight">
                Kit de Juegos y Dinámicas Terapéuticas
              </h3>

              <p className="text-base text-[#57534E] leading-relaxed font-medium max-w-lg">
                Un complemento pensado para ampliar tus opciones durante las sesiones con juegos, dinámicas y recursos interactivos relacionados con emociones, reflexión, autoestima y habilidades sociales.
              </p>


            </div>

          </div>

          {/* 5 Animated Bonus Feature Cards Grid */}
          <div className="mt-10 pt-8 border-t border-[#E8E2D8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {bonusFeatures.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] hover:border-[#D25432] hover:bg-white shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-2 text-center sm:text-left items-center sm:items-start group cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                  <div className="p-2 rounded-lg bg-white border border-[#E8E2D8] group-hover:border-[#D25432]/30 group-hover:bg-[#DCFCE7] shrink-0 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#1C1917] text-sm font-serif-display group-hover:text-[#D25432] transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-[#78716C] font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center pt-2"
        >
          <button
            onClick={onScrollToOffers}
            className="px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer transform hover:scale-105"
          >
            <span>Quiero el Kit Completo con Bono Incluido</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};



