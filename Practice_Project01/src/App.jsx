import Header from "./Header.jsx";
import InvestmentInput from "./InvestmentInput.jsx";
import Result from "./Result.jsx";
import { useState } from "react";

function App() {
  const [investmentInput, setInvestmentInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setInvestmentInput((prevInvestmentInput) => {
      return {
        ...prevInvestmentInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  }

  console.log(investmentInput);

  return (
    <>
      <Header />
      <InvestmentInput
        investmentInput={investmentInput}
        handleChange={handleChange}
      />
      <Result investmentInput={investmentInput} />
    </>
  );
}

export default App;
