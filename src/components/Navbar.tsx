'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { LUNA_INFO } from '@/data/lunaData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Método', href: '#metodologia' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Luciana Mayer', href: '#luciana-mayer' },
    { label: 'Studio & Galeria', href: '#galeria' },
    { label: 'Avaliações (5.0 ★)', href: '#avaliacoes' },
    { label: 'Horários', href: '#horarios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav-scrolled py-3 shadow-sm'
          : 'bg-transparent py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-full bg-white/90 p-1 shadow-sm flex items-center justify-center border border-sky-100 overflow-hidden">
              <Image
                src="/assets/luna/logo.png"
                alt="Studio Luna Pilates Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-semibold tracking-[0.2em] text-lg transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                LUNA <span className="font-light">PILATES</span>
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-sky-700' : 'text-sky-200'
                }`}
              >
                Studio & Fisioterapia
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-sky-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90 drop-shadow-sm'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={LUNA_INFO.whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 ${
                isScrolled
                  ? 'bg-sky-600 hover:bg-sky-700 text-white'
                  : 'bg-white/90 hover:bg-white text-slate-900 backdrop-blur-md border border-white/50'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Aula Experimental</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={LUNA_INFO.whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full bg-emerald-500 text-white shadow-sm sm:hidden"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? 'text-slate-800 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav-scrolled border-b border-sky-100 px-6 py-6 mt-2 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs uppercase tracking-widest text-sky-800 font-semibold">
                Studio Luna Pilates • Campo Grande
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-amber-500" />
                5.0 ★ Google
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-sky-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href={LUNA_INFO.whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-sky-600 text-white font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Agendar Aula no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
