import type { Metadata } from 'next';
import { ArrowUpRight, Phone } from 'lucide-react';
import { bookingUrl, contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog | Kinga Nails',
  description: 'Hasznos tanácsok körömápolásról, tartósságról, higiéniáról és a 2026-os körömtrendekről.',
};

const articles = [
  {
    index: '01', category: 'Ápolás', date: '5 perc olvasás', title: 'Így marad szép a körmöd két időpont között',
    intro: 'Néhány apró szokással sokat tehetsz azért, hogy a gél lakk vagy a műköröm tartós és fényes maradjon.',
    body: ['Használj naponta körömágyolajat. A rendszeres olajozás rugalmasan tartja a bőrt, csökkenti a berepedezést, és szebbé teszi a lenövés környékét.', 'Takarításhoz és hosszabb vizes munkához viselj kesztyűt. A köröm nem eszköz: ne nyiss vele dobozt, és ne kapard vele a felületeket.', 'Ha felválást vagy sérülést látsz, ne tépd le az anyagot. Jelezd időben, hogy biztonságosan javíthassuk.'],
  },
  {
    index: '02', category: 'Tartósság', date: '4 perc olvasás', title: 'Miért fontos a háromhetes visszatérés?',
    intro: 'A lenövés nemcsak esztétikai kérdés: idővel megváltozik a köröm statikája és terhelése.',
    body: ['A megerősítés legmagasabb pontja a természetes köröm növekedésével előrébb kerül. Emiatt a köröm könnyebben billenhet, repedhet vagy letörhet.', 'Három hét körül a forma még kényelmesen korrigálható, az anyag pedig biztonságosan tölthető. A túlhordott köröm javítása több időt és akár teljes cserét is igényelhet.', 'A következő időpontodat érdemes már a kezelés végén lefoglalni, így biztosan jut elég idő a precíz munkára.'],
  },
  {
    index: '03', category: 'Higiénia', date: '6 perc olvasás', title: 'Mit jelent a professzionális szalonhigiénia?',
    intro: 'A tisztaság nem látványelem, hanem következetes folyamat minden vendég előtt és után.',
    body: ['A fém eszközöket mechanikai tisztítás és fertőtlenítés után magas hőfokon sterilizálom. A felületekhez professzionális, speciális fertőtlenítőszereket használok.', 'Az egyszer használatos eszközöket nem használom újra. A munkafelületet két vendég között teljesen előkészítem.', 'Te is segíthetsz: tiszta kézzel érkezz, és körömbetegség, sérülés vagy érzékenység esetén szólj előre.'],
    sources: [{ label: 'L’Etoile – a modern orosz manikűr alapelvei', href: 'https://www.letu.ru/blog/russkij-manikyur-pochemu-ves-mir-hochet-nogti-kak-u-nas' }],
  },
  {
    index: '04', category: 'Trendek 2026', date: '6 perc olvasás', title: 'Csendes luxus, gyöngyfény és finom részletek',
    intro: 'A 2026-os irányzatok a visszafogott alapokat apró, prémium hatású részletekkel teszik különlegessé.',
    body: ['A természetes rózsaszín, a tejfehér, a bézs és a greige árnyalatok elegáns alapot adnak. A hatás nem feltűnő, mégis nagyon ápolt: áttetsző rétegek, finom belső ragyogás és pontosan kialakított forma kerül előtérbe.', 'A gyöngyház és a glazed felület könnyedebb, áttetszőbb változatban marad divatos. A pöttyök és a kontrollált 3D elemek visszatérnek, de egy-két hangsúlyos körmön sokkal kifinomultabbak, mint teljes felületen.', 'A trend lényege az egyensúly. Egy tiszta nude alap mellé elég egy vékony fémes vonal, mikrostrassz vagy apró, kézzel festett motívum.'],
    sources: [
      { label: 'Vogue Ukraine – 10 manikűrtrend 2026-ra', href: 'https://vogue.ua/article/beauty/nogti/10-golovnih-trendiv-manikyuru-na-2026-rik-62548.html' },
      { label: 'PRORAZKO – 2026-os ukrán trendösszefoglaló', href: 'https://prorazko.com/ru/trendy-manikiuru-2026-v-ukraini-top-idei-nail-dyzainu-formy-kolory-ta-tekhniky/' },
    ],
  },
  {
    index: '05', category: 'Rövid körmök', date: '5 perc olvasás', title: 'Prémium hatás rövid hosszon: soft square és mikrofrancia',
    intro: 'A rövid köröm 2026-ban nem kompromisszum, hanem tudatos, kényelmes és elegáns választás.',
    body: ['A lágyan kerekített kockaforma rendezett, modern és jól viselhető. A nagyon vékony, körülbelül egy milliméteres francia vég optikailag nyújtja a körmöt anélkül, hogy elnehezítené az összhatást.', 'A tejes nude, a meggypiros, az áttetsző üveghatás és a negatív térrel készült minta rövid körmön is karakteres lehet. Itt különösen fontos a pontos előkészítés, mert a letisztult felület minden részletet megmutat.', 'A megfelelő színt és formát a körömlemez, az ujjak aránya és a mindennapi terhelés alapján érdemes kiválasztani.'],
    sources: [{ label: 'Barb.ua – rövid körmök 2026-ban', href: 'https://barb.ua/uk/blog/manikur-korotki-nigti' }],
  },
  {
    index: '06', category: 'Forma', date: '5 perc olvasás', title: 'Melyik körömforma illik a kezedhez?',
    intro: 'A divatos forma akkor működik igazán, ha harmonizál a kézzel, stabil és a hétköznapokban is kényelmes.',
    body: ['A soft square praktikus és modern, az ovális finoman nyújtja az ujjakat, a mandula pedig lágy, nőies sziluettet ad. A ballerina forma karakteresebb, ezért általában közepes vagy hosszabb körmön mutat a legszebben.', 'Nem csak az aktuális trend számít. A természetes köröm növekedési iránya, szélessége és terhelése is meghatározza, melyik forma lesz tartós.', 'A konzultáción közösen választjuk ki azt az arányt, amely esztétikus, kényelmes és a következő időpontig biztonságosan viselhető.'],
    sources: [
      { label: 'Barb.ua – formák és 2026-os irányzatok', href: 'https://barb.ua/uk/blog/trendy-manikyura' },
      { label: 'PRORAZKO – forma-, szín- és technikatrendek', href: 'https://prorazko.com/ru/trendy-manikiuru-2026-v-ukraini-top-idei-nail-dyzainu-formy-kolory-ta-tekhniky/' },
    ],
  },
  {
    index: '07', category: 'Pedikűr', date: '4 perc olvasás', title: 'Tejes árnyalatok és ápolt természetesség',
    intro: 'A modern pedikűr középpontjában az egészséges, rendezett összhatás és a könnyen kombinálható szín áll.',
    body: ['Az áttetsző rózsaszín, a tejfehér és a meleg bézs tiszta, friss megjelenést ad. Ezek az árnyalatok szandállal és zárt cipővel is harmonikusak, ezért nemcsak nyáron jó választások.', 'A természetes hatást egy finom fény, vékony francia vonal vagy egyetlen diszkrét díszítés teheti személyessé. A hangsúly az ápolt bőrön, a pontos lakkozáson és a kényelmes, tartós végeredményen marad.', 'A lábköröm esetében különösen fontos, hogy a forma ne csak szép, hanem biztonságos is legyen; ezért a túlzott hossz és vastagság kerülendő.'],
    sources: [{ label: 'Beauty HUB Ukraine – pedikűrtrendek 2026-ra', href: 'https://bhub.com.ua/uk/trendi-pedikyuru-na-lito-2026-poyednannya-prirodnosti-ta-smilivih-akcentiv/' }],
  },
  {
    index: '08', category: 'Precizitás', date: '5 perc olvasás', title: 'A modern orosz manikűr valódi lényege',
    intro: 'Nem egyetlen látványos technikáról szól, hanem az aprólékos előkészítés, a rendezett kontúr és a biztonság egységéről.',
    body: ['A modern orosz manikűr jellegzetessége a tiszta körömágy, a precíz színfelvitel és a részletek következetes ellenőrzése. A szép végeredményhez azonban mindig a természetes köröm állapotából kell kiindulni.', 'A minőségi munka része a kényelmes, sérülésmentes folyamat és a szigorú higiénia. Az egyszer használatos eszközöket cserélni kell, a többször használható fém eszközöknél pedig több lépcsős tisztítás, fertőtlenítés és sterilizálás szükséges.', 'A végeredmény akkor professzionális, ha közelről is rendezett, kényelmesen viselhető és nem terheli feleslegesen a természetes körmöt.'],
    sources: [{ label: 'L’Etoile – miért népszerű a modern orosz manikűr?', href: 'https://www.letu.ru/blog/russkij-manikyur-pochemu-ves-mir-hochet-nogti-kak-u-nas' }],
  },
];

