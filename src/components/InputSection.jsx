import InputField from "./InputField";

export default function InputSection() {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputField labelText="Initial investment" initialValue="0" />
        <InputField labelText="Annual Investment" initialValue="0" />
      </div>
      <div className="input-group">
        <InputField labelText="Expected Return" initialValue="0" />
        <InputField labelText="Duration" initialValue="0" />
      </div>
    </section>
  );
}
