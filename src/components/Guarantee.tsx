import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, Lock, Zap } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border border-[#E8E2D8] p-8 sm:p-12 text-center shadow-lg relative overflow-hidden"
        >
          {/* Top-Right Pill Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-1 rounded-full bg-[#166534] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
            100% SEGURO
          </div>

          {/* Central Circular Gradient Shield Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-[#2D5A27] via-[#4A7C2A] to-[#B08920] flex items-center justify-center shadow-md mb-6 mt-2">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-white stroke-[2.2]" />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1917] tracking-tight font-serif-display leading-tight mb-4">
            Garantía Incondicional <br className="hidden sm:inline" />
            de 7 Días
          </h2>

          {/* Main Description */}
          <p className="text-[#57534E] text-sm sm:text-base leading-relaxed font-medium max-w-md mx-auto mb-6">
            Prueba el material por 7 días completos. Si no quedas 100% satisfecho, te devolvemos tu dinero sin preguntas ni complicaciones.
          </p>

          {/* Bullet List with Checkmarks */}
          <div className="inline-flex flex-col items-start gap-2.5 text-xs sm:text-sm font-bold text-[#44403C] text-left mx-auto mb-6 bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-[#E8E2D8]/80 w-full sm:w-auto">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#2D5A27] shrink-0" />
              <span>Devolución rápida y sin burocracia</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#2D5A27] shrink-0" />
              <span>Sin preguntas ni justificaciones</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#2D5A27] shrink-0" />
              <span>Tu satisfacción es nuestra prioridad</span>
            </div>
          </div>

          {/* Hotmart & Security Footer */}
          <div className="pt-5 border-t border-[#F5EFE6] flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#78716C] font-semibold">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#2D5A27]" />
              Garantizado por Hotmart
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#D25432]" />
              Acceso Inmediato
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};



