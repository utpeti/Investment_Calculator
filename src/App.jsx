import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Table from "./components/Table";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(event, valueType) {
    setInvestmentValues({
      ...investmentValues,
      [`${valueType}`]: event.target.value,
    });
  }

  const tableValues = calculateInvestmentResults(investmentValues);

  const tableHeaders = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Captital",
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
      <Table headers={tableHeaders} rows={tableValues} />
    </>
  );
}

export default App;
