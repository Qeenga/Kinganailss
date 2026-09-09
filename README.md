# Kinga Nails Art Debrecen

A Kinga Nails Art hivatalos, magyar nyelvű weboldalának forráskódja.

Élő weboldal: https://kinga-nails-debrecen.poliprofil414971.chatgpt.site

## Helyi megnyitás

Szükséges hozzá a Node.js és a pnpm csomagkezelő.

```bash
pnpm install
pnpm dev
```

Ezután az oldal a `http://localhost:3000` címen nyitható meg.

## Hol módosítható a tartalom?

- Főoldal: `app/page.tsx`
- Szolgáltatások és árak: `app/szolgaltatasok/page.tsx`
- Munkáim galéria: `app/munkaim/page.tsx`
- Blogcikkek: `app/blog/page.tsx`
- Kapcsolat és térkép: `app/kapcsolat/page.tsx`
- Fejléc: `components/site-header.tsx`
- Lábléc: `components/site-footer.tsx`
- Telefonszám, cím és foglalási link: `lib/site.ts`
- Képek: `public/images`
- Megjelenés és színek: `app/globals.css`

## Ellenőrzés

Közzététel előtt futtasd:

```bash
pnpm build
```

## Saját domain

A saját domain a tárhelyhez DNS-beállításokkal kapcsolható. A domain megvásárlása után a tárhely által megadott rekordokat kell a domain regisztrátoránál rögzíteni. A weboldal kódja ezután is ugyanígy módosítható marad.
