import type { Metadata } from 'next';
import { ScrollReveal } from '@/components/scroll-reveal';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kinga Nails | Körömstúdió Debrecen',
  description: 'Precíz manikűr, gél lakk és műköröm Debrecenben, hét év tapasztalattal. Online időpontfoglalás a Kinga Nails stúdióba.',
  metadataBase: new URL('https://debrecenmukorom.hu'),
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  name: 'Kinga Nails Art Debrecen',
  alternateName: 'Kinga Nails',
  url: 'https://debrecenmukorom.hu',
  telephone: '+36 70 551 6212',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tócóskert tér 5.',
    addressLocality: 'Debrecen',
    addressCountry: 'HU',
  },
  sameAs: [
    'https://www.instagram.com/kinga_nails_debrecen',
    'https://www.tiktok.com/@kinganailartist',
    'https://www.facebook.com/profile.php?id=100029819297219',
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
