export default function Header({
  headerText,
  imgSource,
  imgAlt,
  ...proxyProps
}) {
  return (
    <header {...proxyProps}>
      <img src={imgSource} alt={imgAlt} />
      <h1>{headerText}</h1>
    </header>
  );
}
