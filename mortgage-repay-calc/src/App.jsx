import { useContext } from "react";
import { MortgageContext } from "./context/MortgageContext";

import MortgageCalculatorForm from "./components/MortgageCalculatorForm";
import MortgageResults from "./components/MortgageResults";

function App() {
  const { clearResults } = useContext(MortgageContext);

  return (
    <div className="lg:grid lg:min-h-dvh lg:place-content-center">
      <main className="bg-[var(--White)] lg:grid lg:max-w-235 lg:grid-cols-2 lg:rounded-3xl">
        <div className="px-6 py-7 lg:px-9 lg:py-9">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h1 className="m-0 text-2xl text-[var(--Slate-900)]">
              Mortgage Calculator
            </h1>
            <button
              type="button"
              onClick={clearResults}
              className="mt-2 cursor-pointer border-none bg-transparent p-0 text-[var(--Slate-700)] underline lg:mt-0"
            >
              Clear All
            </button>
          </div>
          <MortgageCalculatorForm></MortgageCalculatorForm>
        </div>
        <MortgageResults></MortgageResults>
      </main>
    </div>
  );
}

export default App;
