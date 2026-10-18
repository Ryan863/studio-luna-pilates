'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, ArrowUp, Star, ShieldCheck, Heart } from 'lucide-react';
import { LUNA_INFO } from '@/data/lunaData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/luna/logo.png"
                  alt="Studio Luna Pilates"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-semibold tracking-[0.2em] text-lg text-white block leading-tight">
                  LUNA <span className="font-light">PILATES</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-medium text-sky-400">
                  Studio & Fisioterapia • Campo Grande - MS
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              Um refúgio de reabilitação postural, condicionamento físico e alívio de dores no Jardim Autonomista. Aulas em turmas reduzidas conduzidas pela fisioterapeuta e educadora física Luciana Mayer.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-300 font-medium">
                5.0 estrelas no Google Maps (26+ avaliações reais)
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-light">
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  O Método Luna Pilates
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Diferenciais Técnicos
                </a>
              </li>
              <li>
                <a href="#luciana-mayer" className="hover:text-white transition-colors">
                  Profª Luciana Mayer (CREF / Crefito)
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria do Studio
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Depoimentos de Alunas (5.0 ★)
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-white transition-colors">
                  Horários & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Address info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Endereço & Atendimento
            </h4>
            <ul className="space-y-3 text-sm text-slate-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>
                  Rua Hermelita de Oliveira Gomes, 1148<br />
                  Jardim Autonomista — Campo Grande - MS<br />
                  CEP: 79021-270
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={LUNA_INFO.whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: (67) 9281-5397
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <p>Segunda a Sexta: 06:00 às 11:00 • 16:00 às 20:00</p>
                  <p className="text-xs text-slate-500">Sábado e Domingo: Fechado</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Studio Luna Pilates. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Feito com excelência para <strong className="text-slate-400 font-medium">Studio Luna Pilates</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label="Voltar ao topo da página"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
