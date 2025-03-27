import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Table from "./components/Table";

function App() {
  const tableHeaders = [
    "Year",
    "Interest (Year)",
    "Total Interest",
    "Duration",
  ];

  return (
    <>
      <Header
        headerText="Investment Calculator"
        imgSource="investment-calculator-logo.png"
        imgAlt="investment-calculator-logo"
        id="header"
      />
      <InputSection />
      <Table headers={tableHeaders} />
    </>
  );
}

export default App;
