import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface ClonedGuaranteeFAQProps {
  onScrollToOffers: () => void;
}

export const ClonedGuaranteeFAQ: React.FC<ClonedGuaranteeFAQProps> = ({ onScrollToOffers }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Cómo accedo al material después de la compra?',
      a: 'Inmediatamente después de confirmarse el pago, recibirás un correo electrónico de Hotmart con tu enlace de acceso directo para descargar todo el contenido, la Ficha Técnica y el bono en formato PDF.'
    },
    {
      q: '¿Cuántos recursos incluye el Kit Completo?',
      a: 'El Kit Completo incluye más de 130 recursos lúdicos listos para imprimir, además del Bono de Juegos Terapéuticos y la Ficha Técnica de seguimiento clínico.'
    },
    {
      q: '¿En qué formato viene el kit?',
      a: 'Todos los recursos vienen organizados en formato PDF de alta resolución (tamaño estándar A4 listo para imprimir o proyectar en pantalla para atención online).'
    },
    {
      q: '¿Puedo imprimirlo cuantas veces quiera?',
      a: '¡Sí! Al tener acceso de por vida al material, puedes imprimir las fichas, juegos y guías tantas veces como necesites para tus sesiones y pacientes.'
    },
    {
      q: '¿Necesito experiencia en psicoterapia infantil para usarlo?',
      a: 'No. El kit está diseñado tanto para profesionales recién egresados que necesitan una guía clara y estructurada, como para terapeutas experimentados que buscan enriquecer su repertorio lúdico.'
    },
    {
      q: '¿Funciona para niños muy resistentes?',
      a: 'Sí, incluye dinámicas proyectivas y juegos de conexión diseñados específicamente para romper el hielo y crear confianza con niños tímidos o desafiantes.'
    },
    {
      q: '¿Sirve para atención en línea también?',
      a: 'Totalmente. Puedes compartir los archivos en pantalla durante tus videollamadas o enviar las fichas a las familias para realizarlas en conjunto.'
    },
    {
      q: '¿Cómo funciona la garantía?',
      a: 'Tienes 7 días completos de garantía incondicional. Si sientes que el material no cumple con tus expectativas, solicitas el reembolso directo en Hotmart sin preguntas ni burocracia.'
    },
    {
      q: '¿El pago es seguro?',
      a: '100% seguro. El procesamiento lo realiza Hotmart, la plataforma de productos digitales líder en Iberoamérica con encriptación de datos bancarios.'
    }
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div>
      {/* 1. Guarantee Section: 7 DÍAS GARANTÍA */}
      <section className="bg-[#FAF7F2] py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          
          {/* Circular Badge Guarantee 7 Días */}
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#008751] flex flex-col items-center justify-center mx-auto p-1 bg-white shadow-2xs">
            <span className="text-[9px] font-black tracking-widest text-emerald-800 uppercase">7 DÍAS</span>
            <span className="text-[8px] font-bold text-stone-500 uppercase">GARANTÍA</span>
            <span className="text-[7px] font-extrabold text-emerald-600 bg-emerald-50 px-1 rounded">100% SEGURO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Compra sin riesgo
          </h2>

          <p className="text-stone-700 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Tienes 7 días para usar el kit, explorar todos los recursos y ver en la práctica lo que hace por tu sesión. Si por cualquier motivo no quedas satisfecha, solo pide el reembolso. Sin burocracia, sin preguntas.
          </p>

          <p className="text-xs sm:text-sm font-bold text-slate-900">
            El riesgo es todo nuestro. El resultado es todo tuyo.
          </p>

        </div>
      </section>

      {/* 2. FAQ Section */}
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-2xl mx-auto text-center">
          
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mb-2">
            ¿Aún tienes alguna duda?
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm mb-8 font-medium">
            Respondemos las preguntas más comunes aquí.
          </p>

          {/* Accordion list */}
          <div className="divide-y divide-stone-200 text-left border-t border-b border-stone-200 mb-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-3.5">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between gap-3 text-left font-bold text-xs sm:text-sm text-slate-900 hover:text-[#008751] transition-colors cursor-pointer py-1"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#008751] text-base shrink-0">
                    {openIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                {openIdx === idx && (
                  <p className="text-xs text-stone-600 leading-relaxed pt-2 pr-4 font-normal">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Button under FAQ */}
          <button
            onClick={onScrollToOffers}
            className="px-8 py-3.5 rounded-full bg-[#008751] hover:bg-[#007043] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.99]"
          >
            <span>Quiero mi kit ahora</span>
          </button>

        </div>
      </section>

      {/* 3. Final Section */}
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 text-center border-b border-stone-200">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Tu próxima sesión puede ser diferente
          </h2>
          <div>
            <button
              onClick={onScrollToOffers}
              className="px-8 py-3.5 rounded-full bg-[#008751] hover:bg-[#007043] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center justify-center transform hover:scale-[1.02] active:scale-[0.99]"
            >
              <span>Quiero mi kit ahora</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Footer with copyright: ©2026 Kits Terapéuticos */}
      <footer className="bg-white py-8 px-4 text-center text-stone-500 text-[10px] sm:text-[11px] space-y-3">
        <p className="font-semibold text-stone-700">
          ©2026 Kits Terapéuticos. Todos los derechos reservados.
        </p>
        <div className="max-w-2xl mx-auto text-stone-400 leading-relaxed text-[10px]">
          <p>
            ℹ️ Este sitio no forma parte del sitio web de Facebook ni de Facebook Inc. Además, este sitio NO está avalado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc. Los resultados mencionados no representan una promesa o garantía; dependen del compromiso, esfuerzo y aplicación individual de cada profesional.
          </p>
        </div>
      </footer>
    </div>
  );
};