export default function BlogPage() {
  return (
    <main className="inner-page blog-page">
      <section className="page-hero blog-hero">
        <p className="section-kicker">Körömnapló</p>
        <h1>Tudatos ápolás.<br /><em>Modern inspiráció.</em></h1>
        <p>Saját szakmai tanácsok és modern ukrán–orosz trendanyagok alapján, magyar vendégek számára átdolgozott útmutatók.</p>
      </section>

      <section className="article-list" aria-label="Körömápolási cikkek">
        {articles.map((article) => (
          <article className="article-card" key={article.index}>
            <div className="article-index">{article.index}</div>
            <div className="article-content">
              <p className="article-meta">{article.category} · {article.date}</p>
              <h2>{article.title}</h2>
              <p className="article-intro">{article.intro}</p>
              <div className="article-body">
                {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {article.sources && (
                <div className="article-sources">
                  <span>Forrás és inspiráció:</span>
                  {article.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight aria-hidden="true" /></a>)}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="blog-cta">
        <div>
          <p>Van kérdésed a saját körmöddel kapcsolatban?</p>
          <a className="blog-phone" href={contact.phoneHref}><Phone aria-hidden="true" /> {contact.phoneDisplay}</a>
        </div>
        <a href={bookingUrl} target="_blank" rel="noreferrer">Időpontfoglalás <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
