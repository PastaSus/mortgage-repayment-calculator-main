function MortgageInterestRate({ register, errors }) {
  return (
    <div className="mt-4 flex flex-col rounded-sm">
      <label htmlFor="interest-rate" className="text-[var(--Slate-700)]">
        Interest Rate
      </label>
      <div
        className={`group mt-2 flex items-center rounded-sm border focus-within:border-[var(--Lime)] hover:border-[var(--Slate-900)] focus:border-[var(--Lime)] ${
          errors.interestRate
            ? "border-[var(--Red)]"
            : "border-[var(--Slate-700)]"
        }`}
      >
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
          aria-describedby={`${errors.interestRate ? "interest-rate-error" : "interest-rate-desc"}`}
          required
          {...register("interestRate", {
            required: "Interest rate is required",
            validate: (value) => {
              const clean = value.replace(/,/g, "");
              if (isNaN(clean)) return "Interest rate must be a number";
              const num = parseFloat(clean);
              if (num <= 0) return "Interest rate must be greater than 0";
              if (num > 100) return "Interest rate must not exceed 100%";
              return true;
            },
          })}
          className="w-full rounded-sm border-none p-3 font-bold text-[var(--Slate-900)] outline-none"
        />
        <span
          className={`input-suffix rounded-r-sm border-r-0 p-3 font-bold group-focus-within:bg-[var(--Lime)] group-focus-within:text-[var(--Slate-900)] ${errors.interestRate ? "bg-[var(--Red)] text-[var(--White)]" : "bg-[var(--Slate-100)] text-[var(--Slate-700)]"}`}
          aria-hidden="true"
        >
          %
        </span>
      </div>
      {errors.interestRate && (
        <p id="interest-rate-error" className="text-sm text-[var(--Red)]">
          {errors.interestRate.message}
        </p>
      )}
    </div>
  );
}

export default MortgageInterestRate;
