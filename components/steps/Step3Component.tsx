import React, { useState } from "react";

interface Step3ComponentProps {
  onNextStep: () => void;
  onPreviousStep: () => void;
  currentStep: number;
  formDataLoan: {
    lender: string;
    loanAmount: string;
    startDate: string;
    rateType: string;
    term: string;
    financingFee: string;
    interestRate: string;
  };

  updateLoanData: (formDataLoan: {
    lender: string;
    loanAmount: string;
    startDate: string;
    rateType: string;
    term: string;
    financingFee: string;
    interestRate: string;
  }) => void;
}

// Validation function
function validateForm(formDataLoan: {
  lender: string;
  loanAmount: string;
  startDate: string;
  rateType: string;
  term: string;
  financingFee: string;
  interestRate: string;
}) {
  const errors = {
    lender: "",
    loanAmount: "",
    startDate: "",
    rateType: "",
    term: "",
    financingFee: "",
    interestRate: "",
  };

  // Validate propertyName (required)
  if (!formDataLoan.lender) {
    errors.lender = "lender is required.";
  }
  if (!formDataLoan.loanAmount) {
    errors.loanAmount = "Loan Amount is required.";
  } else if (!/^\d+$/.test(formDataLoan.loanAmount)) {
    errors.loanAmount = "loan amount must be a number.";
  }
  if (!formDataLoan.startDate) {
    errors.startDate = "start Date is required.";
  }
  if (!formDataLoan.rateType) {
    errors.rateType = "Rate type is required.";
  }
  if (!formDataLoan.term) {
    errors.term = "Term  is required.";
  }
  if (!formDataLoan.financingFee) {
    errors.financingFee = "finance fee  is required.";
  }
  if (!formDataLoan.interestRate) {
    errors.interestRate = "interest rate  is required.";
  }

  return errors;
}
export default function Step3Component({
  onNextStep,
  formDataLoan,
  updateLoanData,
  onPreviousStep,
}: Step3ComponentProps) {
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // Perform validation
    const newErrors = validateForm(formDataLoan);
    // Set the errors state
    setErrors(newErrors);

    // Check if there are any validation errors
    if (Object.values(newErrors).every((error) => !error)) {
      onNextStep(); // Move to the next step if there are no errors
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the form data in the child component
    updateLoanData({
      ...formDataLoan,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({
    lender: "",
    loanAmount: "",
    startDate: "",
    rateType: "",
    term: "",
    financingFee: "",
    interestRate: "",
  });

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-teal-900">Financing</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="lender" className="block  text-teal-900 font-bold">
            Lender
          </label>
          <input
            type="text"
            id="lender"
            name="lender"
            value={formDataLoan.lender}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.lender && (
            <p className="text-red-500 text-sm bold">{errors.lender}</p>
          )}
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="loanAmount"
              className="block  text-teal-900 font-bold"
            >
              Loan Amount
            </label>
            <input
              type="text"
              id="loanAmount"
              name="loanAmount"
              value={formDataLoan.loanAmount}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3  text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.loanAmount && (
              <p className="text-red-500 text-sm bold">{errors.loanAmount}</p>
            )}
          </div>
          <div className="w-1/2 pl-2">
            <label
              htmlFor="startDate"
              className="block text-teal-900 font-bold"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formDataLoan.startDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.startDate && (
              <p className="text-red-500 text-sm bold">{errors.startDate}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <p className="block text-teal-900 font-bold">Rate Type</p>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="rateType"
              value="fixed"
              checked={formDataLoan.rateType === "fixed"}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Fixed</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              name="rateType"
              value="variable"
              checked={formDataLoan.rateType === "variable"}
              onChange={handleChange}
              className="form-radio"
            />
            <span className="ml-2">Variable</span>
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="interestRate"
            className="block text-teal-900 font-bold"
          >
            Interest Rate
          </label>
          <input
            type="text"
            id="interestRate"
            name="interestRate"
            value={formDataLoan.interestRate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
          />

          {errors.interestRate && (
            <p className="text-red-500 text-sm bold">{errors.interestRate}</p>
          )}
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label htmlFor="term" className="block text-teal-900 font-bold">
              Term
            </label>
            <input
              type="text"
              id="term"
              name="term"
              value={formDataLoan.term}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.term && (
              <p className="text-red-500 text-sm bold">{errors.term}</p>
            )}
          </div>
          <div className="w-1/2 pl-2">
            <label
              htmlFor="financingFee"
              className="block text-teal-900 font-bold"
            >
              Financing Fee
            </label>
            <input
              type="text"
              id="financingFee"
              name="financingFee"
              value={formDataLoan.financingFee}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.financingFee && (
              <p className="text-red-500 text-sm bold">{errors.financingFee}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => onPreviousStep()}
            className="  bg-teal-800 hover:bg-teal-900 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-teal-800 hover:bg-teal-900 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
