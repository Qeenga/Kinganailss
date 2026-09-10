import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Munkáim | Kinga Nails',
  description: 'Kinga Nails valódi vendégmunkái és körömdizájnjai Debrecenből.',
  alternates: { canonical: 'https://debrecenmukorom.hu/munkaim' },
};

const workImages = [
  { number: 12, width: 640, height: 640 },
  { number: 1, width: 3024, height: 3024 },
  { number: 2, width: 3024, height: 3024 },
  { number: 3, width: 896, height: 896 },
  { number: 4, width: 360, height: 640 },
  { number: 6, width: 361, height: 640 },
  { number: 7, width: 361, height: 640 },
  { number: 8, width: 640, height: 640 },
  { number: 9, width: 640, height: 640 },
  { number: 10, width: 640, height: 640 },
  { number: 11, width: 640, height: 640 },
  { number: 13, width: 640, height: 640 },
  { number: 14, width: 361, height: 640 },
  { number: 15, width: 640, height: 640 },
  { number: 16, width: 640, height: 479 },
  { number: 17, width: 361, height: 640 },
  { number: 18, width: 361, height: 640 },
  { number: 19, width: 640, height: 479 },
  { number: 20, width: 640, height: 640 },
  { number: 21, width: 640, height: 479 },
  { number: 22, width: 640, height: 399 },
  { number: 23, width: 480, height: 640 },
  { number: 24, width: 640, height: 640 },
  { number: 25, width: 640, height: 640 },
  { number: 26, width: 640, height: 640 },
  { number: 27, width: 512, height: 640 },
  { number: 28, width: 640, height: 640 },
  { number: 29, width: 361, height: 640 },
  { number: 31, width: 2048, height: 2048 },
  { number: 32, width: 1536, height: 2048 },
  { number: 33, width: 2048, height: 1532 },
  { number: 34, width: 2048, height: 1532 },
  { number: 35, width: 1536, height: 2048 },
  { number: 36, width: 2048, height: 1532 },
  { number: 37, width: 1536, height: 2048 },
  { number: 38, width: 1536, height: 2048 },
  { number: 39, width: 1536, height: 2048 },
  { number: 40, width: 2048, height: 1532 },
  { number: 41, width: 1440, height: 899 },
  { number: 42, width: 2048, height: 2048 },
  { number: 43, width: 1440, height: 1440 },
  { number: 44, width: 1440, height: 1440 },
  { number: 45, width: 1440, height: 1440 },
];

const works = workImages.map(({ number, width, height }) => ({
  src: `/images/munkak/kinga-munka-${String(number).padStart(2, '0')}.jpg`,
  alt: `Kinga Nails körömdizájn – valódi vendégmunka ${number}`,
  width,
  height,
}));

export default function PortfolioPage() {
  return (
    <main className="inner-page portfolio-page">
      <section className="page-hero portfolio-hero">
        <div>
          <p className="section-kicker light">Munkáim</p>
          <h1>Minden köröm<br /><em>egyedi történet.</em></h1>
        </div>
        <p>43 valódi vendégmunka a visszafogott nude árnyalatoktól a karakteres, részletgazdag szettekig.</p>
      </section>

      <section className="portfolio-grid" aria-label="Kinga Nails valódi körömmunkái">
        {works.map((work, index) => (
          <figure key={work.src}>
            <Image
              src={work.src}
              alt={work.alt}
              width={work.width}
              height={work.height}
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
