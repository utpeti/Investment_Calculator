import { formatter } from "../util/investment";

export default function Table({ headers, rows }) {
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
            <tr>
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
