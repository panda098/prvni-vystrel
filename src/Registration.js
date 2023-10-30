import "./scss/Registration.scss";

export default function Registration() {
  return (
    <div id="registrace">
      <div className="container">
        <h1 className="title text-center">
          <a href="/">První výstřel</a>
        </h1>
        <h2 className="text-center">Registrace</h2>
        <section className="text-center">
          <p>Registrace do letošního ročníku byly ukončeny.</p>
          <p>Všem hráčům děkujeme za účast a těšíme se na další ročník!</p>
          <p>
            Mezitím si můžete prohlédnout <a href="/vysledky">výsledky</a>{" "}
            posledního ročníku :-)
          </p>
        </section>
      </div>
      <div className="page-footer"></div>
    </div>
  );
}
