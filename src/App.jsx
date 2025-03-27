import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Table from "./components/Table";

function App() {
  function handleChange(event, valueType) {
    setInvestmentValues({
      ...investmentValues,
      [`${valueType}`]: event.target.value,
    });
  }

  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

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
      <InputSection values={investmentValues} handleChange={handleChange} />
      <Table headers={tableHeaders} />
    </>
  );
}

export default App;
