function MortgageTerm({ register, errors }) {
  return (
    <div className="mt-4 rounded-sm">
      <label htmlFor="mortgage-term" className="text-[var(--Slate-700)]">
        Mortgage Term
      </label>
      <div
        className={`mt-2 flex items-center rounded-sm border ${
          errors.term ? "border-[var(--Red)]" : "border-[var(--Slate-700)]"
        }`}
      >
        <span id="mortgage-term-desc" className="sr-only">
          Enter the mortgage term in years, between 1 and 40
        </span>
        <input
          type="number"
          id="mortgage-term"
          name="mortgage-term"
          aria-describedby={`${errors.term ? "term-error" : "mortgage-term-desc"}`}
          min="1"
          max="40"
          required
          {...register("term", { required: "Term is required" })}
          className="w-full rounded-sm border-none p-3 font-bold text-[var(--Slate-900)]"
        />
        <span
          className={`input-suffix rounded-r-sm border-r-0 p-3 font-bold ${errors.term ? "bg-[var(--Red)] text-[var(--White)]" : "bg-[var(--Slate-100)] text-[var(--Slate-700)]"}`}
          aria-hidden="true"
        >
          years
        </span>
      </div>
      {errors.term && (
        <p id="term-error" className="text-sm text-[var(--Red)]">
          {errors.term.message}
        </p>
      )}
    </div>
  );
}

export default MortgageTerm;
