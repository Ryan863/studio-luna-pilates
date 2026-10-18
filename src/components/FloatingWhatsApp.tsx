'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { LUNA_INFO } from '@/data/lunaData';

export default function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group"
    >
      {/* Contextual Floating Tooltip */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 p-3 bg-white text-slate-800 rounded-2xl shadow-xl border border-sky-100 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-sky-800 uppercase tracking-wider">
              Studio Luna Pilates
            </span>
            <span className="text-xs text-slate-600 font-medium">
              Agende sua aula experimental com a Lu!
            </span>
          </div>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={LUNA_INFO.whatsappHeroUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-6 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulsing attention ring */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300" />
        </span>

        <MessageCircle className="w-7 h-7 sm:mr-2.5 stroke-[2.2] shrink-0" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Aula Experimental
        </span>
      </a>
    </aside>
  );
}
