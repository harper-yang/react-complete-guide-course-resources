import {Player} from "./components/Player.jsx";
import {GameBoard} from "./components/GameBoard.jsx";
import {useState} from "react";
import {Log} from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import {GameOver} from "./components/GameOver.jsx";

const INITIAL_BOARD = [[null, null, null], [null, null, null], [null, null, null]]

const PLAYER = {
  O: "PLAYER1",
  X: "PLAYER2",
}

const deriveActivePlayer = (gameTurns) => {
  let curPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    curPlayer = "O";
  }
  return curPlayer;
}

const deriveWinner = (gameBoard, playerName) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol !== null && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = playerName[firstSquareSymbol];
    }
  }
  return winner;
}

const deriveGameBoard = (gameTurns) => {
  const gameBoard = [...INITIAL_BOARD.map(arr => [...arr])];

  for (const turn of gameTurns) {
    const {square: {row, col}, player} = turn;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {

  const [playerName, setPlayerName] = useState(PLAYER)

  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerName);
  let isDraw = gameTurns.length === 9 && !winner;


  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((preGameTurn) => {

      const curPlayer = deriveActivePlayer(preGameTurn);

      const newTurn = {
        square: {
          row: rowIndex, col: colIndex,
        }, player: curPlayer
      };

      return [newTurn, ...preGameTurn];
    })

  }

  const handleRematch = () => {
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol, playerName) => {
    setPlayerName((prePlayerName) => {
      return {...prePlayerName, [symbol]: playerName}
    })
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName={PLAYER.X} symbol="X" isActive={activePlayer === "X"}
                onNameChange={handlePlayerNameChange}/>
        <Player initialName={PLAYER.O} symbol="O" isActive={activePlayer === "O"}
                onNameChange={handlePlayerNameChange}/>
      </ol>
      {(winner || isDraw) &&
          <GameOver winner={winner}
                    onRematch={handleRematch}/>}
      <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
    </div>
    <Log turns={gameTurns}/>
  </main>);
}

export default App;
