export default function InputField({
  labelText,
  sentValue,
  initialValue,
  handleMode,
  valueType,
  ...proxyProps
}) {
  return (
    <p>
      <label>{labelText}</label>
      <input
        onChange={(event) => handleMode(event, valueType)}
        type="number"
        value={sentValue ? sentValue : initialValue}
        {...proxyProps}
      />
    </p>
  );
}
