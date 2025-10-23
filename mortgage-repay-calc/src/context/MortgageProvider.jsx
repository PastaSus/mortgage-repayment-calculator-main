import { useState } from "react";
import { MortgageContext } from "./MortgageContext";

export function MortgageProvider({ children }) {
  const [results, setResults] = useState(null);
  const [resetForm, setResetForm] = useState(null); // ⬅️ store reset()

  const updateResults = (data) => setResults(data);
  const clearResults = () => setResults(null);

  // global clear-all that can trigger both reset and clearResults
  const clearAll = () => {
    if (resetForm) resetForm(); // call reset() if available
    clearResults();
  };

  return (
    <MortgageContext
      value={{
        results,
        updateResults,
        clearResults,
        clearAll, // ⬅️ new global function
        setResetForm,
      }}
    >
      {children}
    </MortgageContext>
  );
}
