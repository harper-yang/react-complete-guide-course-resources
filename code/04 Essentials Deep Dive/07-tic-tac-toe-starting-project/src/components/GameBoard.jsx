export const GameBoard = ({onSelectSquare, gameBoard}) => {

  return (<ol id="game-board">
    {gameBoard.map((row, rowIndex) => {
      return <li key={rowIndex}>
        <ol>
          {row.map((cell, cellIndex) => {
            return (<li key={cellIndex}>
              <button onClick={() => onSelectSquare(rowIndex, cellIndex)} disabled={!!cell}>{cell}</button>
            </li>)
          })}
        </ol>
      </li>
    })}
  </ol>);
}
