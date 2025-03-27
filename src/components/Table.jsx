export default function Table({ headers }) {
  return (
    <table id="result">
      <thead>
        <tr>
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
}
