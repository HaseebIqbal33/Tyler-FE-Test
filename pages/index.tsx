import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Step1Component from "@/components/steps/Step1Component";
import Step2Component from "@/components/steps/Step2Component";
import Step3Component from "@/components/steps/Step3Component";
import Step4Component from "@/components/steps/Step4Component";

export default function StepsBullets() {
  const statusValues = ["complete", "current", "upcoming"];

  const [steps, setSteps] = useState([
    { name: "Property detail", href: "#", status: "current" },
    { name: "Rent Roll", href: "#", status: "upcoming" },
    { name: "Financing", href: "#", status: "upcoming" },
    { name: "Income & Expenses", href: "#", status: "upcoming" },
  ]);

  const [formData, setFormData] = useState({
    propertyName: "",
    address: "",
    country: "",
    city: "",
    zipcode: 0,
    closeDate: "",
  });

  const [formDataLoan, setFormDataLoan] = useState({
    lender: "",
    loanAmount: "",
    startDate: "",
    rateType: "fixed", // Default to "fixed"
    interestRate: "",
    term: "",
    financingFee: "",
  });
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const [currentStep, setCurrentStep] = useState(0);

  const onNextStep = () => {
    updateSteps(currentStep + 1);
    setCurrentStep(currentStep + 1);
  };

  const updateFormData = (newFormData: any) => {
    setFormData(newFormData);
  };

  const updateLoanData = (formData: any) => {
    setFormDataLoan(formData);
  };

  const onPreviousStep = () => {
    updateSteps(currentStep - 1);
    setCurrentStep(currentStep - 1);
  };

  const updateSteps = (stepIdx: number) => {
    const updatedSteps = steps.map((step, index) => ({
      ...step,
      status:
        index < stepIdx
          ? "complete"
          : index === stepIdx
          ? "current"
          : "upcoming",
    }));

    setSteps(updatedSteps);
    setCurrentStep(stepIdx);
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 flex">
      <nav className="flex justify-center" aria-label="Progress">
        <ol role="list" className="space-y-3">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? "" : "",
                "relative"
              )}
            >
              {step.status === "complete" ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute left-2.5 top-3 -ml-px mt-0.5 h-full w-0.5 bg-black"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a href={step.href} className="group">
                    <span className="flex items-start">
                      <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                        <CheckCircleIcon
                          className="h-full w-full text-black-600 group-hover:text-black-800"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="ml-3 text-sm font-medium text-teal-900 group-hover:text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </a>
                </>
              ) : step.status === "current" ? (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute left-2.5 top-3 -ml-px mt-1 h-full w-0.5 bg-gray-300"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={step.href}
                    className="flex items-start"
                    aria-current="step"
                  >
                    <span
                      className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="absolute h-4 w-4 rounded-full bg-gray-300" />
                      <span className="relative block h-2 w-2 rounded-full bg-gray-600" />
                    </span>
                    <span className="ml-3 text-sm font-medium text-black-600">
                      {step.name}
                    </span>
                  </a>
                </>
              ) : (
                <>
                  {stepIdx !== steps.length - 1 ? (
                    <div
                      className="absolute left-2.5 top-3 -ml-px mt-1 h-full w-0.5 bg-gray-300"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a href={step.href} className="group">
                    <div className="flex items-start">
                      <div
                        className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                      </div>
                      <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        {step.name}
                      </p>
                    </div>
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Render component based on the current step */}
      {currentStep === 0 && (
        <Step1Component
          onNextStep={onNextStep}
          currentStep={currentStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {currentStep === 1 && (
        <Step2Component
          onNextStep={onNextStep}
          onPreviousStep={onPreviousStep}
        />
      )}
      {currentStep === 2 && (
        <Step3Component
          onPreviousStep={onPreviousStep}
          onNextStep={onNextStep}
          currentStep={currentStep}
          formDataLoan={formDataLoan}
          updateLoanData={updateLoanData}
        />
      )}
      {currentStep === 3 && <Step4Component onPreviousStep={onPreviousStep} />}
    </div>
  );
}
