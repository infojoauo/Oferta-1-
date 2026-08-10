import React from 'react';
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
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-block bg-white text-[#2D5A27] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#E8E2D8]">
            Estructura del Material Terapéutico
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Todo lo que necesitas para <span className="text-[#2D5A27] italic">enriquecer tus sesiones</span>
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base leading-relaxed font-medium">
            En lugar de buscar actividades improvisadas para cada consulta, tendrás un repertorio de recursos terapéuticos listos para consultar y utilizar según las necesidades de cada adolescente.
          </p>
        </div>

        {/* 8 Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group p-6 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#D25432]/50 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center mb-4 group-hover:bg-[#DCFCE7] transition-colors">
                  {getIconComponent(cat.iconName)}
                </div>
                <h3 className="text-lg font-bold text-[#1C1917] mb-2 group-hover:text-[#D25432] transition-colors font-serif-display">
                  {cat.title}
                </h3>
                <p className="text-[#78716C] text-xs sm:text-sm leading-relaxed font-medium">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

