import Image from 'next/image';
import { ArrowUpRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl, googleReviewsUrl } from '@/lib/site';

const reviews = [
  { name: 'Erika Nagy', text: '„Remek szakember, precíz.”' },
  { name: 'Csenge', text: '„Mindig olyan körmökkel távozok, amivel nagyon elégedett vagyok!”' },
  { name: 'Várközi Alexandra', text: '„A körmeim mindig gyönyörűek és tartósak.”' },
];

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
            <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} nativeButton={false} size="lg" className="gold-button">
              Időpontot foglalok <ArrowUpRight aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              src="/images/munkak/kinga-munka-02.jpg"
              alt="Elegáns, halvány rózsaszín francia köröm strasszköves részlettel, Kinga Nails munka"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 52vw"
              style={{ objectPosition: 'center center' }}
            />
          </div>
          <div className="hero-note">
            <span className="note-monogram">KN</span>
            <p><strong>Személyre szabott forma.</strong><br />Finom részletek, tartós technika.</p>
          </div>
          <span className="hero-issue">EST. 2019 · DEBRECEN</span>
        </div>
      </section>

      <section className="story-section section-shell" aria-labelledby="quality-title">
        <div className="story-image-frame">
          <Image
            src="/images/munkak/kinga-munka-03.jpg"
            alt="Kék, kézzel festett kagylómintás köröm a Kinga Nails stúdióból"
            fill
            sizes="(max-width: 900px) 84vw, 38vw"
          />
          <span className="vertical-caption">EGYEDI RÉSZLETEK · KINGA NAILS ART</span>
        </div>
        <div className="story-copy">
          <p className="section-kicker">Kinga Nails Art</p>
          <h2 id="quality-title">Profi munka,<br /><em>ami rólad szól.</em></h2>
          <p className="story-lead">A szép köröm nemcsak szín és forma: pontos előkészítés, arányos felépítés és az életmódodhoz illő, viselhető végeredmény.</p>
          <div className="story-columns">
            <p>Hét év szakmai tapasztalattal minden szettet gondos állapotfelmérés és személyes egyeztetés előz meg.</p>
            <p>A debreceni stúdióban nyugodt figyelem, tiszta munkakörnyezet és igényes, tartós technikák várnak.</p>
          </div>
          <ul className="promise-list">
            <li><Check aria-hidden="true" /> Precíz forma és tiszta kivitelezés</li>
            <li><Check aria-hidden="true" /> Magas hőfokú eszközsterilizálás</li>
            <li><Check aria-hidden="true" /> Professzionális, speciális fertőtlenítőszerek</li>
          </ul>
        </div>
      </section>

      <section className="reviews-section section-shell" aria-labelledby="reviews-title">
        <div className="reviews-copy">
          <p className="section-kicker">Vendégvélemények</p>
          <h2 id="reviews-title">Bizalom, ami<br /><em>látható.</em></h2>
          <div className="rating-lockup">
            <strong>5,0</strong>
            <div>
              <span aria-label="5 csillag">{Array.from({ length: 5 }).map((_, index) => <Star key={index} aria-hidden="true" />)}</span>
              <p>34 Google-vélemény alapján</p>
            </div>
          </div>
          <p>A Google-on közzétett vendégértékelésekből válogatva.</p>
          <a className="text-link" href={googleReviewsUrl} target="_blank" rel="noreferrer">Összes vélemény a Google-on</a>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <span className="review-stars" aria-hidden="true">★★★★★</span>
              <blockquote>{review.text}</blockquote>
              <footer>{review.name}<small>Google-vélemény</small></footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
