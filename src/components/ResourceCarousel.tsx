import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';
import { RESOURCE_SAMPLES } from '../config';
import { ResourceSampleItem } from '../types';

interface ResourceCarouselProps {
  onScrollToOffers: () => void;
  onOpenPreviewModal: (sample?: ResourceSampleItem) => void;
}

export const ResourceCarousel: React.FC<ResourceCarouselProps> = ({
  onScrollToOffers,
  onOpenPreviewModal
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? RESOURCE_SAMPLES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === RESOURCE_SAMPLES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-serif-display">
            Conoce el <span className="text-[#D25432] italic">material por dentro:</span>
          </h2>
          <p className="text-[#78716C] text-sm sm:text-base font-medium">
            Haz clic en cualquiera de las tarjetas para explorar una muestra interactiva en alta resolución.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="mt-10 relative max-w-5xl mx-auto">
          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="text-xs sm:text-sm text-[#78716C] font-medium">
              Mostrando <span className="font-bold text-[#1C1917]">{currentIndex + 1}</span> de <span className="font-bold text-[#1C1917]">{RESOURCE_SAMPLES.length}</span> muestras
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Anterior recurso"
                className="p-2.5 rounded-full bg-white hover:bg-[#D25432] text-[#1C1917] hover:text-white transition-colors cursor-pointer border border-[#E8E2D8] shadow-xs"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Siguiente recurso"
                className="p-2.5 rounded-full bg-white hover:bg-[#D25432] text-[#1C1917] hover:text-white transition-colors cursor-pointer border border-[#E8E2D8] shadow-xs"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_SAMPLES.map((sample, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <div
                  key={sample.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    onOpenPreviewModal(sample);
                  }}
                  className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden bg-white ${
                    isSelected
                      ? 'border-[#D25432] shadow-lg ring-2 ring-[#D25432]/20'
                      : 'border-[#E8E2D8] hover:border-[#D25432]/50 shadow-2xs hover:shadow-md'
                  }`}
                >
                  {/* Image Holder */}
                  <div className="relative aspect-4/3 bg-[#F8FAFC] overflow-hidden">
                    <img
                      src={sample.imageKey.startsWith('http') ? sample.imageKey : 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'}
                      alt={sample.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80";
                      }}
                    />

                    <div className="absolute inset-0 bg-[#1C1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <span className="bg-white text-[#1C1917] px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-4 h-4 text-[#D25432]" />
                        <span>Ver muestra</span>
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 bg-[#1C1917]/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {sample.category}
                    </div>
                  </div>

                  {/* Caption & Description */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-[#1C1917] text-base group-hover:text-[#D25432] transition-colors">
                      {sample.title}
                    </h3>
                    <p className="text-[#78716C] text-xs leading-relaxed line-clamp-2">
                      {sample.description}
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#D25432] group-hover:translate-x-1 transition-transform">
                      <span>Explorar contenido</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {RESOURCE_SAMPLES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver muestra ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-[#D25432]' : 'w-2.5 bg-[#E8E2D8] hover:bg-[#D25432]/50'
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button
              onClick={onScrollToOffers}
              className="px-8 py-4 rounded-full bg-[#D25432] hover:bg-[#b84223] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Ver todo lo que está incluido</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

