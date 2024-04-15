import {useRef, useState} from "react";

export default function Player() {

  const playerName = useRef();

  const [enteredUserName, setEnteredUserName] = useState(null);

  const handleClick = () => {
    setEnteredUserName(playerName.current.value);
  }

  return (
      <section id="player">
        <h2>Welcome {enteredUserName ?? "unknown entity"}</h2>
        <p>
          <input type="text" ref={playerName}/>
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
  );
}
