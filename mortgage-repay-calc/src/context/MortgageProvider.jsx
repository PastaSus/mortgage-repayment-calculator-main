import { useState } from "react";
import { MortgageContext } from "./MortgageContext";

export function MortgageProvider({ children }) {
  const [results, setResults] = useState(null);

  const updateResults = (data) => setResults(data);
  const clearResults = () => setResults(null);

  return (
    <MortgageContext
      value={{
        results,
        updateResults,
        clearResults,
      }}
    >
      {children}
    </MortgageContext>
  );
}
