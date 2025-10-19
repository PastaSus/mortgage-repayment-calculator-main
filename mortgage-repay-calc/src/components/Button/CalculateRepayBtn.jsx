import calculatorIcon from "../../assets/images/icon-calculator.svg";

function CalculateRepayBtn() {
  return (
    <button
      className="mt-5 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border-none bg-[var(--Lime)] px-6 py-3 font-bold text-[var(--Slate-900)] lg:mt-8 lg:w-auto lg:px-8"
      type="submit"
    >
      <img src={calculatorIcon} alt="" />
      <span>Calculate Repayments</span>
    </button>
  );
}

export default CalculateRepayBtn;
