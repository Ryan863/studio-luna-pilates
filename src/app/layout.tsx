import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://studiolunapilates.com.br'),
  title: 'Studio Luna Pilates | Fisioterapia, Reabilitação e Força em Campo Grande - MS',
  description:
    'A precisão da fisioterapia e a força do pilates em Campo Grande - MS. Aulas quase personal com turmas reduzidas no Jardim Autonomista conduzidas por Luciana Mayer (Fisioterapeuta e Educadora Física). Alívio de dores, postura e condicionamento funcional.',
  keywords: [
    'Pilates Campo Grande MS',
    'Studio Luna Pilates',
    'Luciana Mayer Pilates',
    'Pilates Jardim Autonomista',
    'Fisioterapia e Pilates Campo Grande',
    'Pilates para dor na coluna',
    'Pilates clínico Campo Grande',
    'Reformer Cadillac Campo Grande',
  ],
  authors: [{ name: 'Luciana Mayer' }, { name: 'Studio Luna Pilates' }],
  openGraph: {
    title: 'Studio Luna Pilates | A Precisão da Fisioterapia. A Força do Pilates.',
    description:
      'Turmas reduzidas, ambiente aconchegante e climatizado no Jardim Autonomista. Conduzido por profissional com dupla formação em Fisioterapia e Educação Física. Agende sua aula experimental.',
    url: 'https://studiolunapilates.com.br',
    siteName: 'Studio Luna Pilates',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/assets/luna/hero-studio.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Luna Pilates Campo Grande MS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Luna Pilates | Campo Grande - MS',
    description: 'Fisioterapia e Pilates de Alta Performance com Luciana Mayer no Jardim Autonomista.',
    images: ['/assets/luna/hero-studio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['SportsActivityLocation', 'HealthAndBeautyBusiness'],
    name: 'Studio Luna Pilates',
    image: '/assets/luna/hero-studio.jpg',
    url: 'https://studiolunapilates.com.br',
    telephone: '+556792815397',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Hermelita de Oliveira Gomes, 1148',
      addressLocality: 'Campo Grande',
      addressRegion: 'MS',
      postalCode: '79021-270',
      addressCountry: 'BR',
      neighborhood: 'Jardim Autonomista',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -20.4475928,
      longitude: -54.5900882,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '06:00',
        closes: '11:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:00',
        closes: '20:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '26',
    },
    priceRange: '$$',
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#F8FAFC] text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
