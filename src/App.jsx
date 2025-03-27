import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Table from "./components/Table";
import { calculateInvestmentResults } from "./util/investment";

let tableValues = [];

function App() {
  function handleChange(event, valueType) {
    setInvestmentValues({
      ...investmentValues,
      [`${valueType}`]: event.target.value,
    });

    tableValues = calculateInvestmentResults(investmentValues);
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

  tableValues.map((row) => console.log(row));

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
