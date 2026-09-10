export type BlogSection = {
  title: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  lead: string;
  image: string;
  imageAlt: string;
  sections: BlogSection[];
  highlights: string[];
  video?: {
    src: string;
    poster: string;
    title: string;
    description: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'lenoves-veszelyei',
    title: 'A lenövés veszélyei: mi történik a köröm statikájával?',
    excerpt: 'A lenövés nemcsak esztétikai kérdés. Megmutatom, hogyan változik a köröm terhelése, és mikor érdemes mindenképpen visszatérni.',
    lead: 'A frissen elkészült megerősítés formája és vastagsága úgy van kialakítva, hogy a köröm a hétköznapi terhelést biztonságosan viselje. Ahogy azonban a természetes köröm nő, ez az egyensúly lassan megváltozik.',
    image: '/images/blog/02-lenoves-veszelyei.png',
    imageAlt: 'Három-négy hetes lenövést mutató nude gél körmök',
    sections: [
      {
        title: 'A súlypont együtt vándorol a lenövéssel',
        paragraphs: [
          'A műköröm vagy a megerősített gél lakk legmagasabb pontja – az úgynevezett apex – a friss szettben ott helyezkedik el, ahol a körömnek a legnagyobb tartásra van szüksége. A természetes köröm növekedésével ez a megerősített rész előrébb kerül, miközben a köröm tövénél egyre nagyobb lenövési sáv jelenik meg.',
          'A hosszabb szabad szél ilyenkor nagyobb erőkarként viselkedhet. Egy hétköznapi ütés, beakadás vagy rossz mozdulat ezért jobban megterhelheti a természetes körömlemezt, mint közvetlenül a frissítés után. Minél hosszabb és minél többet használt a kéz, annál fontosabb az időben végzett korrekció.',
        ],
      },
      {
        title: 'Felválás, repedés és nedvesség',
        paragraphs: [
          'A túlhordott anyag széle könnyebben megrepedhet vagy felválhat. Ha rés keletkezik a bevonat és a természetes köröm között, azt nem lehet biztonságosan otthon visszaragasztani vagy lefedni. A résben nedvesség és szennyeződés maradhat, ezért a felvált részt szakembernek kell eltávolítania és a körmöt ellenőriznie.',
          'A sérült anyagot ne tépd, ne feszítsd és ne reszeld mélyen házilag, mert a természetes köröm felső rétegei is leválhatnak vele. A gyors javítás helyett a kíméletes eltávolítás és az ok feltárása védi legjobban a körmöt.',
        ],
      },
      {
        title: 'Mikor ideális a visszatérés?',
        paragraphs: [
          'Sok vendégnél a háromhetes ritmus ad szép és jól tervezhető eredményt, de a pontos időpontot a növekedés üteme, a választott hossz és a mindennapi terhelés is befolyásolja. Gyorsan növő körömnél vagy intenzív kézhasználat mellett ennél korábbi kontroll is indokolt lehet.',
          'Ha fájdalmat, pirosságot, duzzanatot, elszíneződést, váladékozást vagy a természetes köröm elemelkedését látod, ne kerüljön rá újabb fedés. Ilyenkor először kérj szakmai, szükség esetén pedig orvosi vagy bőrgyógyászati segítséget.',
        ],
      },
    ],
    highlights: [
      'A következő időpontot érdemes már a kezelés végén lefoglalni.',
      'A felvált anyagot ne ragaszd vissza és ne tépd le.',
      'Fájdalom vagy elszíneződés esetén ne kerüljön új fedés a körömre.',
    ],
    video: {
      src: '/videos/lenoves-veszelyei.mp4',
      poster: '/images/blog/02-lenoves-veszelyei.png',
      title: 'Miért kockázatos a túlhordott köröm?',
      description: 'Rövid, magyar feliratos videó a lenövés miatt megváltozó terhelésről és a biztonságos teendőkről.',
    },
  },
  {
    slug: 'koromapolas-ket-idopont-kozott',
    title: 'Így marad szép a körmöd két időpont között',
    excerpt: 'Egyszerű, napi szokásokkal tovább megőrizheted a fényt, a kényelmet és az ápolt körömágyat.',
    lead: 'A tartós manikűr nem ér véget a szalonban. A körömágy és a kézbőr mindennapi ápolása, valamint néhány tudatos mozdulat sokat számít abban, hogyan érkezel a következő időpontra.',
    image: '/images/blog/01-koromapolas.png',
    imageAlt: 'Körömágyolaj használata rövid nude manikűrön',
    sections: [
      {
        title: 'A körömágyolaj legyen napi rutin',
        paragraphs: [
          'Naponta egy-két alkalommal masszírozz egy kis csepp körömágyolajat a köröm körüli bőrbe. A rendszeres ápolás segít puhán és rugalmasan tartani a bőrt, ezért kevésbé alakulnak ki zavaró, kiszáradt részek a sáncok mellett.',
          'Az olajat tiszta, száraz kézen használd. Este, kézmosás után különösen kényelmes beilleszteni a rutinba; utána egy gazdagabb kézkrémmel a kézfej teljes bőrét is ápolhatod.',
        ],
      },
      {
        title: 'Víz, vegyszerek és mechanikai terhelés',
        paragraphs: [
          'Takarításhoz, mosogatáshoz és hosszabb vizes munkához viselj jól illeszkedő kesztyűt. A gyakori áztatás és az erős háztartási vegyszerek a kézbőrt kiszáríthatják, a nagy mechanikai terhelés pedig a bevonat éleit is próbára teszi.',
          'A köröm nem szerszám: doboznyitáshoz, címkekaparáshoz vagy kupakfeszítéshez használj erre való eszközt. Ez az apró szokás különösen sok letörést és kellemetlen beakadást előzhet meg.',
        ],
      },
      {
        title: 'Mit tegyél, ha mégis megsérül?',
        paragraphs: [
          'Egy apró felválást se tépj tovább, és ne próbáld háztartási ragasztóval rögzíteni. Rövidítsd a kockázatos tevékenységeket, óvd a részt a víztől, és jelezd minél hamarabb, hogy eldönthessük: elegendő-e egy javítás vagy biztonságosabb az anyag eltávolítása.',
          'A következő kezelés előtt ne vágd ki mélyen a köröm körüli bőrt, és ne reszeld el a természetes köröm felszínét. Így a szalonban pontosan látható marad, mi történt, és kíméletesebb megoldást lehet választani.',
        ],
      },
    ],
    highlights: [
      'Körömágyolaj naponta egy-két alkalommal.',
      'Vizes és vegyszeres munkához használj kesztyűt.',
      'A sérült bevonatot ne javítsd háztartási ragasztóval.',
    ],
  },
  {
    slug: 'professzionalis-szalonhigienia',
    title: 'Mit jelent a professzionális szalonhigiénia?',
    excerpt: 'A tisztaság nem látványelem, hanem pontosan ismételt folyamat minden vendég előtt és után.',
    lead: 'Egy szép végeredmény csak akkor igazán értékes, ha biztonságos munkafolyamat áll mögötte. A professzionális higiénia a szalon teljes működését átszövi, nem csak az asztal gyors áttörlését jelenti.',
    image: '/images/blog/03-szalonhigienia.png',
    imageAlt: 'Steril csomagolású manikűreszközök egy tiszta szalonasztalon',
    sections: [
      {
        title: 'Tisztítás, fertőtlenítés és sterilizálás',
        paragraphs: [
          'A három fogalom nem ugyanaz. Az eszközökről először fizikailag el kell távolítani minden szennyeződést, ezt követi a megfelelő fertőtlenítési lépés, majd az arra alkalmas fém eszközök magas hőfokú sterilizálása. Egyik fázis sem helyettesíti a másikat.',
          'A steril eszközök zárt csomagolásban várják a következő vendéget. A csomag csak a kezelés előtt kerül felbontásra, így a tiszta állapot a használatig megőrizhető.',
        ],
      },
      {
        title: 'Ami egyszer használatos, az egyszer használatos',
        paragraphs: [
          'Bizonyos reszelők, bufferfelületek és egyéb kellékek nem sterilizálhatók megfelelően, ezért ezekből egyszer használatos megoldás szükséges. A munkafelületet, a lámpát és a gyakran érintett pontokat két vendég között gondosan elő kell készíteni.',
          'A rendezett asztal nem pusztán elegánsabb: segít abban is, hogy minden lépés követhető és a használt, illetve tiszta eszközök útja elkülöníthető legyen.',
        ],
      },
      {
        title: 'A vendég is segíthet',
        paragraphs: [
          'Érkezz tiszta kézzel, de közvetlenül a kezelés előtt ne használj zsíros krémet. Ha sérülést, érzékenységet, szokatlan elszíneződést vagy bármilyen körömproblémát tapasztalsz, szólj előre – ez segít a biztonságos döntésben.',
          'Fertőzésgyanús vagy gyulladt területet esztétikai anyaggal nem szabad elfedni. Ilyenkor az első lépés nem egy új szett, hanem a megfelelő egészségügyi vizsgálat.',
        ],
      },
    ],
    highlights: [
      'A steril csomag a kezelés előtt nyílik ki.',
      'Az egyszer használatos eszköz nem kerül újra elő.',
      'Szokatlan körömelváltozásról mindig szólj előre.',
    ],
  },
  {
    slug: 'csendes-luxus-kormok',
    title: 'Csendes luxus: gyöngyfény és finom részletek',
    excerpt: 'Tejes árnyalatok, áttetsző rétegek és egyetlen kifinomult részlet – ettől lesz igazán elegáns az összhatás.',
    lead: 'A csendes luxus lényege nem a feltűnés, hanem az arányok pontossága. A gondosan kialakított forma, a rendezett körömágy és a finom fény együtt sokkal prémiumabb hatást adhat, mint a túl sok díszítés.',
    image: '/images/blog/04-csendes-luxus.png',
    imageAlt: 'Gyöngyfényű nude manikűr finom arany vonaldísszel',
    sections: [
      {
        title: 'Az alap árnyalata a bőrtónussal dolgozik',
        paragraphs: [
          'A természetes rózsaszín, tejfehér, bézs és greige nem egyetlen univerzális színt jelent. Hideg bőrtónushoz finoman rózsás, meleg tónushoz barackosabb vagy krémesebb nude lehet harmonikus. A cél az, hogy a kéz frissnek és egységesnek hasson.',
          'Az áttetsző színek több vékony rétegben adják a legszebb mélységet. Így a köröm nem lesz nehéz hatású, a természetes fény pedig lágyan áthalad a felületen.',
        ],
      },
      {
        title: 'Gyöngyfény, glazed hatás és krémes csillogás',
        paragraphs: [
          'A gyöngyházas pigment akkor kifinomult, ha nem takarja el teljesen az alapszínt. A finom, belső ragyogás mozgás közben válik igazán láthatóvá, ezért elegáns hétköznapi és alkalmi viseletként is működik.',
          'A felület pontossága kulcsfontosságú: a lágy fény minden apró egyenetlenséget megmutat. A gondos előkészítés és a kontrollált anyagvastagság ezért fontosabb, mint maga a csillogó pigment.',
        ],
      },
      {
        title: 'Egyetlen részlet is elég',
        paragraphs: [
          'Egy vékony arany ív, apró gyöngy vagy diszkrét mikrostrassz személyessé teheti a manikűrt. A hangsúlyos elemet érdemes egy-két körömre koncentrálni, hogy az összhatás levegős maradjon.',
          'Ha a mindennapokban sokat dolgozol kézzel, válassz lapos, beépített díszítést. Ez kevésbé akad, könnyebb viselni, és a következő időpontig rendezettebb marad.',
        ],
      },
    ],
    highlights: [
      'A nude árnyalatot mindig a bőrtónushoz válaszd.',
      'A prémium hatás kulcsa a pontos, sima felület.',
      'Egy-két diszkrét díszített köröm gyakran elegánsabb.',
    ],
  },
  {
    slug: 'rovid-kormok-mikrofrancia',
    title: 'Rövid körmök, prémium hatás: soft square és mikrofrancia',
    excerpt: 'A rövid hossz nem kompromisszum. Jó arányokkal kényelmes, modern és meglepően elegáns lehet.',
    lead: 'A rövid köröm különösen igényli a pontos formát: kevés helyen kell harmonikusan találkoznia a természetes köröm arányainak, a színnek és a díszítésnek. Ha ez sikerül, a végeredmény friss és tudatos.',
    image: '/images/blog/05-rovid-kormok.png',
    imageAlt: 'Rövid soft square körmök vékony mikrofrancia véggel',
    sections: [
      {
        title: 'Miért működik a soft square?',
        paragraphs: [
          'A lágyan kerekített kockaforma megtartja a modern, egyenes vonalakat, miközben a sarkai nem maradnak élesen kiállók. Emiatt kényelmesebb a hétköznapokban, és szélesebb körömlemezen is rendezett hatást adhat.',
          'A forma akkor szép, ha a két oldalfal párhuzamosnak tűnik, a szabad szél pedig nem vastag. A túl erős lekerekítés már ovális hatást ad, a túl éles sarok viszont könnyebben beakadhat.',
        ],
      },
      {
        title: 'A mikrofrancia optikailag nyújt',
        paragraphs: [
          'A nagyon vékony francia vonal több teret hagy a természetes vagy nude alapnak, ezért a köröm hosszabbnak és könnyedebbnek látszik. A hófehér mellett törtfehér, csokoládébarna, bordó vagy finom arany vég is elegáns lehet.',
          'Rövid körmön minden milliméter számít. A vonal ívét nem sablon szerint, hanem a körömlemez és a mosolyvonal arányaihoz igazítva érdemes megrajzolni.',
        ],
      },
      {
        title: 'Kinek ideális a rövid hossz?',
        paragraphs: [
          'Gépeléshez, kisgyermek melletti mindennapokhoz, egészségügyi vagy precíz kézi munkához gyakran ez a legpraktikusabb választás. A megfelelő megerősítéssel a természetes köröm védettebbé és egységesebbé tehető anélkül, hogy hosszabbításra lenne szükség.',
          'A kényelmes hossz mindig egyéni. A konzultáción azt is figyelembe vesszük, mennyire terheled a kezed, milyen gyorsan nő a körmöd, és melyik forma illik legjobban az ujjaidhoz.',
        ],
      },
    ],
    highlights: [
      'A soft square modern, de kevésbé akad, mint az éles kocka.',
      'A mikrofrancia több nude felületet hagy látszani.',
      'A rövid hossz aktív hétköznapokhoz is kényelmes.',
    ],
  },
  {
    slug: 'melyik-koromforma-illik-hozzad',
    title: 'Melyik körömforma illik a kezedhez?',
    excerpt: 'Soft square, ovális, mandula vagy ballerina? Nemcsak a trend, hanem a körömlemez és az életmód is számít.',
    lead: 'A legszebb körömforma az, amelyik harmonizál az ujjak arányával, stabilan kialakítható a természetes körmön, és a hétköznapokban sem korlátoz. Ezért ugyanaz a forma két kézen egészen másként viselkedhet.',
    image: '/images/blog/06-koromformak.png',
    imageAlt: 'Négy különböző nude körömforma egymás mellett',
    sections: [
      {
        title: 'Soft square és ovális: a praktikus klasszikusok',
        paragraphs: [
          'A soft square rendezett, kortárs megjelenést ad, és rövid vagy közepes hosszon is jól működik. Különösen szép lehet egyenesebb oldalfalú, szélesebb körömlemezen. Az ovális forma lágyabb, optikailag nyújthatja az ujjakat, és a lekerekített szél miatt kényelmes viselet.',
          'Mindkét forma sokféle díszítést elbír. Nude árnyalattal klasszikus, élénk színnel karakteres, vékony franciával pedig elegáns lesz.',
        ],
      },
      {
        title: 'Mandula és ballerina: amikor a hossz is része a formának',
        paragraphs: [
          'A mandula karcsú, nőies sziluettet ad, de a szép ívéhez általában szükség van bizonyos hosszra. Túl rövid körmön a csúcs könnyen aránytalanná válhat. A ballerina egyenesebb oldalfalakkal és keskeny, lapos véggel készül, ezért leginkább közepes vagy hosszabb épített körmön mutat jól.',
          'A látványos forma nagyobb felelősséget is jelent: a megfelelő szerkezet, anyagelosztás és időben végzett töltés nélkül a hossz könnyebben okozhat kényelmetlenséget.',
        ],
      },
      {
        title: 'A döntést a kezed használata teszi személyessé',
        paragraphs: [
          'Ha sokat gépelsz, sportolsz, kesztyűben dolgozol vagy gyakran végzel kézi munkát, a rövidebb, lekerekített forma lehet a kényelmesebb. Ha alkalmi, különleges megjelenést szeretnél, egy hosszabb mandula vagy ballerina is jó választás lehet megfelelő tervezéssel.',
          'A konzultáció során nemcsak inspirációs képet nézünk: figyelembe vesszük a természetes köröm növekedési irányát, szélességét és állapotát is. Így a forma nemcsak szép, hanem viselhető marad.',
        ],
      },
    ],
    highlights: [
      'A forma stabilitása fontosabb az aktuális trendnél.',
      'A mandula és ballerina általában több hosszt igényel.',
      'A mindennapi kézhasználat legyen része a döntésnek.',
    ],
  },
  {
    slug: 'tejes-arnyalatok-pedikur',
    title: 'Tejes árnyalatok és ápolt pedikűr',
    excerpt: 'A modern pedikűr alapja a biztonságos forma, a rendezett összhatás és egy könnyen viselhető, friss árnyalat.',
    lead: 'A tejes rózsaszín, a finom nude és a tiszta tejfehér évszaktól függetlenül ápolt megjelenést ad. A visszafogott szín azonban csak akkor szép igazán, ha a forma kényelmes és a köröm környéke is gondosan előkészített.',
    image: '/images/blog/07-tejes-pedikur.png',
    imageAlt: 'Rövid, tejes rózsaszín gél lakkos lábkörmök',
    sections: [
      {
        title: 'A lábköröm formája legyen biztonságos',
        paragraphs: [
          'A lábkörmöt általában nem érdemes túl rövidre és mélyen lekerekítve alakítani. A túlzott sarokkivágás vagy a szűk cipő nyomása kellemetlenséget okozhat, ezért a forma kialakításánál a természetes növekedési irányt és a lábbeli szokásokat is figyelembe kell venni.',
          'A gél lakk rétege maradjon vékony és egyenletes. A túl hosszú vagy túl vastag lábköröm zárt cipőben nyomást kaphat, ami nemcsak kényelmetlen, hanem a tartósságot is ronthatja.',
        ],
      },
      {
        title: 'Miért hálásak a tejes színek?',
        paragraphs: [
          'Az áttetsző, krémes árnyalatok vizuálisan egységesítik a körömlemezt, mégsem hatnak nehéznek. Szandállal friss, zárt cipős időszakban pedig diszkrét és rendezett választást jelentenek.',
          'A bőrtónushoz illő rózsaszín vagy bézs finomabb lehet, mint a nagyon fedő fehér. Ha különlegesebb részletet szeretnél, egy vékony francia vonal vagy egyetlen apró díszítés is elegendő.',
        ],
      },
      {
        title: 'Otthoni ápolás és figyelmeztető jelek',
        paragraphs: [
          'Tartsd a lábat tisztán és szárazon, válassz jól szellőző, megfelelő méretű cipőt, és ne osztozz körömvágó eszközökön. A köröm körüli bőrt rendszeresen hidratálhatod, de a köröm alá ne nyúlj éles eszközzel.',
          'Ha a köröm megvastagszik, sárgásan vagy fehéren elszíneződik, morzsalékossá válik, fáj, vagy a környező bőr piros és duzzadt, az esztétikai fedés helyett előbb kérj gyógyszerészi vagy orvosi tanácsot.',
        ],
      },
    ],
    highlights: [
      'A lábköröm ne legyen túl hosszú vagy túl vastag.',
      'A tejes árnyalatok egész évben könnyen viselhetők.',
      'Fájdalmas vagy elszíneződött körömre ne kerüljön fedés.',
    ],
  },
  {
    slug: 'uveghatas-cat-eye-krom',
    title: 'Üveghatás, cat-eye és finom króm',
    excerpt: 'Három látványos technika, amelyek a megfelelő arányokkal külön-külön és együtt is elegánsak maradnak.',
    lead: 'A modern körömdíszítés egyre inkább a fényről szól: áttetsző mélységről, mozgó csillogásról és precíz fémes részletekről. A hatás akkor marad prémium, ha a technika nem nyomja el a kéz természetes szépségét.',
    image: '/images/blog/08-cat-eye-krom.png',
    imageAlt: 'Bordó cat-eye és füstös üveghatású mandula körmök arany részlettel',
    sections: [
      {
        title: 'Jelly és milk-glass: áttetsző színrétegek',
        paragraphs: [
          'A jelly felület áttetsző, zselés mélységet ad; a milk-glass változat ezt egy finom, tejes fátyollal lágyítja. Több vékony rétegben építve a szín tiszta marad, miközben a köröm természetes fényjátéka is megmarad.',
          'Bordó, füstszürke, karamell vagy rózsaszín árnyalatban egészen eltérő hangulatot kaphat. Rövid körmön friss és könnyed, hosszabb mandulán pedig drámai, ékszerszerű hatást ad.',
        ],
      },
      {
        title: 'A cat-eye fénycsíkja mozgásra kel',
        paragraphs: [
          'A mágneses pigmentek iránya a lámpázás előtt alakítható. Ettől jön létre a fénycsík vagy bársonyos ragyogás, amely a kéz mozgásával együtt változik. A precíz mágnesvezetés dönti el, mennyire lesz keskeny, lágy vagy mély a hatás.',
          'Sötét alapon látványos és kontrasztos, nude vagy áttetsző alapon finomabb. Ha hétköznapokra szeretnéd, elég lehet két hangsúlyos köröm; alkalomra akár a teljes szett is készülhet ebben a technikában.',
        ],
      },
      {
        title: 'A króm most inkább részlet, mint teljes fedés',
        paragraphs: [
          'Egy vékony fémes ív, francia vég vagy keretezett részlet modern fényt visz a kompozícióba anélkül, hogy túl sok lenne. A pezsgőarany meleg, az ezüst hűvös, a gyöngykróm pedig szinte bármilyen alapszínnel harmonizál.',
          'A különböző fényhatások kombinálhatók, de érdemes egy főszereplőt választani. Ha a cat-eye erős, a króm legyen finom; ha az üveghatás a lényeg, a díszítés hagyjon elég áttetsző felületet.',
        ],
      },
    ],
    highlights: [
      'Az áttetsző rétegek mélységet adnak nehéz hatás nélkül.',
      'A cat-eye karakterét a mágnesvezetés alakítja.',
      'A finom krómrészlet elegánsabb lehet a teljes fedésnél.',
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
