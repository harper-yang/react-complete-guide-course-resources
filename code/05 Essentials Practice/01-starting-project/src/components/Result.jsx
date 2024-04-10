import {calculateInvestmentResults, formatter} from "../util/investment.js";

export const Result = ({userData}) => {

  const annualData = calculateInvestmentResults(userData)

  return (
      <>
        <table id="result">
          <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
          </thead>
          <tbody>
          {annualData.length > 0 && annualData.map(data => {
            return <tr key={data.year} className="center">
              <td>{formatter.format(data.year)}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(data.annualInvestment)}</td>
            </tr>
          })}
          </tbody>
        </table>
        {annualData.length === 0 && <p className="center">Please enter valid parameters.</p>}
      </>
  )
}
