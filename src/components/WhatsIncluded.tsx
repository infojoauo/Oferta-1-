import React from 'react';
import { Sparkles, BookOpen, Heart, FileText, Users, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { IMAGE_ASSETS } from '../config';

interface WhatsIncludedProps {
  onScrollToOffers?: () => void;
}

export const WhatsIncluded: React.FC<WhatsIncludedProps> = ({ onScrollToOffers }) => {
  const items = [
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-700" />,
      text: 'Juegos de emociones y barajas de sentimientos para crear vínculo'
    },
    {
      icon: <BookOpen className="w-5 h-5 text-emerald-700" />,
      text: 'Actividades proyectivas organizadas por demanda clínica'
    },
    {
      icon: <Heart className="w-5 h-5 text-emerald-700" />,
      text: 'Dinámicas de vínculo para primeras sesiones y niños resistentes'
    },
    {
      icon: <FileText className="w-5 h-5 text-emerald-700" />,
      text: 'Fichas de manejo conductual listas para imprimir'
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-700" />,
      text: 'Materiales de psicoeducación para entregar a los padres'
    }
  ];

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-6">
          Todo lo que vas a recibir
        </h2>

        {/* Mockup Showcase - Square, Clean without white border box */}
        <div className="max-w-md sm:max-w-lg mx-auto mb-6">
          <div className="w-full aspect-square flex items-center justify-center">
            {IMAGE_ASSETS.HERO_MOCKUP ? (
              <img
                src={IMAGE_ASSETS.HERO_MOCKUP}
                alt="Todo lo que vas a recibir"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain drop-shadow-md"
              />
            ) : (
              <div className="w-full h-full rounded-2xl bg-stone-50 border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 p-6 text-center">
                <ImageIcon className="w-10 h-10 stroke-[1.2] mb-2 text-stone-300" />
                <span className="text-xs font-semibold text-stone-400 tracking-wide uppercase">Espacio preparado para imagen</span>
              </div>
            )}
          </div>
        </div>

        {/* Subtitle tag */}
        <p className="text-stone-900 font-extrabold text-xs sm:text-sm tracking-wide uppercase mb-4">
          Kit Consultorio Lúdico • +130 recursos terapéuticos
        </p>

        {/* List items with icons in white pill cards */}
        <div className="space-y-2.5 text-left max-w-xl mx-auto mb-7">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3.5 sm:p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 shadow-2xs hover:bg-slate-50 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {onScrollToOffers && (
          <div>
            <button
              onClick={onScrollToOffers}
              className="px-8 py-3.5 rounded-full bg-[#008751] hover:bg-[#007043] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <span>Quiero mi kit ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
