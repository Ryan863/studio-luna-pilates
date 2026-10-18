'use client';

import { useState } from 'react';
import { Star, MessageSquareQuote, ShieldCheck, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { TESTIMONIALS, LUNA_INFO } from '@/data/lunaData';

export default function SocialProofSection() {
  const [showAll, setShowAll] = useState(false);

  // Show top 6 testimonials initially, expand to all 26 on click
  const visibleTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 7);

  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold tracking-widest uppercase mb-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Avaliação Máxima 5.0 no Google</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            Mais de 10 anos transformando vidas,{' '}
            <span className="font-editorial-serif italic font-normal text-sky-700">
              aliviando dores e cultivando amizades.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Depoimentos espontâneos e autênticos registrados no perfil oficial do Google Meu Negócio por praticantes de Campo Grande - MS.
          </p>
        </div>

        {/* Featured Testimonial Hero Card */}
        {TESTIMONIALS[0] && (
          <div className="mb-12 rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-sky-900 via-sky-950 to-slate-950 text-white shadow-xl relative overflow-hidden border border-sky-800">
            <div className="absolute top-6 right-8 text-sky-400/20 pointer-events-none">
              <MessageSquareQuote className="w-24 h-24" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-bold tracking-wider uppercase border border-sky-400/30">
                  Avaliação em Destaque no Google
                </span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-slate-100 leading-relaxed font-editorial-serif italic">
                &ldquo;{TESTIMONIALS[0].text}&rdquo;
              </blockquote>

              <div className="pt-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-800 text-white flex items-center justify-center font-bold text-sm border border-sky-400/40">
                  LP
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Aluno(a) do Studio Luna Pilates</p>
                  <p className="text-xs text-sky-300 font-light">Avaliação 5 Estrelas • Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Masonry / Grid for Remaining Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-7 bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-600 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                    {item.timeAgo}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed font-light">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center text-xs font-bold uppercase shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  {item.role && (
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                      {item.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle View All Testimonials */}
        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold tracking-wider uppercase transition-colors"
          >
            <span>{showAll ? 'Mostrar Menos Avaliações' : 'Ver Todos os 26 Depoimentos Reais'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Official Google Maps Review Pill Button (Mandatory in prompt) */}
          <a
            href={LUNA_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white hover:bg-sky-50 text-sky-900 font-bold text-xs tracking-wider uppercase border border-sky-300 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <span>Ver todas as avaliações no Google Maps (5.0 ★)</span>
            <ExternalLink className="w-4 h-4 text-sky-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
