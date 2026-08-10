import React from 'react';
import { Lock, Zap, FileText, ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-[#E8E2D8] p-8 sm:p-12 text-center space-y-6 shadow-sm relative overflow-hidden">
          
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#DCFCE7] text-[#2D5A27] flex items-center justify-center shadow-xs">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
              Prueba el material durante <span className="text-[#D25432] italic">15 días sin riesgo</span>
            </h2>
            <p className="text-[#78716C] text-sm sm:text-base leading-relaxed font-medium">
              Tu compra se procesa de forma 100% segura a través de <strong className="text-[#1C1917]">Hotmart</strong>. Si por cualquier motivo sientes que el kit no transformó tus consultas con adolescentes, te devolvemos el 100% de tu dinero de inmediato.
            </p>
          </div>

          <div className="inline-block px-6 py-2.5 rounded-full bg-[#FAF7F2] border border-[#2D5A27]/30 text-[#2D5A27] font-extrabold text-xs uppercase tracking-wider shadow-2xs">
            🛡️ Garantía Incondicional de 15 Días
          </div>

          {/* Three Trust Badges */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center gap-2.5 text-[#1C1917] font-bold text-xs sm:text-sm">
              <Lock className="w-4 h-4 text-[#2D5A27]" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center gap-2.5 text-[#1C1917] font-bold text-xs sm:text-sm">
              <Zap className="w-4 h-4 text-[#D25432]" />
              <span>Acceso Inmediato por Email</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8E2D8] flex items-center justify-center gap-2.5 text-[#1C1917] font-bold text-xs sm:text-sm">
              <FileText className="w-4 h-4 text-[#2D5A27]" />
              <span>PDFs Listos para Imprimir</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

