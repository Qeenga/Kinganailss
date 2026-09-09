import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Munkáim | Kinga Nails',
  description: 'Kinga Nails valódi vendégmunkái és körömdizájnjai Debrecenből.',
};

const works = Array.from({ length: 45 }, (_, index) => ({
  src: `/images/munkak/kinga-munka-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `Kinga Nails körömdizájn – valódi vendégmunka ${index + 1}`,
}));

export default function PortfolioPage() {
  return (
    <main className="inner-page portfolio-page">
      <section className="page-hero portfolio-hero">
        <div>
          <p className="section-kicker light">Munkáim</p>
          <h1>Minden köröm<br /><em>egyedi történet.</em></h1>
        </div>
        <p>45 valódi vendégmunka a visszafogott nude árnyalatoktól a karakteres, részletgazdag szettekig.</p>
      </section>

      <section className="portfolio-grid" aria-label="Kinga Nails valódi körömmunkái">
        {works.map((work, index) => (
          <figure key={work.src}>
            <Image
              src={work.src}
              alt={work.alt}
              fill
              priority={index < 6}
              sizes="(max-width: 760px) 50vw, (max-width: 1100px) 50vw, 33vw"
            />
          </figure>
        ))}
      </section>

      <section className="social-portfolio-note">
        <span className="social-big-mark" aria-hidden="true">ig</span>
        <div><p className="section-kicker">Friss munkák, valódi vendégek</p><h2>A legújabb szetteket az Instagramon találod.</h2></div>
        <a href="https://www.instagram.com/kinga_nails_debrecen" target="_blank" rel="noreferrer">@kinga_nails_debrecen <ArrowUpRight /></a>
      </section>
    </main>
  );
}
