import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Munkáim | Kinga Nails',
  description: 'Kinga Nails stílusválogatás és friss körömdizájnok Instagramon és TikTokon.',
};

const tiles = [
  { src: '/images/kinga-real-01.jpg', alt: 'Rózsaszín ombré francia köröm kristálydísszel', label: 'Pink French', className: 'portfolio-tall' },
  { src: '/images/kinga-real-03.jpg', alt: 'Kék nyári körömdizájn részletgazdag díszítéssel', label: 'Ocean blue', className: 'portfolio-wide' },
  { src: '/images/kinga-real-02.jpg', alt: 'Rózsaszín francia manikűr elegáns kéztartásban', label: 'Soft pink', className: '' },
  { src: '/images/kinga-real-01.jpg', alt: 'Kristálydíszes rózsaszín köröm közelről', label: 'Crystal detail', className: 'portfolio-crop-left' },
  { src: '/images/kinga-real-03.jpg', alt: 'Kék nyári körömdizájn közelről', label: 'Summer detail', className: 'portfolio-crop-detail' },
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
          <Image src="/images/kinga-real-02.jpg" alt="Kinga Nails köröminspirációk a TikTokon" fill sizes="(max-width: 760px) 100vw, 50vw" />
          <span className="play-button"><Play aria-hidden="true" fill="currentColor" /></span>
          <div><small>Videós munkák</small><strong>TikTokon tovább <ArrowUpRight /></strong></div>
        </a>
      </section>

      <section className="social-portfolio-note">
        <span className="social-big-mark" aria-hidden="true">ig</span>
        <div><p className="section-kicker">Friss munkák, valódi vendégek</p><h2>A legújabb szetteket az Instagramon találod.</h2></div>
        <a href="https://www.instagram.com/kinga_nails_debrecen" target="_blank" rel="noreferrer">@kinga_nails_debrecen <ArrowUpRight /></a>
      </section>
    </main>
  );
}
