import "./scss/App.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="homepage">
      <div className="container">
        <div className="homepage-content">
          <h1 className="title text-center">První výstřel</h1>
          <p style={{ marginTop: 0 }}>21. 10. 2023</p>
          <nav>
            <Link className="nav-item" to="pravidla">
              Pravidla
            </Link>
            {/* <Link className="nav-item" to="vysledky">
              Výsledky
            </Link> */}
          </nav>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
}

export default App;
