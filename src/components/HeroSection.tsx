'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MessageCircle, ArrowDown, ShieldCheck, Star, Sparkles, CheckCircle2, ChevronRight, X, Activity } from 'lucide-react';
import { LUNA_INFO, HOTSPOTS } from '@/data/lunaData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

// Hotspots positioned strategically over the studio equipment and practitioner
const PINS = [
  {
    id: 'posture',
    num: '1',
    title: 'Alinhamento da Coluna & Postura',
    tag: 'Fisioterapia Clínica',
    description: 'Descompressão vertebral e correção biomecânica milimétrica para alívio duradouro de dores lombares e hérnias.',
    top: '32%',
    left: '64%',
  },
  {
    id: 'core',
    num: '2',
    title: 'Powerhouse & Força do Core',
    tag: 'Condicionamento Funcional',
    description: 'Ativação do abdômen profundo e assoalho pélvico no Reformer e Cadillac, gerando estabilidade sem impacto articular.',
    top: '55%',
    left: '42%',
  },
  {
    id: 'breath',
    num: '3',
    title: 'Respiração & Desaceleração',
    tag: 'Redução do Estresse',
    description: 'Oxigenação celular tridimensional que reduz o cortisol, relaxa as tensões dos ombros e acalma a mente.',
    top: '40%',
    left: '84%',
  },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activePin, setActivePin] = useState<string | null>('posture');

  useGSAP(() => {
    // Safe GSAP animation with clearProps to prevent stuck opacity:0
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.hero-anim-item',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, clearProps: 'all' }
    ).fromTo(
      '.hero-pin',
      { opacity: 0, scale: 0.4 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(2)', clearProps: 'opacity,transform' },
      '-=0.4'
    );
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-slate-950 text-white"
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
        {/* Editorial Vignette & Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/70" />
        {/* Subtle Cerulean Atmosphere glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Interactive Glowing Hotspots (Placed Directly on the Studio Photograph) */}
      <div className="hidden md:block absolute inset-0 z-20 pointer-events-none">
        {PINS.map((pin) => {
          const isActive = activePin === pin.id;
          return (
            <div
              key={pin.id}
              style={{ top: pin.top, left: pin.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              {/* Pulsing Glowing Button */}
              <button
                type="button"
                onClick={() => setActivePin(isActive ? null : pin.id)}
                className="relative group focus:outline-none"
                aria-label={`Ver detalhe: ${pin.title}`}
              >
                {/* Luminous Pulsing Rings */}
                <span className="absolute -inset-2 rounded-full bg-sky-400/40 animate-ping opacity-75" />
                <span className="absolute -inset-1 rounded-full bg-sky-500/50 blur-sm" />
                
                {/* Hotspot Core Pill */}
                <div
                  className={`relative w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-2xl transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-sky-400 text-slate-950 border-white scale-110 shadow-sky-400/50'
                      : 'bg-slate-900/90 text-sky-200 border-sky-400/80 hover:bg-sky-500 hover:text-slate-950 hover:scale-110'
                  }`}
                >
                  {pin.num}
                </div>
              </button>

              {/* Tooltip Card Overlay for this Hotspot */}
              {isActive && (
                <div className="absolute left-1/2 -translate-x-1/2 top-11 w-72 sm:w-80 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-sky-400/40 shadow-2xl text-left z-30 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      {pin.tag}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePin(null);
                      }}
                      className="p-1 rounded-full text-slate-400 hover:text-white transition-colors"
                      aria-label="Fechar detalhe"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {pin.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-300 font-light leading-relaxed">
                    {pin.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-12 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Eyebrow Badge */}
            <div className="hero-anim-item inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-widest uppercase text-sky-200">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>CAMPO GRANDE - MS • JARDIM AUTONOMISTA</span>
            </div>

            {/* H1 Headline with Editorial Italics */}
            <h1 className="hero-anim-item text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] text-white">
              A precisão da fisioterapia.{' '}
              <span className="block mt-1 font-editorial-serif italic font-normal text-sky-200">
                A força do pilates.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-anim-item text-base sm:text-lg text-slate-200/90 max-w-xl font-light leading-relaxed">
              Aulas personalizadas com turmas reduzidas conduzidas por profissional com dupla formação em <strong className="font-semibold text-white">Fisioterapia e Educação Física</strong>. Elimine dores, recupere sua postura e conquiste um corpo funcional.
            </p>

            {/* Primary Action Buttons */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
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
            <div className="hero-anim-item pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-300 font-light">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0</span>
                <span className="text-slate-300">• 26+ avaliações no Google</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Turmas Reduzidas (Quase Personal)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>+10 Anos de Excelência no MS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Hotspot Selector Box (Guaranteed 100% visible, no missing content) */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="rounded-3xl p-6 sm:p-7 bg-slate-950/80 backdrop-blur-xl border border-sky-400/25 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-sky-400" />
                  <span className="text-xs uppercase tracking-widest text-sky-300 font-bold">
                    Biomecânica & Alinhamento
                  </span>
                </div>
                <span className="text-[11px] text-slate-400">Clique para expandir</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Benefícios técnicos do Pilates com supervisão clínica de Luciana Mayer:
              </p>

              {/* 3 Hotspot Selector Cards */}
              <div className="space-y-2.5">
                {PINS.map((pin) => {
                  const isSelected = activePin === pin.id;
                  return (
                    <button
                      key={pin.id}
                      type="button"
                      onClick={() => setActivePin(isSelected ? null : pin.id)}
                      className={`w-full text-left rounded-2xl p-3.5 transition-all duration-300 border block ${
                        isSelected
                          ? 'bg-sky-950/90 border-sky-400 shadow-md shadow-sky-500/10'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-sky-400 text-slate-950'
                                : 'bg-white/15 text-sky-200'
                            }`}
                          >
                            {pin.num}
                          </span>
                          <div>
                            <span className="text-[10px] uppercase tracking-wider text-sky-300 font-semibold block">
                              {pin.tag}
                            </span>
                            <h4 className="text-sm font-semibold text-white leading-tight">
                              {pin.title}
                            </h4>
                          </div>
                        </div>

                        <span
                          className={`text-sm text-slate-400 transition-transform duration-300 ${
                            isSelected ? 'rotate-90 text-sky-300' : ''
                          }`}
                        >
                          ›
                        </span>
                      </div>

                      {isSelected && (
                        <p className="mt-2.5 pt-2 text-xs text-slate-200 leading-relaxed border-t border-sky-400/20 font-light animate-in fade-in duration-200">
                          {pin.description}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-white/10">
                <span>Supervisão direta com Luciana Mayer</span>
                <span className="text-sky-300 font-semibold">Crefito & CREF</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Scroll Indicator & Banner */}
      <div className="hero-anim-item relative z-10 w-full border-t border-white/10 bg-slate-950/80 backdrop-blur-md py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Horários de Atendimento:</span>
            <span>Seg a Sex: 06h às 11h e 16h às 20h</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Rua Hermelita de Oliveira Gomes, 1148 • Jardim Autonomista</span>
            <a
              href="#metodologia"
              className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors"
            >
              <span>Ver Método & Studio</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
