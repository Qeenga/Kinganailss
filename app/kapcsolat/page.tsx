import type { Metadata } from 'next';
import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl, contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kapcsolat | Kinga Nails',
  description: 'Kinga Nails elérhetőségek, nyitvatartás, online foglalás és útvonaltervezés a debreceni Tócóskert tér 5. címre.',
  alternates: { canonical: 'https://debrecenmukorom.hu/kapcsolat' },
};

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <section className="contact-layout">
        <div className="contact-panel">
          <p className="section-kicker light">Kapcsolat</p>
          <h1>Találkozzunk<br /><em>Debrecenben.</em></h1>
          <p className="contact-intro">Foglalj kényelmesen online, kérdés esetén pedig keress telefonon.</p>

          <div className="contact-details">
            <a href={contact.phoneHref}><Phone aria-hidden="true" /><span><small>Telefon</small><strong>{contact.phoneDisplay}</strong></span></a>
            <a href={contact.directionsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span><small>Cím</small><strong>{contact.address}</strong><em>Xnails szépségszalon, a Coop felőli bejárat</em></span></a>
            <div><Clock aria-hidden="true" /><span><small>Nyitvatartás</small><strong>Hétfő–Péntek</strong><em>előzetes foglalás alapján</em><strong>Szombat–Vasárnap: zárva</strong></span></div>
          </div>

          <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} nativeButton={false} className="cream-button contact-booking">
            Időpontfoglalás a Minupon <ArrowUpRight aria-hidden="true" />
          </Button>

          <div className="contact-socials">
            <a href="https://www.instagram.com/kinga_nails_debrecen" target="_blank" rel="noreferrer"><span className="tiktok-mark">ig</span> Instagram</a>
            <a href="https://www.tiktok.com/@kinganailartist" target="_blank" rel="noreferrer"><span className="tiktok-mark">T</span> TikTok</a>
            <a href="https://www.facebook.com/profile.php?id=100029819297219" target="_blank" rel="noreferrer"><span className="tiktok-mark">f</span> Facebook</a>
          </div>
        </div>

        <div className="map-panel">
          <iframe
            title="Kinga Nails Art Debrecen helye a Google Térképen"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.5951551377784!2d21.602380099999998!3d47.517275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47470f93fe35d63b%3A0x814f61e4dc5f699a!2sKinga%20Nails%20Art%20Debrecen!5e0!3m2!1shu!2shu!4v1789033682405!5m2!1shu!2shu"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-card">
            <span>4026 Debrecen · Tócóskert tér 5.</span>
            <h2>Kinga Nails Art Debrecen</h2>
            <p>Xnails szépségszalon<br />a Coop felőli bejárat</p>
            <a href={contact.directionsUrl} target="_blank" rel="noreferrer">Útvonaltervezés <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
