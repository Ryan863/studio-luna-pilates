'use client';

import { useRef, useState } from 'react';
import { ShieldCheck, Activity, Users, Sparkles, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { LUNA_INFO } from '@/data/lunaData';

export default function MethodologySection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      step: '01',
      title: 'Reabilitação & Alívio de Dores Crônicas',
      badge: 'Fisioterapia Aplicada',
      description:
        'Avaliação postural minuciosa para mapear desvios, encurtamentos e compressões. Tratamento focado em alívio duradouro de dores lombares, hérnias de disco, cervicalgias e tensões corporais acumuladas.',
      highlights: ['Descompressão intervertebral', 'Alinhamento da cintura escapular', 'Redução do uso de analgésicos'],
      bgGradient: 'from-sky-50 via-white to-white',
      borderAccent: 'border-sky-200',
    },
    {
      step: '02',
      title: 'Condicionamento & Tonificação Funcional',
      badge: 'Educação Física Integrada',
      description:
        'Fortalecimento profundo de toda a musculatura do core (abdômen, paravertebrais e glúteos). Aumento expressivo de flexibilidade, equilíbrio e tônus muscular sem gerar estresse ou desgaste nas articulações.',
      highlights: ['Ativação do Powerhouse', 'Resistência muscular duradoura', 'Zero impacto lesivo nos joelhos e quadris'],
      bgGradient: 'from-blue-50/60 via-white to-white',
      borderAccent: 'border-blue-200',
    },
    {
      step: '03',
      title: 'Turmas Reduzidas (Quase Personal)',
      badge: 'Acompanhamento Exclusivo',
      description:
        'Não operamos com salas cheias nem exercícios padronizados em massa. O número estrito de alunos por período permite que Luciana Mayer acompanhe cada respiração e corrija a trajetória articular em tempo real.',
      highlights: ['Feedback biomecânico contínuo', 'Adaptações personalizadas', 'Segurança total para iniciantes'],
      bgGradient: 'from-slate-50 via-white to-white',
      borderAccent: 'border-slate-200',
    },
    {
      step: '04',
      title: 'Ambiente Aconchegante & Climatizado',
      badge: 'Refúgio de Bem-Estar',
      description:
        'Uma atmosfera concebida para desacelerar o ritmo frenético do dia a dia. Sala 100% climatizada, aromatização suave, trilha sonora relaxante e iluminação pensada para acalmar a mente enquanto você cuida do corpo.',
      highlights: ['Espaço silencioso e higienizado', 'Estacionamento privativo e fácil', 'Horários matutinos a partir das 6h da manhã'],
      bgGradient: 'from-sky-50/40 via-white to-white',
      borderAccent: 'border-sky-100',
    },
  ];

  return (
    <section id="metodologia" className="py-24 sm:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold tracking-widest uppercase mb-4">
            <Activity className="w-3.5 h-3.5 text-sky-600" />
            <span>O Método Luna Pilates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            Ciência clínica no alívio de dor,{' '}
            <span className="font-editorial-serif italic font-normal text-sky-700">
              elegância em cada movimento.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Unimos o diagnóstico cinesiológico da Fisioterapia à progressão de carga inteligente da Educação Física. O resultado é um corpo forte, ágil, sem dores e pronto para a longevidade.
          </p>
        </div>

        {/* Bento Grid Layout (21st.dev inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.step}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative rounded-3xl p-8 sm:p-10 bg-white border ${pillar.borderAccent} shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden`}
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-3xl font-light text-slate-300 group-hover:text-sky-600 transition-colors">
                  {pillar.step}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold tracking-wider uppercase border border-sky-100">
                  {pillar.badge}
                </span>
              </div>

              {/* Title & Body */}
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-sky-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Highlights Checkmarks */}
              <div className="pt-6 border-t border-slate-100 space-y-2.5">
                {pillar.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Ambient Hover Gradient Layer */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-sky-400/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Bottom Banner with Fast Action */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-sky-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold block">
              Pronto para sentir a diferença desde a 1ª aula?
            </span>
            <h4 className="text-xl sm:text-2xl font-light text-white">
              Agende sua avaliação postural individual com Luciana Mayer.
            </h4>
          </div>

          <a
            href={LUNA_INFO.whatsappAvaliacaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-sky-50 text-slate-900 font-bold text-sm tracking-wide transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
          >
            <span>Consultar Horários Disponíveis</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </a>
        </div>

      </div>
    </section>
  );
}
