import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, MapPin, Phone, Shield, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl } from '@/lib/site';

const services = [
  ['Manikűr', '6 000 Ft'],
  ['Erősített gél lakk', '10 000 Ft-tól'],
  ['Műköröm építés', '12 500 Ft-tól'],
  ['Láb gél lakk', '10 000 Ft'],
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
            <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} size="lg" className="gold-button">
              Időpontot foglalok <ArrowUpRight aria-hidden="true" />
            </Button>
            <Link className="text-link" href="/szolgaltatasok">Szolgáltatások és árak</Link>
          </div>
          <div className="hero-meta" aria-label="Stúdió információk">
            <div><strong>7</strong><span>év szakmai<br />tapasztalat</span></div>
            <div><strong>100%</strong><span>figyelem<br />minden vendégnek</span></div>
            <div><strong>Debrecen</strong><span>Tócóskert tér 5.</span></div>
          </div>
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

      <section className="story-section section-shell" aria-labelledby="story-title">
        <div className="story-image-frame reveal-image">
          <Image src="/images/kinga-real-03.jpg" alt="Kék nyári körömdizájn a Kinga Nails munkái közül" fill sizes="(max-width: 800px) 100vw, 42vw" />
          <span className="vertical-caption">KINGA NAILS ART · DEBRECEN</span>
        </div>
        <div className="story-copy">
          <p className="section-kicker">Rólam & a stúdióról</p>
          <h2 id="story-title">Szia, Kinga vagyok.</h2>
          <p className="story-lead">A körmöd számomra nem futószalagos munka, hanem aprólékos alkotás, amelyben a forma, a tartósság és a személyiséged találkozik.</p>
          <div className="story-columns">
            <p>Hét éve dolgozom kéz- és lábápolóként, műkörömépítőként. A Tócóskert tér 5. szám alatti stúdióban egy nyugodt, személyes alkalomra várlak, ahol nem kell sietned.</p>
            <p>A minőség nálam minden esetben elsőbbséget élvez. Egyedi igényeidet közösen hangoljuk össze a körmöd állapotával és a biztonságos, tartós technikával.</p>
          </div>
          <ul className="promise-list">
            <li><Check aria-hidden="true" /> Precíz előkészítés és tiszta munka</li>
            <li><Check aria-hidden="true" /> Egyéni forma- és színválasztás</li>
            <li><Check aria-hidden="true" /> Nyugodt, rád szánt idő</li>
          </ul>
        </div>
      </section>

      <section className="hygiene-section" aria-labelledby="hygiene-title">
        <div className="section-shell hygiene-heading">
          <p className="section-kicker light">Ami nem látszik, mégis számít</p>
          <h2 id="hygiene-title">Tiszta eszköz.<br /><em>Tiszta figyelem.</em></h2>
          <p>Az igényes végeredmény a biztonságos munkakörnél kezdődik. Minden vendég között szigorú higiéniai protokoll szerint készülök elő.</p>
        </div>
        <div className="section-shell hygiene-grid">
          <article><span>01</span><Shield aria-hidden="true" /><h3>Magas hőfokú sterilizálás</h3><p>A fém eszközök magas hőmérsékletű sterilizáláson mennek keresztül minden használat után.</p></article>
          <article><span>02</span><Sparkles aria-hidden="true" /><h3>Orvosi tisztaságú fertőtlenítés</h3><p>Speciális, professzionális fertőtlenítő folyadékokat használok a felületeken és az előkészítés során.</p></article>
          <article><span>03</span><Check aria-hidden="true" /><h3>Gondos előkészítés</h3><p>Tiszta munkafelület, rendezett eszközök és minden részletre kiterjedő figyelem fogad.</p></article>
        </div>
      </section>

      <section className="services-preview section-shell" aria-labelledby="services-title">
        <div className="section-heading-row">
          <div><p className="section-kicker">Szolgáltatások</p><h2 id="services-title">A kezedhez<br /><em>hangolva.</em></h2></div>
          <p>Letisztult árazás, gondosan megtervezett időkeretek. Az aktuális időpontokat a Minup foglalási rendszerben látod.</p>
        </div>
        <div className="service-list">
          {services.map(([name, price], index) => (
            <Link key={name} href="/szolgaltatasok" className="service-row">
              <span className="service-number">0{index + 1}</span>
              <h3>{name}</h3>
              <span className="service-dots" />
              <strong>{price}</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="section-end-link"><Link className="text-link" href="/szolgaltatasok">Teljes árlista és részletek</Link></div>
      </section>

      <section className="gallery-preview" aria-labelledby="gallery-title">
        <div className="section-shell gallery-heading">
          <div><p className="section-kicker light">Stílusválogatás</p><h2 id="gallery-title">Finom részletek.<br /><em>Karakteres összhatás.</em></h2></div>
          <Link className="light-link" href="/munkaim">Munkáim megtekintése <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="gallery-strip">
          <figure className="gallery-tall"><Image src="/images/kinga-real-01.jpg" alt="Rózsaszín ombré francia köröm kristálydísszel" fill sizes="38vw" /><figcaption>Pink French · 01</figcaption></figure>
          <figure><Image src="/images/kinga-real-03.jpg" alt="Kék nyári körömdizájn részletgazdag díszítéssel" fill sizes="32vw" /><figcaption>Ocean blue · 02</figcaption></figure>
          <figure><Image src="/images/kinga-real-02.jpg" alt="Rózsaszín francia manikűr elegáns kéztartásban" fill sizes="32vw" /><figcaption>Soft pink · 03</figcaption></figure>
        </div>
      </section>

      <section className="reviews-section section-shell" aria-labelledby="reviews-title">
        <div className="reviews-copy">
          <p className="section-kicker">Google értékelések</p>
          <h2 id="reviews-title">A vendégeim<br /><em>bizalma a legfontosabb.</em></h2>
          <div className="rating-lockup">
            <strong>5,0</strong>
            <div><span aria-label="5 csillag"><Star /><Star /><Star /><Star /><Star /></span><p>28 nyilvános értékelés alapján</p></div>
          </div>
          <p>Az élő Google-térképes adatlapon mindig a legfrissebb értékeléseket, fényképeket és útvonal-információkat láthatod.</p>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Kinga+Nails+Art+Debrecen+T%C3%B3c%C3%B3skert+t%C3%A9r+5" target="_blank" rel="noreferrer">Megnyitás a Google Térképen</a>
        </div>
        <div className="live-map-card">
          <span className="live-badge"><i /> Élő Google-profil</span>
          <iframe title="Kinga Nails Art a Google Térképen" src="https://maps.google.com/maps?q=Kinga%20Nails%20Art%20Debrecen%20T%C3%B3c%C3%B3skert%20t%C3%A9r%205&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section className="contact-banner" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker light">Készen állsz az első lépésre?</p>
          <h2 id="contact-title">Foglalj időpontot,<br /><em>a többit bízd rám.</em></h2>
        </div>
        <div className="contact-actions">
          <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} className="cream-button">Online időpontfoglalás <ArrowUpRight /></Button>
          <a href="tel:+36705516212"><Phone aria-hidden="true" /> Ingyenes telefonos egyeztetés<br /><strong>+36 70 551 6212</strong></a>
          <a href="mailto:kinga.nailsart@gmail.com">kinga.nailsart@gmail.com</a>
        </div>
        <span className="banner-address"><MapPin aria-hidden="true" /> Debrecen · Tócóskert tér 5.</span>
      </section>
    </main>
  );
}
