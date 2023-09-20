import "./scss/input.scss";

export default function PlayerForm({
  player,
  handleChange,
  showEmail = false,
}) {
  return (
    <div>
      <div className="input-container">
        <label htmlFor="name">Jméno</label>
        <input
          className="input-text"
          type="text"
          id="name"
          value={player.name}
          onChange={(e) => handleChange({ ...player, name: e.target.value })}
        />
      </div>
      <div className="input-container">
        <label htmlFor="surname">Příjmení</label>
        <input
          className="input-text"
          type="text"
          id="surname"
          value={player.surname}
          onChange={(e) => handleChange({ ...player, surname: e.target.value })}
        />
      </div>
      {showEmail && (
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            className="input-text"
            type="email"
            id="email"
            value={player.email}
            onChange={(e) => handleChange({ ...player, email: e.target.value })}
          />
        </div>
      )}
    </div>
  );
}
