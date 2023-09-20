import "./scss/input.scss";
import "./scss/Registration.scss";

import { useState } from "react";
import PlayerForm from "./PlayerForm";
import PlayerHead from "./PlayerHead";

let playerTemplate = {
  name: "",
  surname: "",
  email: "",
};

export default function Registration() {
  const [isSinglePlayer, setIsSinglePlayer] = useState(null);
  const [teamName, setTeamName] = useState("");
  const [captain, setCaptain] = useState(playerTemplate);
  const [teamPlayers, setTeamPlayers] = useState([playerTemplate]);
  const [isLookingForPlayers, setIsLookingForPlayers] = useState(false);

  function handleTeamPlayerChange(player) {
    const newState = teamPlayers.slice();
    newState[player.id] = player;
    setTeamPlayers(newState);
  }

  function addTeamPlayer() {
    const newState = teamPlayers.slice();
    newState.push(playerTemplate);
    setTeamPlayers(newState);
  }

  function deleteTeamPlayer(i) {
    const copy = teamPlayers.slice();
    copy.splice(i, 1);
    setTeamPlayers(copy);
  }

  async function submit() {
    let team = [
      {
        name: captain.name,
        surname: captain.surname,
        email: captain.email,
      },
    ];

    if (!isSinglePlayer) {
      team.push(...teamPlayers);
    }

    const postBody = {
      teamName: teamName,
      isLookingForPlayers: isLookingForPlayers,
      players: team,
    };

    try {
      const response = await fetch("http://api-prvni-vystrel.podsveti.cz/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });

      const result = await response.json();

      if (result.status === 200) {
        alert("Děkujeme za registraci. Brzy se Ti ozveme.");
        window.location.href = "http://prvni-vystrel.podsveti.cz/";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Došlo k chybě :-( Prosím, opakujte akci.");
      window.location.href = "http://prvni-vystrel.podsveti.cz/registrace";
    }
  }

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
                readOnly={true}
              />
              <label htmlFor="single">Jsem sám</label>
            </div>
            <PlayerHead />
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
                readOnly={true}
              />
              <label htmlFor="multi">Je nás víc</label>
            </div>
            <div className="head-container--multi">
              <PlayerHead />
              <PlayerHead />
              <PlayerHead />
            </div>
          </div>
        </div>

        {isSinglePlayer !== null && (
          <div className="input-container">
            <label htmlFor="teamName">Název týmu</label>
            <input
              className="input-text"
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>
        )}

        {isSinglePlayer !== null && (
          <div>
            <PlayerForm
              player={captain}
              handleChange={setCaptain}
              showEmail={true}
            />
          </div>
        )}

        {isSinglePlayer === false && (
          <div>
            {teamPlayers.map((player, i) => (
              <>
                <p>
                  {i + 1}. komplic{" "}
                  {teamPlayers.length > 1 && (
                    <button on onClick={() => deleteTeamPlayer(i)}>
                      X
                    </button>
                  )}
                </p>
                <PlayerForm
                  key={i}
                  player={{ ...player, id: i }}
                  handleChange={handleTeamPlayerChange}
                />
              </>
            ))}
          </div>
        )}

        {isSinglePlayer === false && teamPlayers.length < 4 && (
          <div>
            <button onClick={() => addTeamPlayer()}>+ Přidat komplice</button>
          </div>
        )}

        {isSinglePlayer !== null && teamPlayers.length < 4 && (
          <div>
            <p>Hledáš komplice? Stačí říct, zbytek zařídíme.</p>
            <input
              type="checkbox"
              id="isLookingForPlayers"
              checked={isLookingForPlayers}
              onChange={(e) => setIsLookingForPlayers(e.target.checked)}
            />
            <label htmlFor="isLookingForPlayers">Ano, chci komplice!</label>
          </div>
        )}

        {isSinglePlayer !== null && (
          <div>
            <button onClick={() => submit()}>Registrovat</button>
          </div>
        )}
      </div>
    </div>
  );
}
