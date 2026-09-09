import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Munkáim | Kinga Nails',
  description: 'Kinga Nails stílusválogatás és friss körömdizájnok Instagramon és TikTokon.',
};

const tiles = [
  { src: '/images/gallery-nude-gold.png', alt: 'Tejes nude körmök finom arany vonalakkal', label: 'Soft gold', className: 'portfolio-tall' },
  { src: '/images/gallery-burgundy.png', alt: 'Mélybordó körmök arany fóliadísszel', label: 'Velvet wine', className: 'portfolio-wide' },
  { src: '/images/hero-manicure.png', alt: 'Natúr manikűr készítés közben', label: 'Nude ritual', className: '' },
  { src: '/images/gallery-burgundy.png', alt: 'Bordó manikűr elegáns részletekkel', label: 'After dark', className: 'portfolio-crop-left' },
  { src: '/images/gallery-nude-gold.png', alt: 'Finom gyöngydíszes natúr köröm', label: 'Pearl line', className: 'portfolio-crop-detail' },
];

export default function PortfolioPage() {
  return (
    <main className="inner-page portfolio-page">
      <section className="page-hero portfolio-hero">
        <div>
          <p className="section-kicker light">Munkáim</p>
          <h1>Minden köröm<br /><em>egyedi történet.</em></h1>
        </div>
        <p>A visszafogott nude árnyalatoktól a karakteres, mély tónusokig: olyan formát és részletet keresünk, amely igazán hozzád illik.</p>
      </section>

      <section className="portfolio-grid" aria-label="Köröm stílusgaléria">
        {tiles.map((tile, index) => (
          <figure key={`${tile.label}-${index}`} className={tile.className}>
            <Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
            <figcaption><span>0{index + 1}</span>{tile.label}</figcaption>
          </figure>
        ))}
        <a className="video-tile" href="https://www.tiktok.com/@kinganailartist" target="_blank" rel="noreferrer">
          <Image src="/images/hero-manicure.png" alt="Videós köröminspirációk a TikTokon" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="play-button"><Play aria-hidden="true" fill="currentColor" /></span>
          <div><small>Videós munkák</small><strong>TikTokon tovább <ArrowUpRight /></strong></div>
        </a>
      </section>

      <section className="social-portfolio-note">
        <span className="social-big-mark" aria-hidden="true">ig</span>
        <div><p className="section-kicker">Friss munkák, valódi vendégek</p><h2>A legújabb szetteket az Instagramon találod.</h2></div>
        <a href="https://www.instagram.com/kinga_nails_art" target="_blank" rel="noreferrer">@kinga_nails_art <ArrowUpRight /></a>
      </section>
    </main>
  );
}
