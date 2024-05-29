import { useState, useRef } from "react";

export default function Player() {
  const playerNameValue = useRef();
  const [displayedName, setDisplayedName] = useState("unknown entity");

  const handleDisplayedNameChange = () => {
    setDisplayedName(playerNameValue.current.value);
    playerNameValue.current.value = "";
  };
  return (
    <section id="player">
      <h2>{`Welcome ${displayedName}`}</h2>
      <p>
        <input ref={playerNameValue} type="text" />
        <button onClick={handleDisplayedNameChange}>Set Name</button>
      </p>
    </section>
  );
}
