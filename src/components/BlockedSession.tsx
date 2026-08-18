import React from 'react';
import { MessageSquareOff, Zap, HeartHandshake, Eye, UserMinus, Flame, Compass } from 'lucide-react';

interface BlockedSessionProps {
  onScrollToOffers: () => void;
}

export const BlockedSession: React.FC<BlockedSessionProps> = ({ onScrollToOffers }) => {
  const cards = [
    {
      icon: <MessageSquareOff className="w-5 h-5 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      borderIcon: 'border-teal-200',
      text: 'El niño que llega y no dice nada'
    },
    {
      icon: <Zap className="w-5 h-5 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      borderIcon: 'border-teal-200',
      text: 'El paciente con TDAH que no para quieto'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      borderIcon: 'border-teal-200',
      text: 'El niño que llora y quiere a mamá'
    },
    {
      icon: <Eye className="w-5 h-5 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      borderIcon: 'border-teal-200',
      text: 'El que perdió a alguien y no sabe nombrar lo que siente'
    },
    {
      icon: <UserMinus className="w-5 h-5 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      borderIcon: 'border-teal-200',
      text: 'Aquel cuyos padres se separaron y está en medio del conflicto'
    },
    {
      icon: <Flame className="w-5 h-5 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      borderIcon: 'border-teal-200',
      text: 'El que tiene dificultad para controlar sus emociones y reacciona con intensidad'
    },
    {
      icon: <Compass className="w-5 h-5 text-teal-600" />,
      bgIcon: 'bg-teal-50',
      borderIcon: 'border-teal-200',
      text: 'El niño con TEA que necesita apoyos visuales y estructura clara'
    }
  ];

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-3">
          Si alguna vez te has quedado bloqueada en una sesión, este kit es para ti
        </h2>
        
        {/* Subtitle */}
        <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto mb-8 font-medium">
          Cada recurso fue pensado para una situación real. ¿Conoces ese momento en que el niño llega y no sabes por dónde empezar?
        </p>

        {/* 3-column / 2-column rounded cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-8 text-left">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 bg-[#F8FAFC] rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 hover:bg-slate-50 transition-all ${
                idx === cards.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className={`w-9 h-9 rounded-xl ${item.bgIcon} ${item.borderIcon} border flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <p className="text-xs sm:text-[13px] font-bold text-slate-800 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onScrollToOffers}
          className="px-8 py-3.5 rounded-full bg-[#008751] hover:bg-[#007043] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center mb-5 transform hover:scale-[1.02] active:scale-[0.99]"
        >
          <span>Quiero el kit completo</span>
        </button>

        {/* Footnote text */}
        <p className="italic text-stone-500 text-[11px] sm:text-xs max-w-2xl mx-auto leading-relaxed">
          Estas son solo algunas de las situaciones que abarca. El kit te acompaña en las necesidades más frecuentes de una consulta pediátrica, desde el primer contacto hasta el manejo diario.
        </p>

      </div>
    </section>
  );
};
