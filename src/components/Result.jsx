import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
  const restult = calculateInvestmentResults(input);
  const initialInvestment =
    restult[0].valueEndOfYear -
    restult[0].interest -
    restult[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {restult.map((cur) => {
          const totaInterest =
            cur.valueEndOfYear -
            cur.annualInvestment * cur.year -
            initialInvestment;
          const totalAmoutInvested = cur.valueEndOfYear - totaInterest;
          return (
            <tr key={cur.year}>
              <td>{cur.year}</td>
              <td>{formatter.format(cur.valueEndOfYear)}</td>
              <td>{formatter.format(cur.interest)}</td>
              <td>{formatter.format(totaInterest)}</td>
              <td>{formatter.format(totalAmoutInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
