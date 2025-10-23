function MortgageType({ register, errors }) {
  return (
    <fieldset className="m-0 mt-4 border-none p-0">
      <legend className="text-[var(--Slate-700)]">Mortgage Type</legend>
      <div className="mt-2 grid gap-2">
        <label className="radio__control grid cursor-pointer grid-cols-[1em_auto] gap-[0.1em] rounded-sm border border-[var(--Slate-500)] px-4 py-2 has-[input:checked]:border-[var(--Lime)] has-[input:checked]:bg-[var(--Lime)]/10">
          <input
            type="radio"
            value="Repayment"
            name="mortgageType"
            className="relative m-0 grid h-[0.7em] w-[0.7em] translate-y-[0.075em] cursor-pointer appearance-none place-content-center rounded-full border-1 border-[var(--Slate-700)] bg-white text-[currentColor] transition-transform duration-120 before:h-[0.5em] before:w-[0.5em] before:scale-0 before:rounded-full before:shadow-[inset_1em_1em_var(--Lime)] before:ease-in-out checked:border-[var(--Lime)] checked:bg-white checked:before:scale-100"
            {...register("mortgageType", {
              required: "Mortagage type is required",
            })}
            aria-describedby={errors.type ? "mortgage-type-error" : undefined}
          />

          <span className="text-lg font-medium text-[var(--Slate-900)]">
            Repayment
          </span>
        </label>
        <label className="radio__control grid cursor-pointer grid-cols-[1em_auto] gap-[0.1em] rounded-sm border border-[var(--Slate-500)] px-4 py-2 has-[input:checked]:border-[var(--Lime)] has-[input:checked]:bg-[var(--Lime)]/10">
          <input
            type="radio"
            value="Interest Only"
            name="mortgageType"
            className="relative m-0 grid h-[0.7em] w-[0.7em] translate-y-[0.075em] cursor-pointer appearance-none place-content-center rounded-full border-1 border-[var(--Slate-700)] bg-white text-[currentColor] transition-transform duration-120 before:h-[0.5em] before:w-[0.5em] before:scale-0 before:rounded-full before:shadow-[inset_1em_1em_var(--Lime)] before:ease-in-out checked:border-[var(--Lime)] checked:bg-white checked:before:scale-100"
            {...register("mortgageType", {
              required: "Mortagage type is required",
            })}
            aria-describedby={errors.type ? "mortgage-type-error" : undefined}
          />
          <span className="text-lg font-medium text-[var(--Slate-900)]">
            Interest Only
          </span>
        </label>
      </div>
      {errors.type && (
        <p id="mortgage-type-error" className="text-sm text-[var(--Red)]">
          {errors.type.message}
        </p>
      )}
    </fieldset>
  );
}

export default MortgageType;
