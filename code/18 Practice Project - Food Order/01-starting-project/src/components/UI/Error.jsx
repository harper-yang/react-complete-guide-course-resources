export const Error = ({title, error}) => {
  return (
      <div className="error">
        <h2>{title}</h2>
        <p>{error.message}</p>
      </div>
  )
}
