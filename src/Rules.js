import leftHandIcon from './images/hand_left_transparent.png'

export default function Rules() {
  return (
    <div>
      <div className="container" id='pravidla'>
      <h1 className='title text-center'><a href="/">První výstřel</a></h1>
      <h2 className="text-center">Pravidla</h2>
      
      <h3>Intro</h3>
      <p>Ve dvacátých a třicátých letech minulého století ovládala Mafie téměř všechna velká města ve Spojených státech. Pražskéá Podsvětí zažívá svůj rozkvět ve století jednadvacátém. A jelikož musí rozšiřovat své řady, otevírá brány nováčkům, kteří se osvědčí.</p>
      <p>Tebe a tvé komplice kontaktoval starý známý s nabídkou, které se neodmítá. Dostali jste jedinečnou šanci připojit se do prestižní organizace, která může změnit váš život. Ale nejdřív musíte dokázat, že na to máte...</p>
      <p>První úkol pro Mafii bude snadný, postupem času ale budou úkoly náročnější a nebezpečnější. Čekají tě obyčejné pochůzky, ale i sbírání informací o konkurenci a vybírání výpalného. Vrcholem zasvěcení do Mafie je ale samozřejmě prácička, kde padne PRVNÍ VÝSTŘEL!</p>
      
      <h3>O co jde?</h3>
      <p>PRVNÍ VÝSTŘEL je akční městská hra, která prověří vaši schopnost spolupráce, rychlost uvažování, prostorovou orientaci a znalost Prahy. Změříte svoje schopnosti s ostatními týmy, objevíte zapadlé kouty našeho hlavního města a pokud splníte všechny úkoly, budete se moct připojit do mafiánské famiíglie!</p>

      <h3>Pro koho hra je?</h3>
      <p>Akce se mohou účastnit jednotlivci, nebo týmy o 2 až 5 hráčích. (Doporučujeme absolvovat trasu ve více lidech, ale pokud jsi vlk samotář, můžeš jít i sám.)</p>

      <h3>Co je cílem hry?</h3>
      <p>Cílem hry je v co nejkratším čase projít všechna stanoviště.</p>

      <h3>Jaký je princip hry?</h3>
      <p>Hra začíná na místě, které obdržíte pár dní před začátkem hry na e-mailovou adresu, kterou jste vyplnili při registraci. (POZOR – ne všechny týmy začínají na stejném místě!) Prosím, buďte na tomto místě alespoň 5 minut před začátkem hry. V 10:00 zadáte do herní aplikace kód z e-mailu a objeví se fotografie prvního stanoviště, které musíte najít. Pokud byste nemohli poznat, o jaké místo se jedná, nezoufejte – aplikace vám po ___ minutách nabídne nápovědu v podobě vyznačené oblasti na mapě. Na každém nalezeném stanovišti je nutné do aplikace zadat šestimístný kód, který odhalí další fotografii. Kód může být schovaný na vyznačeném místě, nebo k jeho získání musíte splnit určitý úkol. Informace, jak získat kód na následujícím stanovišti, bude také zobrazena v aplikaci.</p>

      <h3>Kdy?</h3>
      <p> Hra startuje v sobotu 21. 10. 2023 v 10:00. Na splnění všech úkolů máte 8 hodin, ale většina týmů zvládne trasu rychleji. Konec nastane v 18:00 a pozice cíle bude zveřejněna i pro týmy, které jej ve stanoveném čase nenašly. Od 18:00 následuje v cíli afterpárty a cca v 19:00 proběhne slavnostní vyhlášení výsledků.</p>

      <h3>Kde?</h3>
      <p>Hra se bude odehrávat na území městských částí Praha 1 až Praha 11.</p>

      <h3>Jaká trasa vás čeka?</h3>
      <p>___ kilometrů, ___ stanovišť. Pohybovat se smíte pouze pěšky, či využívat MHD.</p>

      <h3>Kdy je možné se registrovat?</h3>
      <p>Registrace poběží do čtvrtka 19. 10. 2023 do 23 hodin a 59 minut.</p>

      <h3>Startovné</h3>
      <p>240 Kč / tým (platba na účet ________)</p>
      <p>300 Kč / tým (platba v hotovosti v cíli)</p>

      <h3>Co si nezapomenout?</h3>
      <h4>Povinné vybavení:</h4>
      <ul>
        <li>1 nabitý Android telefon</li>
        <li>nainstalovanou nápovědní Android aplikaci (přijde e-mailem pár dní před hrou)</li>
      </ul>
      <h4>Doporučujeme:</h4>
      <ul>
        <li>stažené offline mapy v telefonu</li>
        <li>tramvajenku nebo celodenní jízdenku na Pražskou MHD</li>
        <li>stažený vyhledávač jízdních řádů MHD</li>
      </ul>

      <h3>Další pravidla hry</h3>
      <ul style={{marginBottom: 50}}>
        <li>je nutno projít všechny stanoviště ve správném pořadí</li>
        <li>při zadávání kódu na stanovišti musí být celý tým kompletní (při hledání stanoviště se smíte rozdělit, pokud jej najde jeden člen týmu, musí zde počkat na zbylé členy - před zadáním kódu do aplikace)</li>
        <li>používání Google Street View a fotomap není dovoleno</li>
        <li>používání normálních map (turistické mapy.cz, papírové mapy) naopak doporučujeme</li>
        <li>pohybovat se smíte pouze pěšky, či využívat MHD</li>
        <li>je zakázáno radit se s lidmi mimo Váš tým, či sledovat jiné týmy</li>
        <li>doporučujeme celodenní jízdenku na MHD</li>
      </ul>

      <a className="link link--hand" href='/'><img className="hand" src={leftHandIcon} alt="zpět na homepage"/>zpátky</a>
      </div>
      <div className="page-footer"></div>
    </div>
  );
}
