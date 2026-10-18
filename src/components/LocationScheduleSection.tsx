'use client';

import { Clock, MapPin, Navigation, MessageCircle, Car, Shield, Sparkles, Check } from 'lucide-react';
import { LUNA_INFO, SCHEDULE_DAYS } from '@/data/lunaData';

export default function LocationScheduleSection() {
  return (
    <section id="horarios" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Localização & Horários</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            Treine no seu ritmo:{' '}
            <span className="font-editorial-serif italic font-normal text-sky-700">
              antes do trabalho ou ao final do dia.
            </span>
          </h2>

          <p className="mt-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
            Localizado no nobre e seguro Jardim Autonomista em Campo Grande. Estacione com tranquilidade em frente ao studio e aproveite um ambiente climatizado e sereno.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Horários Detalhados */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-white border border-sky-100 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                    <Clock className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Grade de Horários
                    </h3>
                    <p className="text-xs text-sky-700 font-medium">Aulas a partir das 06:00 da manhã</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Turmas Ativas
                </span>
              </div>

              {/* Day-by-Day Table */}
              <div className="space-y-3">
                {SCHEDULE_DAYS.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-xs sm:text-sm ${
                      item.open
                        ? 'bg-slate-50 border border-slate-100'
                        : 'bg-slate-100/60 text-slate-600'
                    }`}
                  >
                    <span className="font-semibold text-slate-800">{item.day}</span>
                    <span
                      className={`font-mono text-xs ${
                        item.open ? 'text-sky-900 font-medium' : 'text-slate-600 italic'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note about flexible schedules */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs text-slate-600 leading-relaxed">
                * Como atendemos em turmas quase personal, as vagas por horário são limitadas. Consulte a disponibilidade da grade matutina ou noturna pelo WhatsApp.
              </p>
            </div>
          </div>

          {/* Column 2: Localização, Endereço & Acesso */}
          <div className="lg:col-span-6 rounded-3xl p-8 sm:p-10 bg-white border border-sky-100 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    Studio Luna Pilates
                  </h3>
                  <p className="text-xs text-slate-600">{LUNA_INFO.neighborhood}, Campo Grande - MS</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs sm:text-sm text-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block">
                    Endereço Oficial:
                  </span>
                  <p className="font-medium text-slate-900 text-base">
                    {LUNA_INFO.address}
                  </p>
                  <p className="text-slate-600 text-xs">
                    {LUNA_INFO.neighborhood} • CEP: {LUNA_INFO.zip} • Campo Grande - MS
                  </p>
                </div>

                {/* Location Perks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <Car className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Fácil estacionamento em frente</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                    <Shield className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Região nobre e segura</span>
                  </div>
                </div>

                {/* Embedded Map Representation */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/9] relative flex items-center justify-center text-center p-6">
                  <div className="space-y-2 z-10">
                    <MapPin className="w-8 h-8 text-sky-600 mx-auto animate-bounce" />
                    <p className="text-sm font-semibold text-slate-900">
                      Rua Hermelita de Oliveira Gomes, 1148
                    </p>
                    <p className="text-xs text-slate-500">
                      Jardim Autonomista — Fácil de chegar por todas as vias principais
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90" />
                </div>
              </div>

            </div>

            {/* Route & WhatsApp Action Triggers */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={LUNA_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Rota no Google Maps</span>
              </a>

              <a
                href={LUNA_INFO.whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs tracking-wider uppercase transition-colors border border-slate-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: {LUNA_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
