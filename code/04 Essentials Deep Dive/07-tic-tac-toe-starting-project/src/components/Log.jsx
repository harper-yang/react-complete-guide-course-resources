export const Log = ({turns}) => {
  return <ol id="log">
    {turns.map(({square: {row, col}, player}) => {
      return <li key={`${row}${col}`}>
        {player} select {row}, {col}
      </li>
    })}
  </ol>
}
