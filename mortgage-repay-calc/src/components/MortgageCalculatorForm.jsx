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
  const { updateResults } = useContext(MortgageContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const amount = parseFloat(data.amount);
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
