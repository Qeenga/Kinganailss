import type { Metadata } from 'next';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookingUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Szolgáltatások | Kinga Nails',
  description: 'Manikűr, anyageltávolítás, erősített gél lakk, műköröm építés, töltés és láb gél lakk Debrecenben.',
  alternates: { canonical: 'https://debrecenmukorom.hu/szolgaltatasok' },
};

const services = [
  {
    number: '01',
    title: 'Manikűr',
    intro: 'Ápolt, rendezett természetes körmök, gondosan kialakított formával.',
    description: 'A kezelés a kéz és a természetes körmök állapotának felmérésével kezdődik. A cél az egészséges, tiszta és esztétikus megjelenés, anyag felhelyezése nélkül.',
    includes: [
      'A körmök hosszának és formájának igazítása',
      'A köröm körüli bőr és a körömsánc precíz tisztítása',
      'A körömfelület kíméletes rendezése',
      'Bőr- és körömápolás a kezelés befejezéseként',
    ],
    bookingLabel: 'Manikűr foglalása',
  },
  {
    number: '02',
    title: 'Anyageltávolítás',
    intro: 'A korábban viselt gél lakk vagy műköröm szakszerű eltávolítása.',
    description: 'Az anyagot fokozatosan, a természetes köröm állapotához igazodva távolítom el. A kezelés után a körmök rendezett, ápolt állapotban maradnak.',
    includes: [
      'A meglévő anyag és a természetes köröm ellenőrzése',
      'A régi anyag kíméletes visszavétele és eltávolítása',
      'A természetes köröm hosszának és formájának rendezése',
      'Alap manikűr és befejező ápolás',
    ],
    bookingLabel: 'Anyageltávolítás foglalása',
  },
  {
    number: '03',
    title: 'Erősített gél lakk',
    intro: 'Tartós, mégis természetes hatású megerősítés a saját körmön.',
    description: 'A rugalmas megerősítés segít megtartani a természetes köröm formáját, miközben egységes, fényes felületet ad. A kialakítást minden esetben a köröm hosszához és adottságaihoz igazítom.',
    includes: [
      'Precíz előkészítés és manikűr',
      'A természetes körömhöz igazított megerősítő réteg',
      'A forma és a felület gondos kialakítása',
      'Egyszínű gél lakkozás és befejező ápolás',
    ],
    options: ['S · ujjbegyig', 'M · ujjbegynél hosszabb'],
    bookingLabel: 'Gél lakk foglalása',
  },
  {
    number: '04',
    title: 'Műköröm építés',
    intro: 'Személyre szabott hossz és forma, stabil, arányos kialakítással.',
    description: 'A kívánt forma és hossz egyeztetése után a körmöt a saját köröm adottságaihoz igazítva építem fel. Kiemelt figyelmet kap a tartósságot adó statika és az oldalnézetből is harmonikus forma.',
    includes: [
      'Forma- és hosszválasztás személyes egyeztetéssel',
      'Manikűr és alapos előkészítés',
      'A műköröm felépítése és statikai kialakítása',
      'Reszelés, egyszínű felület és befejező ápolás',
    ],
    options: ['S · rövid', 'M · közepes', 'L · hosszabb'],
    bookingLabel: 'Műköröm építés foglalása',
  },
  {
    number: '05',
    title: 'Műköröm töltés',
    intro: 'A lenövés korrigálása, a forma és a tartás teljes felfrissítésével.',
    description: 'Töltéskor nemcsak a lenött rész kap új anyagot: ellenőrzöm a meglévő körmök állapotát, majd újraegyensúlyozom a teljes szerkezetet. Jelentős lenövés vagy sérülés esetén új építés lehet indokolt.',
    includes: [
      'A meglévő anyag és a természetes köröm ellenőrzése',
      'A lenőtt terület előkészítése és a felválások eltávolítása',
      'A köröm szerkezetének, hosszának és formájának helyreállítása',
      'Új egyszínű felület és befejező ápolás',
    ],
    options: ['S · rövid', 'M · közepes', 'L · hosszabb'],
    bookingLabel: 'Műköröm töltés foglalása',
  },
  {
    number: '06',
    title: 'Láb gél lakk',
    intro: 'Esztétikus, tartós szín a lábkörmökön, precíz előkészítéssel.',
    description: 'A kezelés során a lábkörmöket a gél lakkozáshoz készítem elő, majd vékony, egyenletes és tartós színréteg kerül rájuk. A szolgáltatás esztétikai körömápolást tartalmaz.',
    includes: [
      'A lábkörmök állapotának ellenőrzése',
      'A hossz, a forma és a köröm körüli bőr rendezése',
      'A körömlemez alapos előkészítése',
      'Egyszínű gél lakkozás és befejező ápolás',
    ],
    bookingLabel: 'Láb gél lakk foglalása',
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero services-page-hero">
        <p className="section-kicker">Szolgáltatásaim</p>
        <h1>Gondos technika.<br /><em>Személyre szabott ápolás.</em></h1>
        <p>Minden alkalom a körmöd állapotának felmérésével és a kívánt forma egyeztetésével indul. Az online foglalóban egyszerűen kiválaszthatod a neked megfelelő szolgáltatást.</p>
        <Button render={<a href={bookingUrl} target="_blank" rel="noreferrer" />} nativeButton={false} className="gold-button">
          Online időpontfoglalás <ArrowUpRight aria-hidden="true" />
        </Button>
      </section>

      <section className="service-detail-shell" aria-label="Szolgáltatások részletes bemutatása">
        {services.map((service) => (
          <article className="service-detail-group" key={service.number}>
            <header>
              <span>{service.number}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
              </div>
            </header>

            <div className="service-detail-content">
              <p>{service.description}</p>
              <h3>A szolgáltatás tartalma</h3>
              <ul className="service-includes">
                {service.includes.map((item) => (
                  <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>

              {service.options && (
                <div className="service-options" aria-label="Választható méretek">
                  {service.options.map((option) => <span key={option}>{option}</span>)}
                </div>
              )}

              <a className="service-booking-link" href={bookingUrl} target="_blank" rel="noreferrer">
                {service.bookingLabel} <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="slim-cta">
        <p>Kiválasztottad a neked megfelelő szolgáltatást?</p>
        <h2>Foglalj online egyszerűen.</h2>
        <a href={bookingUrl} target="_blank" rel="noreferrer">Időpontfoglalás <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
