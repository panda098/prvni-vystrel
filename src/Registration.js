import "./scss/Registration.scss";
import head from "./images/head.png";

import { useState } from "react";

function Registrace() {
  const [isSinglePlayer, setIsSinglePlayer] = useState(null);

  return (
    <div id="pravidla">
      <div className="container">
        <h1 className="title text-center">
          <a href="/">První výstřel</a>
        </h1>
        <h2 className="text-center">Registrace</h2>

        <div className="players-row">
          <div
            className={`players-container ${
              isSinglePlayer === false ? "is-inactive" : ""
            }`}
            onClick={() => setIsSinglePlayer(true)}
          >
            <div>
              <input
                className="players-input"
                type="radio"
                id="single"
                name="players"
                value="single"
                checked={isSinglePlayer}
              />
              <label for="single">Jsem sám</label>
            </div>
            <img className="head" src={head} />
          </div>

          <div
            className={`players-container ${
              isSinglePlayer === true ? "is-inactive" : ""
            }`}
            onClick={() => setIsSinglePlayer(false)}
          >
            <div>
              <input
                className="players-input"
                type="radio"
                id="multi"
                name="players"
                value="multi"
                checked={isSinglePlayer === false}
              />
              <label for="multi">Je nás víc</label>
            </div>
            <div className="head-container--multi">
              <img className="head" src={head} />
              <img className="head" src={head} />
              <img className="head" src={head} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registrace;
