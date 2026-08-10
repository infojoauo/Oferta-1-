import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../config';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#1C1917] border border-[#E8E2D8] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#D25432]" />
            <span>Resuelve tus dudas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Preguntas <span className="text-[#D25432] italic">frecuentes</span>
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base font-medium">
            Aquí encuentras la respuesta a las dudas más comunes sobre el kit y el formato de acceso.
          </p>
        </div>

        {/* Accordions List */}
        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[#E8E2D8] shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#1C1917] text-base hover:text-[#D25432] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#D25432] text-white' : 'bg-[#FAF7F2] text-[#1C1917]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-[#78716C] text-sm leading-relaxed border-t border-[#E8E2D8] pt-4 font-medium">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

