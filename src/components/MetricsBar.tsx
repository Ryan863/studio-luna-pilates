'use client';

import { GraduationCap, Users, Dumbbell, MapPin, Sparkles } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      icon: GraduationCap,
      label: 'DUPLA FORMAÇÃO SUPERIOR',
      title: 'Fisioterapeuta & Educadora Física',
      description: 'Reabilitação clínica minuciosa combinada ao condicionamento físico sem clichês.',
    },
    {
      icon: Users,
      label: 'TURMAS REDUZIDAS',
      title: 'Atenção Quase Personal',
      description: 'Poucos alunos por horário para ajuste fino de cada postura e segurança total.',
    },
    {
      icon: Dumbbell,
      label: 'APARELHOS MODERNOS',
      title: 'Cadillac, Reformer & Barrel',
      description: 'Molas alemãs calibradas, estofamento ergonômico e manutenção constante.',
    },
    {
      icon: MapPin,
      label: 'JARDIM AUTONOMISTA',
      title: 'Fácil Estacionamento & Conforto',
      description: 'Rua arborizada e tranquila, ambiente 100% climatizado e acolhedor.',
    },
  ];

  return (
    <section id="diferenciais" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-sky-100 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col items-start ${
                  index > 0 ? 'lg:pl-6 pt-6 lg:pt-0' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest text-sky-800 uppercase">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
