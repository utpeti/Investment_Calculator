import { useState } from "react";
import InputField from "./InputField";

export default function InputSection({ values }) {
  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(event, valueType) {
    setInvestmentValues({
      ...investmentValues,
      [`${valueType}`]: event.target.value,
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          handleMode={handleChange}
          labelText="Initial investment"
          sentValue={investmentValues.initialInvestment}
          valueType="initialInvestment"
          initialValue="0"
        />
        <InputField
          handleMode={handleChange}
          labelText="Annual Investment"
          sentValue={investmentValues.annualInvestment}
          valueType="annualInvestment"
          initialValue="0"
        />
      </div>
      <div className="input-group">
        <InputField
          handleMode={handleChange}
          labelText="Expected Return"
          sentValue={investmentValues.expectedReturn}
          valueType="expectedReturn"
          initialValue="0"
        />
        <InputField
          handleMode={handleChange}
          labelText="Duration"
          sentValue={investmentValues.duration}
          valueType="duration"
          initialValue="0"
        />
      </div>
    </section>
  );
}
