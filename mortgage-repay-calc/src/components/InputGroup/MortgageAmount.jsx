function MortgageAmount({ register, errors }) {
  return (
    <div className="mt-4">
      <label className="text-[var(--Slate-700)]" htmlFor="mortgage-amount">
        Mortgage Amount
      </label>
      <div
        className={`mt-2 flex items-center rounded-sm border ${
          errors.amount ? "border-[var(--Red)]" : "border-[var(--Slate-700)]"
        }`}
      >
        <span
          className={`input-prefix rounded-l-sm border-r-0 p-3 font-bold ${
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
          {...register("amount", { required: "Amount is required" })}
          className="w-full border-none p-3 font-bold text-[var(--Slate-900)]"
          aria-describedby={`${errors.amount ? "amount-error" : "mortgage-amount-desc"}`}
          required
        />
        <span id="mortgage-amount-desc" className="sr-only">
          Enter the total mortgage amount in pounds
        </span>
      </div>
      {errors.amount && (
        <p id="amount-error" className="text-sm text-[var(--Red)]">
          {errors.amount.message}
        </p>
      )}
    </div>
  );
}

export default MortgageAmount;
