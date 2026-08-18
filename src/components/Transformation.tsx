import React from 'react';
import { Target, Smile, TrendingUp, Sparkles, ShieldCheck, Lock, Zap } from 'lucide-react';

interface TransformationProps {
  onScrollToOffers: () => void;
}

export const Transformation: React.FC<TransformationProps> = ({ onScrollToOffers }) => {
  const cards = [
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: 'Sesión más productiva',
      desc: 'Entras sabiendo qué vas a hacer. Sin improvisar, sin desperdiciar tiempo.'
    },
    {
      icon: <Smile className="w-5 h-5 text-emerald-400" />,
      title: 'Niño más comprometido',
      desc: 'Recursos lúdicos que despiertan la curiosidad y crean vínculo desde el primer encuentro.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: 'Más confianza en la sesión',
      desc: 'Tener el material correcto lo cambia todo. Entras preparada y la sesión fluye.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      title: 'Alternativa a juegos caros',
      desc: 'Recursos equivalentes a los de marcas premium por una fracción del precio.'
    }
  ];

  return (
    <div>
      {/* Top Dark Section: "Lo que cambia..." */}
      <section className="bg-[#0F172A] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-2 text-white">
            Lo que cambia cuando tienes las herramientas correctas
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-10 font-medium">
            Cada recurso fue pensado para hacer tu trabajo más eficaz.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-5 shadow-lg flex flex-col justify-start hover:border-slate-600 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center mb-4 shrink-0">
                  {c.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Bold Green Banner: "Toda sesión que no cuente..." */}
      <section className="bg-[#008751] text-white py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight">
            Toda sesión que no cuente con los recursos adecuados <span className="text-[#FDE047]">es una sesión perdida.</span>
          </h2>

          <div className="text-emerald-50 text-xs sm:text-sm md:text-base space-y-1 font-medium max-w-2xl mx-auto leading-relaxed">
            <p>Un niño que no se involucra hoy puede abandonar el proceso mañana.</p>
            <p>Una madre que no entiende lo que sucede puede cancelar las sesiones.</p>
            <p>Mereces comenzar la sesión con una base sólida, no simplemente esperando que funcione.</p>
          </div>

          <div className="pt-2">
            <button
              onClick={onScrollToOffers}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#008751] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <span>Quiero estructura en mis sesiones</span>
            </button>
          </div>

          {/* Micro trust icons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-[11px] font-semibold text-emerald-100">
            <div className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" />
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Garantía de 7 días</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Pago seguro</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
