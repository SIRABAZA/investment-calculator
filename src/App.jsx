import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";
function App() {
  const [input, setInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  const isValidInput = input.duration >= 1 && input.initialInvestment > 0;

  function handleChange(inputIdentifer, newValue) {
    setInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifer]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <InputGroup input={input} onChange={handleChange} />

      {!isValidInput && (
        <p className="center">Please enter a valide value greater than "0"</p>
      )}
      {isValidInput && <Result input={input} />}
    </>
  );
}

export default App;
