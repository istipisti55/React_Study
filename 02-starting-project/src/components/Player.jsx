import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const playerName = useRef();

  function handleClick(event) {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
    console.log(playerName);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
