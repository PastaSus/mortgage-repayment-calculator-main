import EmptyIllust from "./../assets/images/illustration-empty.svg";

function MortgageResults() {
  return (
    // when calculated text is aligned to left
    <section
      className="grid justify-items-center bg-[var(--Slate-900)] px-6 py-7 text-center"
      aria-labelledby="results-heading"
    >
      <img src={EmptyIllust} alt=""></img>
      {/* Your Results */}
      <h2 className="text-white" id="results-heading">
        {" "}
        Results shown here
      </h2>
      <p className="font-medium text-[var(--Slate-300)]">
        {/* Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again. */}
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>

      {/* output calculation
       <div>
        <label htmlFor="monthly-repayment">Your monthly repayments</label>
        <output id="monthly-repayment"></output>
      </div>
      <div>
        <label htmlFor="total-repayment">Total you'll repay over the term</label>
        <output id="total-repayment"></output>
      </div> */}
    </section>
  );
}

export default MortgageResults;
