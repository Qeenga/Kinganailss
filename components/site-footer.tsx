import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { bookingUrl } from '@/lib/site';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/kinga_nails_art', mark: 'ig' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kinganailartist', mark: 'T' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1ASCRQYLDp/', mark: 'f' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <Link className="footer-brand" href="/">Kinga <em>Nails</em></Link>
        <p>Precíz kéz- és lábápolás, tartós technikák és nyugodt figyelem — hét éve Debrecenben.</p>
        <div className="social-row">
          {socials.map(({ label, href, mark }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <span className="tiktok-mark">{mark}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-column">
        <h2>Kapcsolat</h2>
        <a href="tel:+36705516212"><Phone aria-hidden="true" /> +36 70 551 6212</a>
        <a href="mailto:kinga.nailsart@gmail.com"><Mail aria-hidden="true" /> kinga.nailsart@gmail.com</a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=T%C3%B3c%C3%B3skert+t%C3%A9r+5%2C+Debrecen" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> 4026 Debrecen,<br />Tócóskert tér 5.</a>
      </div>
      <div className="footer-column">
        <h2>Nyitvatartás</h2>
        <p>Hétfő–Péntek<br /><strong>előzetes foglalás alapján</strong></p>
        <p>Szombat–Vasárnap<br /><strong>zárva</strong></p>
        <a className="footer-booking" href={bookingUrl} target="_blank" rel="noreferrer">Online időpontfoglalás →</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kinga Nails Art</span>
        <span>Debrecen · Tócóskert tér 5.</span>
      </div>
    </footer>
  );
}
