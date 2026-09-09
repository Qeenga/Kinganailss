'use client';

import Link from 'next/link';
import { CalendarDays, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { bookingUrl } from '@/lib/site';

const navItems = [
  ['Főoldal', '/'],
  ['Szolgáltatások', '/szolgaltatasok'],
  ['Munkáim', '/munkaim'],
  ['Blog', '/blog'],
  ['Kapcsolat', '/kapcsolat'],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Kinga Nails kezdőlap">
        <span>Kinga</span>
        <span className="brand-script">Nails</span>
      </Link>

      <nav className="desktop-nav" aria-label="Fő navigáció">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>

      <div className="header-actions">
        <a className="phone-link" href="tel:+36705516212">
          <Phone aria-hidden="true" size={16} />
          <span>+36 70 551 6212</span>
        </a>
        <Button
          render={<a href={bookingUrl} target="_blank" rel="noreferrer" />}
          nativeButton={false}
          className="gold-button header-booking"
        >
          Időpontfoglalás
        </Button>

        <Sheet>
          <SheetTrigger className="mobile-menu-button" aria-label="Menü megnyitása">
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader className="mobile-sheet-header">
              <SheetTitle><span className="brand">Kinga <span className="brand-script">Nails</span></span></SheetTitle>
              <SheetDescription>Professzionális körömstúdió Debrecenben</SheetDescription>
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Mobil navigáció">
              {navItems.map(([label, href], index) => (
                <SheetClose key={href} render={<Link href={href} />}>
                  <span>0{index + 1}</span>{label}
                </SheetClose>
              ))}
            </nav>
            <div className="mobile-sheet-footer">
              <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} nativeButton={false} className="gold-button">
                <CalendarDays aria-hidden="true" /> Időpontot foglalok
              </Button>
              <a href="tel:+36705516212"><Phone aria-hidden="true" /> +36 70 551 6212</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
