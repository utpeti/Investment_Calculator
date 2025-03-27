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
      {/*
        <tbody>
          {rows.map((row) => (
            <tr>
              {row.map((data) => (
                <td>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      */}
    </table>
  );
}
