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
              <td>{row.interest}</td>
              <td>{row.valueEndOfYear}</td>
              <td>{row.annualInvestment}</td>
            </tr>
          ))}
        </tbody>
      }
    </table>
  );
}
