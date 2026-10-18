'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/data/lunaData';

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Registros' },
    { id: 'equipamentos', label: 'Aparelhos & Detalhes' },
    { id: 'espaco', label: 'Espaço & Fachada' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'todos') return true;
    if (activeFilter === 'equipamentos') {
      return item.id.includes('reformer') || item.id.includes('cadillac') || item.id.includes('aerial');
    }
    if (activeFilter === 'espaco') {
      return item.id.includes('facade') || item.id.includes('community');
    }
    return true;
  });

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
              <Camera className="w-3.5 h-3.5 text-sky-600" />
              <span>Nosso Espaço Físico Real</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              Projetado para o seu conforto,{' '}
              <span className="font-editorial-serif italic font-normal text-sky-700">
                silêncio e bem-estar.
              </span>
            </h2>

            <p className="mt-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
              Explore as fotografias reais do Studio Luna Pilates no Jardim Autonomista: climatização constante, luz natural, higiene e equipamentos impecáveis.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200/80 ${
                index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Card Meta */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 line-clamp-2 mt-1.5 opacity-90 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center border border-white/20 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 bg-slate-900 text-white">
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold block mb-1">
                {selectedPhoto.category}
              </span>
              <h4 className="text-xl sm:text-2xl font-light text-white mb-2">
                {selectedPhoto.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
