import MortgageCalculatorForm from "./components/MortgageCalculatorForm";
import MortgageResults from "./components/MortgageResults";

function App() {
  return (
    <div className="lg:grid lg:min-h-dvh lg:place-content-center">
      <main className="bg-[var(--White)] lg:grid lg:max-w-235 lg:grid-cols-2 lg:rounded-3xl">
        <div className="px-6 py-7 lg:px-9 lg:py-9">
          <MortgageCalculatorForm></MortgageCalculatorForm>
        </div>
        <MortgageResults></MortgageResults>
      </main>
    </div>
  );
}

export default App;
