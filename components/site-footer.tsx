import { MapPin, Phone } from 'lucide-react';
import { bookingUrl, contact } from '@/lib/site';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/kinga_nails_debrecen', mark: 'ig' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@kinganailartist', mark: 'T' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100029819297219', mark: 'f' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <div className="footer-brand">Kinga <em>Nails</em></div>
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
        <a href={contact.phoneHref}><Phone aria-hidden="true" /> {contact.phoneDisplay}</a>
        <a href={contact.directionsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> 4026 Debrecen,<br />Tócóskert tér 5.</a>
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
