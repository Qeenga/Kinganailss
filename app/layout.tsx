import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kinga Nails | Körömstúdió Debrecen',
  description: 'Precíz manikűr, gél lakk és műköröm Debrecenben, hét év tapasztalattal. Online időpontfoglalás a Kinga Nails stúdióba.',
  metadataBase: new URL('https://kinga-nails-debrecen.poliprofil414971.chatgpt.site'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
