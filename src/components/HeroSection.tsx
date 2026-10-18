'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MessageCircle, ArrowDown, ShieldCheck, Star, Sparkles, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { LUNA_INFO, HOTSPOTS } from '@/data/lunaData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-badge', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.2,
    })
      .from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 1,
      }, '-=0.5')
      .from('.hero-subtitle', {
        opacity: 0,
        y: 25,
        duration: 0.9,
      }, '-=0.6')
      .from('.hero-actions', {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-hotspot', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      }, '-=0.5')
      .from('.hero-footer-trust', {
        opacity: 0,
        y: 15,
        duration: 0.8,
      }, '-=0.4');
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Studio Photography with Fallback & Soft Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/luna/hero-studio.jpg"
          alt="Studio Luna Pilates com equipamentos de precisão e aluna em movimento"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 duration-1000 ease-out"
        />
        {/* Editorial Vignette & Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        {/* Subtle Cerulean Atmosphere glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-widest uppercase text-sky-200">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>CAMPO GRANDE - MS • JARDIM AUTONOMISTA</span>
            </div>

            {/* H1 Headline */}
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-white">
              A precisão da fisioterapia.{' '}
              <span className="block mt-1 font-editorial-serif italic font-normal text-sky-200">
                A força do pilates.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-base sm:text-lg lg:text-xl text-slate-200/90 max-w-2xl font-light leading-relaxed">
              Aulas personalizadas com turmas reduzidas conduzidas por profissional com dupla formação em <strong className="font-semibold text-white">Fisioterapia e Educação Física</strong>. Elimine dores, recupere sua postura e conquiste um corpo funcional.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href={LUNA_INFO.whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-slate-950 transition-transform group-hover:scale-110" />
                <span>Agendar Aula no WhatsApp</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#metodologia"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm tracking-wide backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <span>Conhecer o Método</span>
                <ArrowDown className="w-4 h-4 opacity-70" />
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-light">
              <div className="flex items-center gap-1.5 bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0</span>
                <span className="text-slate-300">• 26+ avaliações no Google</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Turmas Reduzidas (Quase Personal)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>+10 Anos de Excelência no MS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Hotspots on Studio Blueprint */}
          <div className="lg:col-span-4 relative flex flex-col justify-end">
            <div className="rounded-3xl p-6 bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400" />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
                    Biomecânica & Alinhamento
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Toque para explorar</span>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Clique nos pontos anatômicos para entender os diferenciais do Pilates com base fisioterapêutica:
              </p>

              {/* Hotspot List / Selector */}
              <div className="space-y-2.5">
                {HOTSPOTS.map((hotspot) => {
                  const isActive = activeHotspot === hotspot.id;
                  return (
                    <div
                      key={hotspot.id}
                      onClick={() => setActiveHotspot(isActive ? null : hotspot.id)}
                      className={`hero-hotspot cursor-pointer rounded-2xl p-3.5 transition-all duration-300 border ${
                        isActive
                          ? 'bg-sky-950/80 border-sky-400/60 shadow-lg shadow-sky-500/10'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${
                              isActive
                                ? 'bg-sky-400 text-slate-950'
                                : 'bg-white/10 text-sky-200'
                            }`}
                          >
                            {hotspot.id === 'posture' ? '1' : hotspot.id === 'core' ? '2' : '3'}
                          </span>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-sky-300 font-semibold block">
                              {hotspot.tag}
                            </span>
                            <h4 className="text-sm font-semibold text-white">
                              {hotspot.title}
                            </h4>
                          </div>
                        </div>
                        <span
                          className={`text-xs transition-transform duration-300 ${
                            isActive ? 'rotate-90 text-sky-300' : 'text-slate-400'
                          }`}
                        >
                          ›
                        </span>
                      </div>

                      {isActive && (
                        <p className="mt-2.5 pt-2 text-xs text-slate-200 leading-relaxed border-t border-sky-400/20 animate-in fade-in duration-200">
                          {hotspot.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quick Note about Luciana Mayer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2.5 text-[11px] text-slate-300">
                <Info className="w-4 h-4 text-sky-300 shrink-0" />
                <span>Supervisão direta com Luciana Mayer em todos os aparelhos.</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Scroll Indicator & Banner */}
      <div className="hero-footer-trust relative z-10 w-full border-t border-white/10 bg-slate-950/70 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-medium text-white">Horários de Atendimento:</span>
            <span>Seg a Sex: 06h às 11h e 16h às 20h</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Rua Hermelita de Oliveira Gomes, 1148 • Jardim Autonomista</span>
            <a
              href="#metodologia"
              className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors"
            >
              <span>Rolar para saber mais</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
