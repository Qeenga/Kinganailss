import type { Metadata } from 'next';
import { ArrowUpRight, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Szolgáltatások és árak | Kinga Nails',
  description: 'Manikűr, erősített gél lakk, műköröm építés és láb gél lakk aktuális árakkal Debrecenben.',
};

const groups = [
  {
    number: '01',
    title: 'Manikűr & eltávolítás',
    intro: 'Gondos alapápolás és biztonságos anyageltávolítás a természetes köröm védelmével.',
    items: [
      { name: 'Manikűr', detail: 'Bőrápolás, körömfelület-tisztítás és kondicionálás', time: '30 perc', price: '6 000 Ft' },
      { name: 'Anyageltávolítás', detail: 'Korábbi anyag kíméletes eltávolítása, alap manikűrrel', time: '45 perc', price: '8 500 Ft' },
    ],
  },
  {
    number: '02',
    title: 'Erősített gél lakk',
    intro: 'Tartós, rugalmas megerősítés a természetes körmön, precíz színfedéssel.',
    items: [
      { name: 'S méret · ujjbegyig', detail: 'Erősített gél lakk, egyszínű alapcsomag', time: '1 óra 45 perc', price: '10 000 Ft' },
      { name: 'M méret · ujjbegynél hosszabb', detail: 'Erősített gél lakk hosszabb természetes körömre', time: '1 óra 45 perc', price: '10 500 Ft' },
    ],
  },
  {
    number: '03',
    title: 'Műköröm építés',
    intro: 'Személyre szabott hossz és forma, gondos statikai kialakítással és színnel.',
    items: [
      { name: 'Építés · S', detail: 'Rövid, kényelmes hossz', time: '2 óra', price: '12 500 Ft' },
      { name: 'Építés · M', detail: 'Közepes, elegáns hossz', time: '1 óra 55 perc', price: '13 500 Ft' },
      { name: 'Építés · L', detail: 'Hosszabb, karakteres forma', time: '2 óra 5 perc', price: '14 500 Ft' },
    ],
  },
  {
    number: '04',
    title: 'Műköröm töltés',
    intro: 'A lenövés korrigálása és a forma újraegyensúlyozása legfeljebb háromhetes körmön.',
    items: [
      { name: 'Töltés · S', detail: 'Rövid köröm töltése', time: '1 óra 55 perc', price: '12 000 Ft' },
      { name: 'Töltés · M', detail: 'Közepes köröm töltése', time: '2 óra 5 perc', price: '13 000 Ft' },
      { name: 'Töltés · L', detail: 'Hosszú köröm töltése', time: '2 óra 10 perc', price: '14 000 Ft' },
    ],
  },
  {
    number: '05',
    title: 'Láb gél lakk',
    intro: 'Esztétikus, tartós gél lakkozás a lábkörmökön, alapos előkészítéssel.',
    items: [
      { name: 'Láb gél lakk', detail: 'Előkészítés és tartós egyszínű lakkozás', time: '1 óra 30 perc', price: '10 000 Ft' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero services-page-hero">
        <p className="section-kicker">Szolgáltatásaim</p>
        <h1>Gondos technika.<br /><em>Átlátható árak.</em></h1>
        <p>Minden alkalom a körmöd állapotának felmérésével és a kívánt forma egyeztetésével indul. Az árak az alapszolgáltatásra vonatkoznak.</p>
        <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} nativeButton={false} className="gold-button">
          Szabad időpontok <ArrowUpRight aria-hidden="true" />
        </Button>
      </section>

      <section className="pricing-shell" aria-label="Szolgáltatások és árak">
        {groups.map((group) => (
          <article className="price-group" key={group.number}>
            <header>
              <span>{group.number}</span>
              <div><h2>{group.title}</h2><p>{group.intro}</p></div>
            </header>
            <div className="price-items">
              {group.items.map((item) => (
                <div className="price-item" key={item.name}>
                  <div><h3>{item.name}</h3><p>{item.detail}</p></div>
                  <span className="price-time"><Clock aria-hidden="true" /> {item.time}</span>
                  <strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
        <div className="price-note">
          <Info aria-hidden="true" />
          <p><strong>Fontos tudnivaló:</strong> díszítés, túlhordás, sérült köröm javítása vagy extra anyageltávolítás esetén a végösszeg változhat. A foglaláskor jelöld a kért díszítést; az aktuális, részletes ár mindig a Minup rendszerben látható.</p>
        </div>
      </section>

      <section className="slim-cta">
        <p>Nem tudod, melyik szolgáltatást válaszd?</p>
        <h2>Hívj, és segítek.</h2>
        <a href="tel:+36705516212">+36 70 551 6212 <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
