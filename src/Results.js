import img1 from "./images/results/2022/vysledky_1.png";
import img2 from "./images/results/2022/vysledky_2.png";
import img3 from "./images/results/2022/vysledky_3.png";

export default function Results() {
  return (
    <div>
      <div className="container">
        <h1 className="title text-center">
          <a href="/">První výstřel</a>
        </h1>
        <h2 className="text-center">Výsledky</h2>
        <p>Mockrát Vám děkujeme, že jste se zúčastnili hry První výstřel!</p>
        <p>
          Ještě jednou tímto gratulujeme prvním třem týmům, kterými byly
          Tučňáci, Next Level Team a Verča+Pája+Pája+Míša. Obrovský obdiv ale
          nepatří pouze jim, nýbrž každému, kdo se vydal na naši trasu plnou
          úkolů a nástrah. Všichni jste ukázali, že jste v duchu pravými
          mafiány, a my doufáme, že Vás opět potkáme na některé z našich dalších
          aktivit z{" "}
          <a href="https://mafie.podsveti.cz/" target="_blank" rel="noreferrer">
            Podsvětí
          </a>
          ! Ale teď už konec zdržování a pojďme se podívat na výsledky!
        </p>
        <h3>Celkové výsledky</h3>
        <p>
          Zdrojové tabulky jsou k dispozici na{" "}
          <a
            href="https://drive.google.com/drive/folders/1U1rHAGuUcQjklYsip9JuwdurljbBlUr9"
            target="_blank"
            rel="noreferrer"
          >
            Google Drive
          </a>
          .
        </p>
        <p className="mb-2">
          Žlutě jsou značeny časy týmů, které navštívily všechna stanoviště.{" "}
          <i>
            (26. tým Haleluka sice nestihl dojít na poslední stanoviště v
            časovém limitu, ale přesto na místo dorazili a opsali kód.)
          </i>{" "}
          V šedé barvě jsou odhady časů, ve kterých by týmy, které nedošly,
          trasu dokončily, kdyby pokračovaly nadále stejným průměrným tempem.
          Takový výsledný dopočítaný čas je zvýrazněn podtržením.{" "}
          <i>
            (Pro tým Haleluka je takto označen skutečný čas zadání posledního
            kódu.)
          </i>{" "}
          Pokud jsou ve sloupci dva časové údaje (hh:mm:ss / hh:mm:ss), první je
          čas na stanovišti v záhlaví sloupce, druhý údaj značí čas startu ze
          startovního bodu. Sloupce označené šipkou jsou časy přesunů mezi
          jednotlivými stanovišti udávané v minutách.
        </p>
        <p className="text-italic text-small">
          ↔️ Posouvejte tažením do strany
        </p>
        <div className="overflow-x-scroll">
          <img src={img1} alt="Výsledky - obrázek 1" />
        </div>
        <h3>Rychlost přesunů</h3>
        <p className="mb-2">
          V této tabulce můžete detailně porovnat, jak jste si vedli v porovnání
          s ostatními týmy. Časy přesunů jsou opět uváděny v minutách. Pod
          tabulkou je vypočítán průměrný čas přesunu pro každou dvojici
          stanovišť a barevně jsou odlišeny týmy, které se od tohoto průměru
          liší, ať už byly rychlejší, nebo pomalejší. Např. světle žluté časy
          označují přesun, který je o více než polovinu času rychlejší než
          přesun průměrný.
        </p>
        <p className="text-italic text-small">
          ↔️ Posouvejte tažením do strany
        </p>
        <div className="overflow-x-scroll">
          <img src={img2} alt="Výsledky - obrázek 2" />
        </div>
        <h3>Statistiky</h3>
        <p className="mb-2">Zajímavosti o trase, organizátorech a hráčích.</p>
        <p className="text-italic text-small">
          ↔️ Posouvejte tažením do strany
        </p>
        <div className="overflow-x-scroll">
          <img src={img3} alt="Výsledky - obrázek 3" />
        </div>
        <h3>Zpětná vazba</h3>
        <p>
          Doufáme, že jste si hru užili a budeme Vám vděční, pokud nám
          poskytnete zpětnou vazbu. Vyplnění{" "}
          <a
            href="https://forms.gle/B5pCuR3xWvmT2HjV9"
            target="_blank"
            rel="noreferrer"
          >
            formuláře
          </a>{" "}
          zabere maximálně 10 minut.
        </p>
      </div>
      <div className="page-footer"></div>
    </div>
  );
}
