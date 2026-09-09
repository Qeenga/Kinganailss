import type { Metadata } from 'next';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Kinga Nails',
  description: 'Hasznos tanácsok körömápolásról, tartósságról, higiéniáról és a szalonlátogatások közötti időszakról.',
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
  },
];

export default function BlogPage() {
  return (
    <main className="inner-page blog-page">
      <section className="page-hero blog-hero">
        <p className="section-kicker">Körömnapló</p>
        <h1>Tudatos ápolás.<br /><em>Tartós szépség.</em></h1>
        <p>Rövid, használható tanácsok arról, hogyan őrizd meg körmeid egészségét és a friss szalonélményt.</p>
      </section>

      <section className="article-list" aria-label="Körömápolási cikkek">
        {articles.map((article) => (
          <details className="article-card" key={article.index}>
            <summary>
              <span className="article-index">{article.index}</span>
              <div className="article-main"><p>{article.category} · {article.date}</p><h2>{article.title}</h2><span>{article.intro}</span></div>
              <span className="article-open"><ArrowDown aria-hidden="true" /></span>
            </summary>
            <div className="article-body">
              {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </details>
        ))}
      </section>

      <section className="blog-cta">
        <p>Van kérdésed a saját körmöddel kapcsolatban?</p>
        <a href="mailto:kinga.nailsart@gmail.com">Írj nekem <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
