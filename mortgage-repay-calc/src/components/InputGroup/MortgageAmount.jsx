function MortgageAmount() {
  return (
    <div className="mt-4">
      <label className="text-[var(--Slate-700)]" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div className="mt-2 flex items-center rounded-sm border border-[var(--Slate-700)]">
        <span
          className="input-prefix rounded-l-sm border-r-0 bg-[var(--Slate-100)] p-3 font-bold text-[var(--Slate-700)]"
          aria-hidden="true"
        >
          £
        </span>
        <input
          type="text"
          id="mortgage-amount"
          inputMode="numeric"
          className="w-full border-none p-3 font-bold text-[var(--Slate-900)]"
          aria-describedby="mortgage-amount-desc"
          required
        />
        <span id="mortgage-amount-desc" className="sr-only">
          Enter the total mortgage amount in pounds
        </span>
      </div>
    </div>
  );
}

export default MortgageAmount;
