function MortgageInterestRate() {
  return (
    <div className="mt-4 flex flex-col rounded-sm">
      <label htmlFor="interest-rate" className="text-[var(--Slate-700)]">
        Interest Rate
      </label>
      <div className="mt-2 flex items-center rounded-sm border border-[var(--Slate-700)]">
        <span id="interest-rate-desc" className="sr-only">
          Enter the annual interest rate as a percentage
        </span>
        <input
          type="number"
          id="interest-rate"
          name="interest-rate"
          step="0.01"
          min="0"
          max="20"
          aria-describedby="interest-rate-desc"
          required
          className="w-full rounded-sm border-none p-3 font-bold text-[var(--Slate-900)]"
        />
        <span
          className="input-suffix rounded-r-sm border-r-0 bg-[var(--Slate-100)] p-3 font-bold text-[var(--Slate-700)]"
          aria-hidden="true"
        >
          %
        </span>
      </div>
    </div>
  );
}

export default MortgageInterestRate;
