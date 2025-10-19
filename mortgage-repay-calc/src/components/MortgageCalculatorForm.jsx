import MortgageAmount from "./InputGroup/MortgageAmount";
import MortgageTerm from "./InputGroup/MortgageTerm";
import MortgageInterestRate from "./InputGroup/MortgageInterestRate";
import MortgageType from "./RadioGroup/MortgageType";
import CalculateRepayBtn from "./Button/CalculateRepayBtn";

function MortgageCalculatorForm() {
  return (
    <form>
      <MortgageAmount></MortgageAmount>
      <div className="grid lg:grid-cols-2 lg:items-end lg:gap-6">
        <MortgageTerm></MortgageTerm>
        <MortgageInterestRate></MortgageInterestRate>
      </div>
      <MortgageType></MortgageType>
      <CalculateRepayBtn></CalculateRepayBtn>
    </form>
  );
}

export default MortgageCalculatorForm;
