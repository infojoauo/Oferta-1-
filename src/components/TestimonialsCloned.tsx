import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

interface TestimonialsClonedProps {
  onScrollToOffers?: () => void;
}

export const TestimonialsCloned: React.FC<TestimonialsClonedProps> = ({ onScrollToOffers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: '“Recién graduada, tenía miedo de no saber qué hacer en sesión. El kit me dio estructura y confianza desde el primer día. Los papás notan la diferencia.”',
      name: 'Lucía R.',
      role: 'Terapeuta Infantil — México'
    },
    {
      text: '“Las fichas y barajas de emociones me salvaron con pacientes resistentes que apenas hablaban. Es el material más completo y visual que he comprado.”',
      name: 'Mariana G.',
      role: 'Psicóloga Clínica — Colombia'
    },
    {
      text: '“Ahorro horas buscando material en internet antes de cada sesión. Ahora tengo todo clasificado por motivo de consulta listo para imprimir.”',
      name: 'Carlos M.',
      role: 'Psicopedagogo — Argentina'
    }
  ];

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="bg-[#FAF7F2] py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Yellow/Green Eyebrow */}
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#008751] block mb-2">
          LO QUE ESTÁN DICIENDO
        </span>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 tracking-tight mb-2">
          Psicólogas que ya usan el kit
        </h2>

        {/* Subtitle */}
        <p className="text-stone-600 text-xs sm:text-sm mb-8 font-medium">
          Resultados reales de quienes aplicaron los recursos en sus sesiones.
        </p>

        {/* Single Testimonial Card with Left/Right Arrows */}
        <div className="relative max-w-lg mx-auto mb-4">
          
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Anterior testimonio"
            className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-stone-300 text-emerald-800 shadow-md hover:bg-stone-50 flex items-center justify-center cursor-pointer z-10 transition-transform active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-6 sm:p-7 text-left">
            {/* 5 Golden Stars */}
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-stone-800 text-sm sm:text-base font-normal leading-relaxed mb-6 italic">
              {testimonials[currentIndex].text}
            </p>

            {/* Author */}
            <div className="pt-4 border-t border-stone-100">
              <h4 className="font-bold text-slate-950 text-xs sm:text-sm">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-[11px] sm:text-xs text-stone-500 font-medium">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Siguiente testimonio"
            className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-stone-300 text-emerald-800 shadow-md hover:bg-stone-50 flex items-center justify-center cursor-pointer z-10 transition-transform active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-1.5 pt-2 mb-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'bg-[#008751] w-5' : 'bg-stone-300'
              }`}
            />
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
