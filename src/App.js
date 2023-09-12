import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div id="homepage">
      <h1 className="title">První výstřel</h1>
      <nav>
        <Link className="nav-item" to="pravidla">
          Pravidla
        </Link>
        <Link className="nav-item" to="registrace">
          Registrace
        </Link>
      </nav>
      <div className="bg"></div>
    </div>
  );
}

export default App;
