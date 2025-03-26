import Header from "./components/Header";
import InputSection from "./components/InputSection";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header
        headerText="Investment Calculator"
        imgSource="investment-calculator-logo.png"
        imgAlt="investment-calculator-logo"
        id="header"
      />
      <InputSection />
      <Table />
    </>
  );
}

export default App;
