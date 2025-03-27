import InputField from "./InputField";

export default function InputSection({ values, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField
          handleMode={handleChange}
          labelText="Initial investment"
          sentValue={values.initialInvestment}
          valueType="initialInvestment"
          initialValue="0"
        />
        <InputField
          handleMode={handleChange}
          labelText="Annual Investment"
          sentValue={values.annualInvestment}
          valueType="annualInvestment"
          initialValue="0"
        />
      </div>
      <div className="input-group">
        <InputField
          handleMode={handleChange}
          labelText="Expected Return"
          sentValue={values.expectedReturn}
          valueType="expectedReturn"
          initialValue="0"
        />
        <InputField
          handleMode={handleChange}
          labelText="Duration"
          sentValue={values.duration}
          valueType="duration"
          initialValue="0"
        />
      </div>
    </section>
  );
}
