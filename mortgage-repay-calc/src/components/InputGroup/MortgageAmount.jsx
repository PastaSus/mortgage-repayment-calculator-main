function MortgageAmount({ register, errors }) {
  return (
    <div className="mt-4">
      <label className="text-[var(--Slate-700)]" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div
        className={`group mt-2 flex items-center rounded-sm border focus-within:border-[var(--Lime)] hover:border-[var(--Slate-900)] focus:border-[var(--Lime)] ${
          errors.amount ? "border-[var(--Red)]" : "border-[var(--Slate-700)] "
        }`}
      >
        <span
          className={`input-prefix rounded-l-sm border-r-0 p-3 font-bold group-focus-within:bg-[var(--Lime)] group-focus-within:text-[var(--Slate-900)] ${
            errors.amount
              ? "bg-[var(--Red)] text-[var(--White)]"
              : "bg-[var(--Slate-100)] text-[var(--Slate-700)]"
          }`}
          aria-hidden="true"
        >
          £
        </span>
        <input
          type="text"
          id="mortgage-amount"
          inputMode="numeric"
          aria-invalid={!!errors.amount}
          {...register("amount", {
            required: "Amount is required",
            validate: (value) => {
              const clean = value.replace(/,/g, "");

              if (isNaN(clean)) return "Amount must be a number";
              if (parseFloat(clean) <= 0)
                return "Amount must be greater than 0";
              if (parseFloat(clean) > 10000000)
                return "Amount must not exceed £10,000,000";
              return true;
            },
          })}
          className="w-full border-none p-3 font-bold text-[var(--Slate-900)] outline-none"
          aria-describedby={`${errors.amount ? "amount-error" : "mortgage-amount-desc"}`}
          required
        />
        <span id="mortgage-amount-desc" className="sr-only">
          Enter the total mortgage amount in pounds
        </span>
      </div>
      {errors.amount && (
        <p id="amount-error" className="text-sm text-[var(--Red)]" role="alert">
          {errors.amount.message}
        </p>
      )}
    </div>
  );
}

export default MortgageAmount;
