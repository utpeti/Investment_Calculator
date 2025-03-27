import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ headers, values }) {
  const rows = calculateInvestmentResults(values);
  const initialInvestment =
    rows[0].valueEndOfYear - rows[0].interest - rows[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      {
        <tbody>
          {rows.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;
            const totalAmountInvestment = row.valueEndOfYear - totalInterest;
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      }
    </table>
  );
}
