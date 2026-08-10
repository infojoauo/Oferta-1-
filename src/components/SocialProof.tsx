import React from 'react';
import { Star, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS, LATAM_COUNTRIES } from '../config';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold">
            <MessageCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>Sección de Experiencia Profesional</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que los profesionales buscan en un buen kit terapéutico
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Estructurado con rigurosidad metodológica para la práctica clínica con jóvenes en toda la región.
          </p>
        </div>

        {/* 3 Testimonial Placeholder Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_PLACEHOLDERS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-dashed border-slate-300 shadow-xs flex flex-col justify-between space-y-4 relative"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Placeholder Quote Text */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-500 font-mono text-xs sm:text-sm italic">
                {item.placeholderText}
              </div>

              {/* Author Info */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{item.author}</span>
                <span className="inline-flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3" />
                  {item.country}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Latin American Flags visual layout */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 text-center">
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wider">
            Diseñado para la comunidad hispanohablante de América Latina
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {LATAM_COUNTRIES.map((c) => (
              <div
                key={c.code}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2 text-xs font-semibold text-slate-700 hover:border-emerald-300 transition-colors"
              >
                <span className="text-lg">{c.flag}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
