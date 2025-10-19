function MortgageTerm() {
  return (
    <div className="mt-4 rounded-sm">
      <label htmlFor="mortgage-term" className="text-[var(--Slate-700)]">
        Mortgage Term
      </label>
      <div className="mt-2 flex items-center rounded-sm border border-[var(--Slate-700)]">
        <span id="mortgage-term-desc" className="sr-only">
          Enter the mortgage term in years, between 1 and 40
        </span>
        <input
          type="number"
          id="mortgage-term"
          name="mortgage-term"
          aria-describedby="mortgage-term-desc"
          min="1"
          max="40"
          required
          className="w-full rounded-sm border-none p-3 font-bold text-[var(--Slate-900)]"
        />
        <span
          className="input-suffix rounded-r-sm border-r-0 bg-[var(--Slate-100)] p-3 font-bold text-[var(--Slate-700)]"
          aria-hidden="true"
        >
          years
        </span>
      </div>
    </div>
  );
}

export default MortgageTerm;
