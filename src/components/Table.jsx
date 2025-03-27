import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({ headers, values }) {
  const rows = calculateInvestmentResults(values);

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
          {rows.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(100)}</td>
              <td>{formatter.format(row.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      }
    </table>
  );
}
