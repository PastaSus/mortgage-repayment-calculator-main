function MortgageTerm({ register, errors }) {
  return (
    <div className="mt-4 rounded-sm">
      <label htmlFor="mortgage-term" className="text-[var(--Slate-700)]">
        Mortgage Term
      </label>
      <div
        className={`group mt-2 flex items-center rounded-sm border focus-within:border-[var(--Lime)] hover:border-[var(--Slate-900)] focus:border-[var(--Lime)] ${
          errors.term ? "border-[var(--Red)]" : "border-[var(--Slate-700)]"
        }`}
      >
        <span id="mortgage-term-desc" className="sr-only">
          Enter the mortgage term in years, between 1 and 40
        </span>
        <input
          type="text"
          id="mortgage-term"
          name="mortgage-term"
          aria-invalid={!!errors.term}
          aria-describedby={`${errors.term ? "term-error" : "mortgage-term-desc"}`}
          min="1"
          max="40"
          required
          {...register("term", {
            required: "Term is required",
            validate: (value) => {
              const clean = value.replace(/,/g, "").trim();

              if (!clean) return "Term is required";
              if (!/^[\d.]+$/.test(clean)) return "Term must be a number";

              if (clean.includes(".")) return "Term must be a whole number";

              const num = parseInt(clean, 10);
              if (num < 1) return "Term must be at least 1 year";
              if (num > 40) return "Term must not exceed 40 years";
              return true;
            },
          })}
          className="w-full rounded-sm border-none p-3 font-bold text-[var(--Slate-900)] outline-none"
        />
        <span
          className={`input-suffix rounded-r-sm border-r-0 p-3 font-bold group-focus-within:bg-[var(--Lime)] group-focus-within:text-[var(--Slate-900)] ${errors.term ? "bg-[var(--Red)] text-[var(--White)]" : "bg-[var(--Slate-100)] text-[var(--Slate-700)]"}`}
          aria-hidden="true"
        >
          years
        </span>
      </div>
      {errors.term && (
        <p id="term-error" className="text-sm text-[var(--Red)]" role="alert">
          {errors.term.message}
        </p>
      )}
    </div>
  );
}

export default MortgageTerm;
