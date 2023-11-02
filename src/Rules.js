import leftHandIcon from "./images/hand_left_transparent.png";
import Link from "./Link";

export default function Rules() {
  return (
    <div>
      <div className="container" id="pravidla">
        <h1 className="title text-center">
          <a href="/">První výstřel</a>
        </h1>
        <h2 className="text-center">Pravidla</h2>

        <h3>Intro</h3>
        <p>
          Ve dvacátých a třicátých letech minulého století ovládala Mafie téměř
          všechna velká města ve Spojených státech. Pražské Podsvětí zažívá svůj
          rozkvět ve století jednadvacátém. A jelikož musí rozšiřovat své řady,
          otevírá brány nováčkům, kteří se osvědčí.
        </p>
        <p>
          Tebe a tvé komplice kontaktoval starý známý s nabídkou, která se
          neodmítá. Dostali jste jedinečnou šanci vstoupit do prestižní
          organizace, která může změnit váš život. Ale nejdřív musíte dokázat,
          že na to máte...
        </p>
        <p>
          První úkol pro Mafii bude snadný, postupem času ale budou úkoly
          náročnější a nebezpečnější. Čekají tě obyčejné pochůzky, ale i sbírání
          informací o konkurenci a vybírání výpalného. Vrcholem zasvěcení do
          Mafie je ale samozřejmě prácička, kde padne PRVNÍ VÝSTŘEL!
        </p>

        <h3>O co jde?</h3>
        <p>
          PRVNÍ VÝSTŘEL je akční městská hra, která prověří vaši schopnost
          spolupráce, rychlost uvažování, prostorovou orientaci a znalost Prahy.
          Změříte svoje schopnosti s ostatními týmy, objevíte zapadlé kouty
          našeho hlavního města a pokud splníte všechny úkoly, budete se moct
          připojit do mafiánské famiglie!
        </p>

        <h3>Pro koho hra je?</h3>
        <p>
          Hru doporučujeme absolvovat v týmu o 2 až 5 členech, ale pokud jsi vlk
          samotář, můžeš jít i sám. Pokud tě trápí nedostatek kompliců, kteří by
          s Tebou šli, uveď to v registraci a my už se o vše postaráme. Každý
          tým by měl obsahovat alespoň jednoho člena staršího patnácti let.
        </p>

        <h3>Jaký je princip hry?</h3>
        <p>
          Cílem hry je v co nejkratším čase projít všechna stanoviště. Hrou vás
          bude provázet herní aplikace, která vám na každém stanovišti ukáže
          fotografii místa v Praze, které musíte identifikovat a přesunout se na
          něj pomocí chůze či MHD. Na některých stanovištích vás čekají další
          drobné úkoly, mafiánské “prácičky”.
        </p>

        <h3>Jak bude hra probíhat?</h3>
        <p>
          Hra začíná na místě, které obdržíte pár dní před začátkem hry na
          e-mailovou adresu, kterou jste vyplnili při registraci. (POZOR - ne
          všechny týmy začínají na stejném místě!) Prosím, buďte na startu
          alespoň 5 minut před začátkem hry. Ve vám přidělený čas (intervalový
          start mezi 9:30-10:00) zadáte do herní aplikace kód z e-mailu a objeví
          se fotografie prvního stanoviště, které musíte najít. Pokud byste
          nemohli poznat, o jaké místo se jedná, nezoufejte - aplikace vám po
          určitém čase nabídne nápovědu v podobě vyznačené oblasti na mapě. Na
          každém nalezeném stanovišti je nutné do aplikace zadat šestimístný
          kód, který odhalí další fotografii. Kód může být schovaný na
          vyznačeném místě, nebo k jeho získání musíte splnit určitý úkol.
          Informace, jak získat kód na následujícím stanovišti, bude také
          zobrazena v aplikaci. Při hledání stanoviště se smíte rozdělit, ale
          při zadávání kódu musí být na stanovišti přítomen celý tým najednou.
          Pohybovat se smíte pouze pěšky nebo za pomoci MHD. Je zakázáno radit
          se s lidmi mimo Váš tým, či sledovat jiné týmy.
        </p>

        <h3>Kdy?</h3>
        <p>
          Hra startuje v sobotu 21. 10. 2023 mezi 9:30 až 10:00 (každý tým má
          přiřazen konkrétní čas). Na splnění všech úkolů máte 8 a půl hodiny,
          ale většina týmů zvládne trasu rychleji. Po 8 a půl hodinách bude
          pozice cíle zveřejněna i pro týmy, které jej ve stanoveném čase
          nenašly. Od 18:30 následuje v cíli afterpárty a cca v 19:00 proběhne
          slavnostní vyhlášení výsledků.
        </p>

        <h3>Kde?</h3>
        <p>
          Hra se bude odehrávat na území městských částí Praha 1 až Praha 11.
        </p>

        <h3>Kdy je možné se registrovat?</h3>
        <p>
          Registrace právě běží a poběží do čtvrtka 19. 10. 2023 do 23 hodin a
          59 minut. Případné změny v registraci prosím pište na e-mail{" "}
          <a
            className="link"
            href="mailto:prvnivystrel@email.cz?subject=První výstřel"
          >
            prvnivystrel@email.cz
          </a>
          . Počet týmů je omezen, tak s registrací neotálejte!
        </p>

        <h3>Startovné</h3>
        <p>
          do <b>15. 10.</b> 2023, 23:59 - 150 Kč / jednotlivec, 240 Kč / tým 2-5
          hráčů
        </p>
        <p>
          od <b>15. 10.</b> 2023, případně v cíli hotově - 200 Kč / jednotlivec,
          300 Kč / tým 2-5 hráčů
        </p>
        <p>
          Platba na účet 2265421133/0800. Do poznámky prosím uveďte název týmu
          (popř. i třeba jméno kapitána), ať můžeme platbu spárovat.
        </p>

        <h3>Co si nezapomenout?</h3>
        <h4>Povinné vybavení:</h4>
        <ul>
          <li>1 nabitý Android telefon</li>
          <li>
            nainstalovaná Android herní aplikace (přijde e-mailem pár dní před
            hrou)
          </li>
          <li>celodenní jízdenku na pražskou MHD</li>
        </ul>
        <h4>Dále doporučujeme:</h4>
        <ul>
          <li>powerbanku</li>
          <li>stažené offline mapy v telefonu</li>
          <li>stažený vyhledávač jízdních řádů MHD</li>
          <li>
            zdravý rozum - prosím, dbejte na své zdraví a při přecházení vozovky
            či kolejí se řádně rozhlédněte
          </li>
        </ul>

        <h3>Kdo hru pořádá?</h3>
        <p>
          První výstřel pro Vás připravuje pražské{" "}
          <Link
            text={"Podsvětí"}
            url={"https://www.facebook.com/mafie.praha"}
          />
          , autor her jako je{" "}
          <Link text={"Mafie"} url={"https://mafie.podsveti.cz/"} /> nebo{" "}
          <Link text={"Gangy Práglu"} url={"http://gangy2016.podsveti.cz/"} />,
          a neratovická skupina{" "}
          <Link text="Znáš Nera?" url="https://znasnera.webnode.cz/" />
        </p>

        <h3>Máte dotazy?</h3>
        <p>Neváhejte nás kontaktovat na:</p>
        <ul style={{ marginBottom: 50 }}>
          <li>
            e-mailu{" "}
            <a
              className="link"
              href="mailto:prvnivystrel@email.cz?subject=První výstřel"
            >
              prvnivystrel@email.cz
            </a>
          </li>
          <li>
            <Link
              text={"Facebooku"}
              url={"https://www.facebook.com/mafie.praha"}
            />
          </li>
          <li>
            <Link
              text={"Discordu"}
              url={"https://discord.com/invite/Ft5dq5cS9u"}
            />
          </li>
          <li>
            telefonu{" "}
            <a className="link" href="tel:776370700">
              776370700
            </a>
          </li>
        </ul>

        <div>
          <a className="link link--with-icon" href="/">
            <img
              className="link__icon"
              src={leftHandIcon}
              alt="zpět na homepage"
            />
            <span className="link__text">Zpátky</span>
          </a>
          <a className="link link--with-icon" href="/vysledky">
            <span className="link__text">Výsledky</span>
            <img
              className="link__icon rotateY-180"
              src={leftHandIcon}
              alt="přejít k výsledkům"
            />
          </a>
        </div>
      </div>
      <div className="page-footer"></div>
    </div>
  );
}
