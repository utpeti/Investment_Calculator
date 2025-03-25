import Header from "./components/Header";
import InputSection from "./components/InputSection";

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
    </>
  );
}

export default App;
