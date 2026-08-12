import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { PainPoints } from './components/PainPoints';
import { WhyChoose } from './components/WhyChoose';
import { BonusSection } from './components/BonusSection';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { ResourcePreviewModal } from './components/ResourcePreviewModal';
import { HotmartConfigModal } from './components/HotmartConfigModal';
import { BASIC_OFFER_URL, COMPLETE_OFFER_URL } from './config';
import { ResourceSampleItem } from './types';

export default function App() {
  const [basicUrl, setBasicUrl] = useState(BASIC_OFFER_URL);
  const [completeUrl, setCompleteUrl] = useState(COMPLETE_OFFER_URL);

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [selectedSample, setSelectedSample] = useState<ResourceSampleItem | null>(null);

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPreviewWithSample = (sample?: ResourceSampleItem) => {
    setSelectedSample(sample || null);
    setIsPreviewModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* Top Banner with Offer & Countdown */}
      <Navbar
        onOpenConfig={() => setIsConfigModalOpen(true)}
        onScrollToOffers={scrollToOffers}
      />

      {/* 1ª SEÇÃO — HERO */}
      <Hero
        onScrollToOffers={scrollToOffers}
        onOpenPreviewModal={() => openPreviewWithSample()}
      />

      {/* 2ª SEÇÃO — O QUE VOCÊ VAI RECEBER (CATEGORIAS) */}
      <Categories />

      {/* 3ª SEÇÃO — PROBLEMA / DOR */}
      <PainPoints />

      {/* 4ª SEÇÃO — POR QUÉ ELEGIR ESTE KIT */}
      <WhyChoose onScrollToOffers={scrollToOffers} />

      {/* 5ª SEÇÃO — BÔNUS */}
      <BonusSection
        onScrollToOffers={scrollToOffers}
      />

      {/* 7ª SEÇÃO — ESCOLHA SEU KIT (OFERTAS) */}
      <Pricing
        basicUrl={basicUrl}
        completeUrl={completeUrl}
      />

      {/* 8ª SEÇÃO — PROVA SOCIAL (DEPOIMENTOS) */}
      <SocialProof />

      {/* 9ª SEÇÃO — GARANTIA */}
      <Guarantee />

      {/* 10ª SEÇÃO — PREGUNTAS FRECUENTES */}
      <FAQ />

      {/* 11ª SEÇÃO — CTA FINAL */}
      <FinalCTA
        basicUrl={basicUrl}
        completeUrl={completeUrl}
      />

      {/* 12ª SEÇÃO — RODAPÉ */}
      <Footer />

      {/* Sticky Mobile Bar */}
      <StickyMobileCTA onScrollToOffers={scrollToOffers} />

      {/* Interactive PDF Worksheet Sample Modal */}
      {isPreviewModalOpen && (
        <ResourcePreviewModal
          sample={selectedSample}
          onClose={() => setIsPreviewModalOpen(false)}
          onScrollToOffers={scrollToOffers}
        />
      )}

      {/* Hotmart Configuration Modal (for testing URLs) */}
      {isConfigModalOpen && (
        <HotmartConfigModal
          currentBasicUrl={basicUrl}
          currentCompleteUrl={completeUrl}
          onSave={(bUrl, cUrl) => {
            setBasicUrl(bUrl);
            setCompleteUrl(cUrl);
          }}
          onClose={() => setIsConfigModalOpen(false)}
        />
      )}

    </div>
  );
}
