import type { Metadata } from 'next';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl, contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kapcsolat | Kinga Nails',
  description: 'Kinga Nails elérhetőségek, nyitvatartás, online foglalás és útvonaltervezés a debreceni Tócóskert tér 5. címre.',
};

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <section className="contact-layout">
        <div className="contact-panel">
          <p className="section-kicker light">Kapcsolat</p>
          <h1>Találkozzunk<br /><em>Debrecenben.</em></h1>
          <p className="contact-intro">Időpontfoglalás online, kérdés esetén telefonon vagy e-mailben is elérsz.</p>

          <div className="contact-details">
            <a href={contact.phoneHref}><Phone aria-hidden="true" /><span><small>Telefon</small><strong>{contact.phoneDisplay}</strong></span></a>
            <a href={`mailto:${contact.email}`}><Mail aria-hidden="true" /><span><small>E-mail</small><strong>{contact.email}</strong></span></a>
            <a href={contact.directionsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><small>Cím</small><strong>{contact.address}</strong><em>Xnails szépségszalon, a Coop felőli bejárat</em></span></a>
            <div><Clock aria-hidden="true" /><span><small>Nyitvatartás</small><strong>Hétfő–Péntek</strong><em>előzetes foglalás alapján</em><strong>Szombat–Vasárnap: zárva</strong></span></div>
          </div>

          <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} className="cream-button contact-booking">
            Időpontfoglalás a Minupon <ArrowUpRight aria-hidden="true" />
          </Button>

          <div className="contact-socials">
            <a href="https://www.instagram.com/kinga_nails_art" target="_blank" rel="noreferrer"><span className="tiktok-mark">ig</span> Instagram</a>
            <a href="https://www.tiktok.com/@kinganailartist" target="_blank" rel="noreferrer"><span className="tiktok-mark">T</span> TikTok</a>
            <a href="https://www.facebook.com/share/1ASCRQYLDp/" target="_blank" rel="noreferrer"><span className="tiktok-mark">f</span> Facebook</a>
          </div>
        </div>

        <div className="map-panel">
          <iframe title="Kinga Nails Art helye a Google Térképen" src="https://maps.google.com/maps?q=Kinga%20Nails%20Art%20Debrecen%20T%C3%B3c%C3%B3skert%20t%C3%A9r%205&t=&z=16&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-card">
            <span>4026 Debrecen</span>
            <h2>Tócóskert tér 5.</h2>
            <p>Xnails szépségszalon<br />a Coop felőli bejárat</p>
            <a href={contact.directionsUrl} target="_blank" rel="noreferrer">Útvonaltervezés <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
