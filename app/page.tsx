import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl } from '@/lib/site';

const pageLinks = [
  { index: '01', label: 'Szolgáltatások és árak', href: '/szolgaltatasok' },
  { index: '02', label: 'Munkáim', href: '/munkaim' },
  { index: '03', label: 'Blog', href: '/blog' },
  { index: '04', label: 'Kapcsolat', href: '/kapcsolat' },
];

export default function Home() {
  return (
    <main className="click-home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Professzionális körömstúdió · Debrecen</p>
          <h1 id="hero-title">A részletekben<br />rejlik a <em>szépség.</em></h1>
          <p className="hero-intro">
            Precíz, elegáns körmök nyugodt környezetben. Hét év tapasztalat,
            gondos előkészítés és kompromisszumok nélküli higiénia.
          </p>

          <div className="hero-cta-row">
            <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} size="lg" className="gold-button">
              Időpontot foglalok <ArrowUpRight aria-hidden="true" />
            </Button>
          </div>

          <nav className="home-click-nav" aria-label="Oldalak">
            <p>Kattints a folytatáshoz</p>
            <div>
              {pageLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span>{item.index}</span>
                  <strong>{item.label}</strong>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image src="/images/kinga-real-01.jpg" alt="Kinga Nails rózsaszín ombré francia körömszettje kristálydísszel" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
          </div>
          <div className="hero-note">
            <span className="note-monogram">KN</span>
            <p><strong>Precizitás.</strong><br />Tisztaság. Nyugalom.</p>
          </div>
          <span className="hero-issue">EST. 2019 · DEBRECEN</span>
        </div>
      </section>
    </main>
  );
}
