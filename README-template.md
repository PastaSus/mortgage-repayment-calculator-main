# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://github.com/PastaSus/mortgage-repayment-calculator-main)
- Live Site URL: [Add live site URL here](hhttps://mortgage-repayment-calculator-ac.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwind
- Accessibility
- React Hook Forms
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned how to use React-hook-form 3rd party library making life easier for creating forms in react

To see how you can add code snippets, see below:

```js
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

  // data here is actually form data that came from the inputs in key-value pairs!(registered name - value)
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I want to learning react routing

### Useful resources

- [Example resource 1](https://react-hook-form.com) - 3rd party hook i used
- [Example resource 2](https://codewithpawan.medium.com/form-validation-in-react-a-comprehensive-guide-with-examples-c12e1c8671f2) - zoomed in on form elements and form data, both generally and within the React framework. also Tells best practices in react forms

## Author

- Website - [Add your name here](https://aaron-cerezo-portfolio.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/PastaSus)
