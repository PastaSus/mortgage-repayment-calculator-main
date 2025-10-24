import MortgageAmount from "./InputGroup/MortgageAmount";
import MortgageTerm from "./InputGroup/MortgageTerm";
import MortgageInterestRate from "./InputGroup/MortgageInterestRate";
import MortgageType from "./RadioGroup/MortgageType";
import CalculateRepayBtn from "./Button/CalculateRepayBtn";

import { useForm } from "react-hook-form";
import { MortgageContext } from "../context/MortgageContext";
import { useContext } from "react";

// 1st step: re-render ui components border have error below input textboxes / radio(radio border still the same but we shall) in red color
function MortgageCalculatorForm() {
  const { updateResults, clearResults } = useContext(MortgageContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const amount = parseFloat(data.amount.replace(/,/g, ""));
    const rate = parseFloat(data.interestRate) / 100 / 12;
    const months = parseInt(data.term) * 12;

    let monthlyPayment;

    if (data.mortgageType === "Interest Only") {
      monthlyPayment = amount * rate;
    } else {
      monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    }

    const total = monthlyPayment * months;

    updateResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      total: total.toFixed(2),
    });
  };

  // ✅ place this below your onSubmit function
  const handleClearAll = () => {
    reset(); // clears all input + radio fields
    clearResults(); // clears the results component
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="lg:flex lg:items-center lg:justify-between">
        <h1 className="m-0 text-2xl text-[var(--Slate-900)]">
          Mortgage Calculator
        </h1>
        <button
          type="button"
          onClick={handleClearAll}
          className="mt-2 cursor-pointer border-none bg-transparent p-0 text-[var(--Slate-700)] underline hover:text-[var(--Slate-900)] lg:mt-0"
        >
          Clear All
        </button>
      </div>
      <MortgageAmount register={register} errors={errors}></MortgageAmount>
      <div className="grid lg:grid-cols-2 lg:items-end lg:gap-6">
        <MortgageTerm register={register} errors={errors}></MortgageTerm>
        <MortgageInterestRate
          register={register}
          errors={errors}
        ></MortgageInterestRate>
      </div>
      <MortgageType register={register} errors={errors}></MortgageType>
      <CalculateRepayBtn></CalculateRepayBtn>
    </form>
  );
}

export default MortgageCalculatorForm;
