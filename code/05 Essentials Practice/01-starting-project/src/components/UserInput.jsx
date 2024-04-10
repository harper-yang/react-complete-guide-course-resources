export const UserInput = ({onInputChange, inputData}) => {
  return (<section id="user-input">
    <div className="input-group">
      <p>
        <label>INITIAL INVESTMENT</label>
        <input value={inputData.initialInvestment} type="number" required
               onChange={(event) => onInputChange("initialInvestment", event.target.value)}/>
      </p>
      <p>
        <label>ANNUAL INVESTMENT</label>
        <input value={inputData.annualInvestment} type="number" required
               onChange={(event) => onInputChange("annualInvestment", event.target.value)}/>
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>EXPECTED RETURN</label>
        <input value={inputData.expectedReturn} type="number" required
               onChange={(event) => onInputChange("expectedReturn", event.target.value)}/>
      </p>
      <p>
        <label>DURATION</label>
        <input value={inputData.duration} type="number" required
               onChange={(event) => onInputChange("duration", event.target.value)}/>
      </p>
    </div>
  </section>)
}
