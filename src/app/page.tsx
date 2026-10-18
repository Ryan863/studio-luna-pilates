import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MetricsBar from '@/components/MetricsBar';
import MethodologySection from '@/components/MethodologySection';
import LucianaMayerSection from '@/components/LucianaMayerSection';
import GallerySection from '@/components/GallerySection';
import SocialProofSection from '@/components/SocialProofSection';
import LocationScheduleSection from '@/components/LocationScheduleSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      {/* 1. Header & Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
        {/* 2. Hero Section (100vh Full-Bleed Studio Photo + Hotspots) */}
        <HeroSection />

        {/* 3. Dobra 2: Métricas & Autoridade Técnica */}
        <MetricsBar />

        {/* 4. Dobra 3: A Metodologia Luna Pilates (Pilares) */}
        <MethodologySection />

        {/* 5. Dobra 4: Quem Conduz Seus Movimentos (Luciana Mayer) */}
        <LucianaMayerSection />

        {/* 6. Dobra 5: Galeria do Studio Real */}
        <GallerySection />

        {/* 7. Dobra 6: Prova Social (26 Avaliações Google Maps + Botão Oficial) */}
        <SocialProofSection />

        {/* 8. Dobra 7: Localização & Grade de Horários */}
        <LocationScheduleSection />

        {/* 9. Perguntas Frequentes & Dúvidas */}
        <FAQSection />

        {/* 10. Rodapé Minimalista */}
        <Footer />
      </main>

      {/* 11. Botão Flutuante de Conversão WhatsApp */}
      <FloatingWhatsApp />
    </>
  );
}
