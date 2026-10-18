'use client';

import Image from 'next/image';
import { Award, GraduationCap, Heart, CheckCircle, MessageCircle, Star, Sparkles } from 'lucide-react';
import { LUNA_INFO } from '@/data/lunaData';

export default function LucianaMayerSection() {
  const credentials = [
    {
      title: 'Graduação em Fisioterapia',
      issuer: 'Conselho Regional de Fisioterapia (CREFITO)',
      description: 'Especialização em anatomia, biomecânica clínica, tratamento de hérnias e alívio de dor articular.',
    },
    {
      title: 'Graduação em Educação Física',
      issuer: 'Conselho Regional de Educação Física (CREF)',
      description: 'Expertise em periodização de treinamento neuromuscular, condicionamento cardiovascular e ganho de força.',
    },
    {
      title: 'Certificação Avançada no Método Pilates',
      issuer: 'Cadillac, Reformer, Step Chair & Barrel',
      description: 'Domínio de repertório clássico e contemporâneo adaptado às necessidades e limitações de cada praticante.',
    },
    {
      title: 'Mais de 10 Anos de Studio Próprio',
      issuer: 'Studio Luna Pilates • Campo Grande - MS',
      description: 'Histórico comprovado de dezenas de alunas que treinam no studio de forma contínua por anos consecutivos.',
    },
  ];

  return (
    <section id="luciana-mayer" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography & Milestone Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-100 aspect-[4/5] bg-slate-100">
              <Image
                src="/assets/luna/luciana-mayer.jpg"
                alt="Luciana Mayer celebrando com aluna do Studio Luna Pilates"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Overlay Caption on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/90 text-slate-950 text-xs font-bold tracking-wider uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  +10 Anos de Dedicação
                </span>
                <p className="text-lg font-medium text-white leading-snug">
                  Luciana Mayer
                </p>
                <p className="text-xs text-sky-200">
                  Fisioterapeuta & Educadora Física • Fundadora
                </p>
              </div>
            </div>

            {/* Small floating badge with decorative plaque detail */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl border border-sky-100 max-w-xs items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                <Heart className="w-6 h-6 stroke-[2.2] text-rose-500 fill-rose-100" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  Atendimento Afetuoso
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                  Conhecida carinhosamente por alunas como a querida &quot;Lu&quot;.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Double Diploma Authority */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-sky-800 text-xs font-bold tracking-widest uppercase border border-sky-100">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>Responsável Técnica & Fundadora</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              A união rara entre o olhar clínico da{' '}
              <span className="font-editorial-serif italic font-normal text-sky-700">
                Fisioterapia
              </span>{' '}
              e a energia da{' '}
              <span className="font-editorial-serif italic font-normal text-sky-700">
                Educação Física.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              No Studio Luna Pilates, você não é apenas mais um número em uma sala lotada. Cada aluno é atendido sob a ótica minuciosa de <strong>Luciana Mayer</strong>, profissional que dedicou anos à dupla graduação para entender a fundo como reabilitar lesões e, simultaneamente, construir força real e tônus muscular duradouro.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Com mais de uma década de prática ininterrupta no Jardim Autonomista em Campo Grande, Luciana acompanha de perto quem tem medo de treinar por causa de hérnias de disco, desgastes articulares ou sedentarismo, transformando dor em liberdade de movimento.
            </p>

            {/* Technical Credentials List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4">
              {credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="rounded-2xl p-4 bg-slate-50 border border-slate-100 space-y-1 hover:border-sky-200 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 block">
                    {cred.issuer}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                    {cred.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct CTA to Talk to Lu */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={LUNA_INFO.whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Conversar com a Professora Luciana</span>
              </a>

              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 transition-colors"
              >
                <span>Ver Fotos do Studio</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
