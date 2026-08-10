import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2 } from 'lucide-react';
import { REAL_TESTIMONIALS } from '../config';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-block text-[#2D5A27] font-black text-xs uppercase tracking-widest">
            TESTIMONIOS REALES
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <p className="text-[#78716C] text-sm sm:text-base font-medium leading-relaxed">
            Psicólogos, terapeutas y educadores que ya están transformando sus consultas con nuestro kit.
          </p>
        </motion.div>

        {/* 4 Real Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {REAL_TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-[#E8E2D8] hover:border-[#2D5A27]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 relative"
            >
              <div>
                {/* Author Info with Profile Photo */}
                <div className="flex items-center gap-3.5 mb-3">
                  {item.avatarUrl ? (
                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 rounded-full object-cover shrink-0 shadow-xs border-2 border-[#E8E2D8]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#2D5A27] text-white font-extrabold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-xs border border-[#2D5A27]/20">
                      {item.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-extrabold text-[#1C1917] text-base sm:text-lg font-serif-display leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#78716C] font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote with Left Accent Line */}
                <div className="p-4 rounded-xl bg-[#FAF7F2] border-l-4 border-[#2D5A27] text-[#44403C] text-sm sm:text-base font-medium leading-relaxed">
                  "{item.quote}"
                </div>
              </div>

              {/* Verified Purchase & Location Tag */}
              <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between text-xs text-[#78716C]">
                <span className="inline-flex items-center gap-1.5 text-[#2D5A27] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Compra verificada</span>
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#57534E]">
                  <span>{item.flag}</span>
                  <span>{item.country}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

