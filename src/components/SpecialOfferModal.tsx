import React from 'react';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BASIC_OFFER_URL, UPSELL_OFFER_URL } from '../config';
import { buildCheckoutUrl } from '../utils/utm';

interface SpecialOfferModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onCloseToBasic?: () => void;
  onAcceptUpsell?: () => void;
  basicUrl?: string;
  upsellUrl?: string;
}

export const SpecialOfferModal: React.FC<SpecialOfferModalProps> = ({
  isOpen,
  onClose,
  onCloseToBasic,
  onAcceptUpsell,
  basicUrl = BASIC_OFFER_URL,
  upsellUrl = UPSELL_OFFER_URL
}) => {
  if (!isOpen) return null;

  // Simply close the popup when clicking the 'X' or backdrop
  const handlePureClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClose) {
      onClose();
    } else if (onCloseToBasic) {
      onCloseToBasic();
    }
  };

  // When accepting the special upsell offer ($7.50)
  const handleAccept = () => {
    if (onAcceptUpsell) onAcceptUpsell();
    if (onClose) onClose();
    if (upsellUrl) {
      window.open(buildCheckoutUrl(upsellUrl), '_blank');
    }
  };

  // When explicitly declining and proceeding to buy the Basic kit ($5)
  const handleDeclineToBasic = () => {
    if (onCloseToBasic) {
      onCloseToBasic();
    } else if (onClose) {
      onClose();
    }
    if (basicUrl) {
      window.open(buildCheckoutUrl(basicUrl), '_blank');
    }
  };

  return (
    <AnimatePresence>
      <div 
        id="special-offer-modal-overlay"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 overflow-y-auto"
      >
        {/* Backdrop click closes modal */}
        <div 
          className="fixed inset-0" 
          onClick={handlePureClose} 
          aria-hidden="true" 
        />

        <motion.div
          id="special-offer-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="relative bg-white rounded-2xl max-w-[360px] sm:max-w-[380px] w-full my-auto shadow-2xl border border-stone-200 z-10 p-4 sm:p-5 flex flex-col text-center"
        >
          {/* Close Button ('X') - Instantly closes modal */}
          <button
            id="close-special-offer-btn"
            type="button"
            onClick={handlePureClose}
            aria-label="Cerrar ventana"
            className="absolute top-3 right-3 p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer z-20"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Top Green Badge */}
          <div className="flex justify-center mb-2">
            <span className="inline-block px-3 py-0.5 rounded-full bg-[#2D5A27] text-white text-[10px] font-extrabold uppercase tracking-wider">
              OFERTA ESPECIAL EXCLUSIVA
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] leading-tight mb-1">
            ¡Espera! Tenemos una oferta especial para ti
          </h3>

          {/* Subtitle / Upgrade line */}
          <p className="text-[12px] text-stone-600 mb-3 leading-snug">
            Antes de continuar, lleva el <span className="font-bold text-stone-900">Kit Completo</span> por solo{' '}
            <span className="font-extrabold text-[#2D5A27] text-[13px]">US$7,50</span>{' '}
            <span className="text-red-500 font-bold line-through text-[11px]">(en vez de US$10)</span>
          </p>

          {/* Included Features Box */}
          <div className="bg-stone-50/80 rounded-xl p-3 border border-stone-200/70 text-left mb-2.5">
            <div className="text-[11px] font-bold text-stone-800 mb-1.5 flex items-center gap-1.5">
              <span>✨</span>
              <span>Lo que obtienes con el Kit Completo:</span>
            </div>
            
            <ul className="space-y-1 text-[11px] text-stone-700 font-medium">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
                <span>130+ Recursos Terapéuticos prácticos</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
                <span>Acceso Inmediato y de Por Vida</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
                <span>Garantía de 7 días (100% segura)</span>
              </li>
              <li className="flex items-center gap-1.5 text-stone-900 font-semibold">
                <span className="text-amber-500 text-[11px]">🎁</span>
                <span>BONO: Juegos Terapéuticos</span>
              </li>
              <li className="flex items-center gap-1.5 text-stone-900 font-semibold">
                <span className="text-emerald-600 text-[11px]">📋</span>
                <span>Ficha Técnica Completa en PDF</span>
              </li>
            </ul>
          </div>

          {/* Scarcity Banner */}
          <div className="bg-red-50 border border-red-100 rounded-lg py-1 px-2 mb-3">
            <p className="text-[10px] sm:text-[11px] font-bold text-red-600">
              ¡Esta oferta de US$7,50 solo aparece una vez!
            </p>
          </div>

          {/* Primary Action Button (Upsell $7.50) */}
          <button
            id="accept-upsell-offer-btn"
            type="button"
            onClick={handleAccept}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#2D5A27] to-[#3a7333] hover:from-[#23471e] hover:to-[#2e5d28] text-white font-black text-xs sm:text-[13px] uppercase tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer mb-2 flex items-center justify-center gap-1.5"
          >
            <span>¡SÍ! QUIERO EL KIT COMPLETO POR US$7,50</span>
          </button>

          {/* Secondary Action Button (Decline to Basic $5) */}
          <button
            id="decline-upsell-offer-btn"
            type="button"
            onClick={handleDeclineToBasic}
            className="w-full py-1.5 px-3 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-600 hover:text-stone-900 font-semibold text-[11px] transition-colors cursor-pointer"
          >
            No, gracias. Quiero continuar con el Kit Básico (US$5)
          </button>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
