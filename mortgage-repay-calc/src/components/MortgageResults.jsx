import { useContext } from "react";
import { MortgageContext } from "../context/MortgageContext";

import EmptyIllust from "./../assets/images/illustration-empty.svg";

// 2nd step: we want to re-render this component when there are no errors and show the calculation results on results component
function MortgageResults() {
  const { results } = useContext(MortgageContext);

  // return empty
  if (!results) {
    return (
      // when calculated text is aligned to left
      <section
        className="grid bg-[var(--Slate-900)] px-6 py-7 text-center lg:flex-col lg:content-center lg:items-center lg:rounded-r-3xl lg:rounded-bl-[4rem] lg:py-9"
        aria-labelledby="empty-results-heading"
      >
        <div className="grid justify-items-center">
          <img src={EmptyIllust} alt=""></img>

          <h2 className="text-white" id="empty-results-heading">
            Results shown here
          </h2>
          <p className="font-medium text-[var(--Slate-300)]">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      </section>
    );
  }

  // return output calculation
  return (
    <section
      className="bg-[var(--Slate-900)] px-6 py-7 text-white lg:rounded-r-3xl lg:rounded-bl-[4rem]"
      aria-labelledby="results-heading"
    >
      <div>
        <h2
          id="results-heading"
          className="mb-4 text-xl font-bold lg:text-[1.5rem]"
        >
          Your Results
        </h2>
        <p className="font-medium text-[var(--Slate-300)]">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>
      <div className="relative z-2 mt-5 rounded-md border-t-3 border-[var(--Lime)] bg-[var(--Slate-950)] px-3 py-5 lg:mt-8 lg:p-7">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="monthly-repayment"
            className="text-[var(--Slate-300)]"
          >
            Your monthly repayments
          </label>
          <output
            id="monthly-repayment"
            className="text-[2.5rem] font-bold text-[var(--Lime)]"
          >
            £{results.monthlyPayment}
          </output>
        </div>
        <div className="pt- mt-4 flex flex-col gap-2 border-t border-[var(--Slate-700)] pt-4">
          <label className="text-[var(--Slate-300)]" htmlFor="total-repayment">
            Total you’ll repay over the term
          </label>
          <output
            className="text-2xl font-semibold text-[var(--White)]"
            id="total-repayment"
          >
            £{results.total}
          </output>
        </div>
      </div>
    </section>
  );
}

export default MortgageResults;
