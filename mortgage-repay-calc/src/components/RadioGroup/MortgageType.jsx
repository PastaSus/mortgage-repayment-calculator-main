function MortgageType() {
  return (
    <fieldset className="m-0 mt-4 border-none p-0">
      <legend className="text-[var(--Slate-700)]">Mortgage Type</legend>
      <div className="mt-2 grid gap-2">
        <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-[var(--Slate-500)] px-4 py-2 has-[input:checked]:border-[var(--Lime)] has-[input:checked]:bg-[var(--Lime)]/10">
          <input
            type="radio"
            value="Repayment"
            name="mortgageType"
            className="relative m-0 h-5 w-5 cursor-pointer rounded-full border-1 border-[var(--Slate-500)] bg-white accent-[var(--Lime)] checked:border-[6px] checked:border-[var(--White)] checked:bg-white"
          />
          <span className="text-lg font-medium text-[var(--Slate-900)]">
            Repayment
          </span>
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-sm border border-[var(--Slate-500)] px-4 py-2 has-[input:checked]:border-[var(--Lime)] has-[input:checked]:bg-[var(--Lime)]/10">
          <input
            type="radio"
            value="Interest Only"
            name="mortgageType"
            className="relative m-0 h-5 w-5 cursor-pointer rounded-full border-1 border-solid border-[var(--Slate-700)] bg-white accent-[var(--Lime)] checked:border-[6px] checked:border-[var(--White)] checked:bg-white"
          />
          <span className="text-lg font-medium text-[var(--Slate-900)]">
            Interest Only
          </span>
        </label>
      </div>
    </fieldset>
  );
}

export default MortgageType;
