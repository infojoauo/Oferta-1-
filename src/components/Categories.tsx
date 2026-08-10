import React from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Heart,
  Sparkles,
  ShieldAlert,
  Users,
  Target,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { CATEGORIES } from '../config';

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Brain':
      return <Brain className="w-6 h-6 text-[#2D5A27]" />;
    case 'Heart':
      return <Heart className="w-6 h-6 text-[#D25432]" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-[#D25432]" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-6 h-6 text-[#2D5A27]" />;
    case 'Users':
      return <Users className="w-6 h-6 text-[#2D5A27]" />;
    case 'Target':
      return <Target className="w-6 h-6 text-[#2D5A27]" />;
    case 'RefreshCw':
      return <RefreshCw className="w-6 h-6 text-[#2D5A27]" />;
    case 'MessageSquare':
      return <MessageSquare className="w-6 h-6 text-[#2D5A27]" />;
    default:
      return <Brain className="w-6 h-6 text-[#2D5A27]" />;
  }
};

export const Categories: React.FC = () => {
  // Only display 4 cards as requested
  const top4Categories = CATEGORIES.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-block bg-white text-[#2D5A27] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#E8E2D8] shadow-2xs">
            Estructura del Material Terapéutico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Todo lo que necesitas para <span className="text-[#2D5A27]">enriquecer tus sesiones</span>
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base leading-relaxed font-medium">
            En lugar de buscar actividades improvisadas para cada consulta, tendrás un repertorio de recursos terapéuticos listos para consultar y utilizar según las necesidades de cada adolescente.
          </p>
        </motion.div>

        {/* 4 Category Cards Grid with Motion */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {top4Categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#D25432] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D25432] to-[#2D5A27] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center mb-4 group-hover:bg-[#DCFCE7] group-hover:border-[#2D5A27]/30 transition-all duration-300 group-hover:scale-110">
                  {getIconComponent(cat.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#D25432] transition-colors font-serif-display">
                  {cat.title}
                </h3>
                <p className="text-[#78716C] text-xs sm:text-sm leading-relaxed font-medium">
                  {cat.description}
                </p>
              </div>

              {/* Bottom tag / subtle accent */}
              <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center justify-between text-[11px] font-bold text-[#2D5A27] opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Kit Terapéutico</span>
                <span className="group-hover:translate-x-1.5 transition-transform text-[#D25432] font-black">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


