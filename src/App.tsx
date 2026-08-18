import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { ClonedHero } from './components/ClonedHero';
import { InsideLook } from './components/InsideLook';
import { BlockedSession } from './components/BlockedSession';
import { Transformation } from './components/Transformation';
import { WhatsIncluded } from './components/WhatsIncluded';
import { BonusesCloned } from './components/BonusesCloned';
import { InteractiveAppSection } from './components/InteractiveAppSection';
import { WhatsAppProofSection } from './components/WhatsAppProofSection';
import { TestimonialsCloned } from './components/TestimonialsCloned';
import { ClonedPricing } from './components/ClonedPricing';
import { ClonedGuaranteeFAQ } from './components/ClonedGuaranteeFAQ';
import { SpecialOfferModal } from './components/SpecialOfferModal';
import { BASIC_OFFER_URL, COMPLETE_OFFER_URL, UPSELL_OFFER_URL } from './config';

export default function App() {
  const [basicUrl] = useState(BASIC_OFFER_URL);
  const [upsellUrl] = useState(UPSELL_OFFER_URL);
  const [completeUrl] = useState(COMPLETE_OFFER_URL);

  const [isSpecialOfferOpen, setIsSpecialOfferOpen] = useState(false);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBasicOffer = () => {
    setIsSpecialOfferOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 font-sans antialiased selection:bg-emerald-600 selection:text-white">
      
      {/* 1. TOP BAR: OFERTA VÁLIDA SOLO HOY + COUNTDOWN */}
      <TopBanner />

      {/* 2. HERO: HEADLINE, TAGS, MOCKUP, CHECKLIST, CTA BUTTON */}
      <ClonedHero onScrollToOffers={scrollToOffers} />

      {/* 3. MIRA EL KIT POR DENTRO (DARK SECTION WITH 6 WORKSHEET CARDS) */}
      <InsideLook onScrollToOffers={scrollToOffers} />

      {/* 4. SI ALGUNA VEZ TE HAS QUEDADO BLOQUEADA EN UNA SESIÓN... */}
      <BlockedSession onScrollToOffers={scrollToOffers} />

      {/* 5. LO QUE CAMBIA + TODA SESIÓN SIN RECURSOS ES UNA SESIÓN PERDIDA */}
      <Transformation onScrollToOffers={scrollToOffers} />

      {/* 6. TODO LO QUE VAS A RECIBIR (+130 RECURSOS TERAPÉUTICOS) */}
      <WhatsIncluded onScrollToOffers={scrollToOffers} />

      {/* 7. BONO EXCLUSIVO DE REGALO */}
      <BonusesCloned onScrollToOffers={scrollToOffers} />

      {/* 8. FICHA TÉCNICA COMPLETA */}
      <InteractiveAppSection onScrollToOffers={scrollToOffers} />

      {/* 9. MENSAJES REALES DE WHATSAPP */}
      <WhatsAppProofSection onScrollToOffers={scrollToOffers} />

      {/* 10. TESTIMONIOS: PSICÓLOGAS QUE YA USAN EL KIT */}
      <TestimonialsCloned onScrollToOffers={scrollToOffers} />

      {/* 11. CHECKOUT SECTION: COUNTDOWN + KIT COMPLETO ($10) + KIT BÁSICO ($5) */}
      <ClonedPricing
        basicUrl={basicUrl}
        completeUrl={completeUrl}
        onSelectBasic={handleOpenBasicOffer}
      />

      {/* 12. GARANTÍA DE 7 DÍAS + PREGUNTAS FRECUENTES (FAQ) + FOOTER */}
      <ClonedGuaranteeFAQ onScrollToOffers={scrollToOffers} />

      {/* MODAL POPUP: OFERTA ESPECIAL UPSELL ($7.50 USD) */}
      <SpecialOfferModal
        isOpen={isSpecialOfferOpen}
        onClose={() => setIsSpecialOfferOpen(false)}
        basicUrl={basicUrl}
        upsellUrl={upsellUrl}
      />

    </div>
  );
}
