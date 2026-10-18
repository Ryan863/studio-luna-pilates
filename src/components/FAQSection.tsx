'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS, LUNA_INFO } from '@/data/lunaData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4 border border-sky-100">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light text-slate-950 tracking-tight leading-tight">
            Perguntas frequentes sobre o{' '}
            <span className="font-editorial-serif italic font-normal text-sky-700">
              Studio Luna Pilates.
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200/90 bg-[#F8FAFC] overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 shrink-0 border border-slate-200 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-sky-50 text-sky-700 border-sky-200' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed font-light border-t border-slate-200/60 animate-in fade-in duration-200">
                    <p className="mt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-sky-50/70 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Envie uma mensagem direta para a professora Luciana.</p>
          </div>
          <a
            href={LUNA_INFO.whatsappHeroUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
