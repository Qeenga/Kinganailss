import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl } from '@/lib/site';

export default function Home() {
  return (
    <main>
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
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              src="/images/kinga-portrait.jpg"
              alt="Kinga, a Kinga Nails körömstúdió alapítója"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              style={{ objectPosition: '35% center' }}
            />
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
