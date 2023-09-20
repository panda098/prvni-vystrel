import "./scss/App.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="homepage">
      <div className="container">
        <div className="homepage-content">
          <h1 className="title text-center">První výstřel</h1>
          <nav>
            <Link className="nav-item" to="pravidla">
              Pravidla
            </Link>
            <Link className="nav-item" to="registrace">
              Registrace
            </Link>
          </nav>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
}

export default App;
