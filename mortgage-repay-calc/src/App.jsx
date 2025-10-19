// import { useState } from "react";
import MortgageCalculatorForm from "./components/MortgageCalculatorForm";
import MortgageResults from "./components/MortgageResults";

function App() {
  return (
    <div className="">
      <main className="grid lg:max-w-4xl lg:grid-cols-2 lg:items-center lg:rounded-3xl lg:bg-[var(--White)]">
        <div className="px-6 py-7">
          <div className="">
            <h1 className="m-0 text-2xl text-[var(--Slate-900)]">
              Mortgage Calculator
            </h1>
            <button
              type="button"
              className="mt-2 border-none bg-transparent p-0 text-[var(--Slate-700)] underline"
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
