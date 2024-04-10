import {useState} from "react";

export const Player = ({initialName, symbol, isActive, onNameChange}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(initialName);

  const handleClick = () => {
    setIsEdit((isEdit) => !isEdit);
  }

  const handleChange = (event) => {
    setName(event.target.value);

    onNameChange(symbol, event.target.value)
  }

  return (
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {!!isEdit ? <input type="text" required value={name} onChange={handleChange}/> :
              <span className="player-name">{name}</span>}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEdit ? "save" : "edit"}</button>
      </li>
  );
};
