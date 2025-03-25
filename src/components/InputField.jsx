export default function InputField({ labelText, initialValue, ...proxyProps }) {
  return (
    <p>
      <label>{labelText}</label>
      <input type="number" value={initialValue} />
    </p>
  );
}
