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
              <td>{row.initialInvestment}</td>
              <td>{row.annualInvestment}</td>
              <td>{row.expectedReturn}</td>
              <td>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      }
    </table>
  );
}
