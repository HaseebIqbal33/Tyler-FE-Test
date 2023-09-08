import React from "react";

interface step4Props {
  onPreviousStep: () => void;
}
const Step4Component = ({ onPreviousStep }: step4Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <button
          onClick={() => onPreviousStep()}
          className="bg-teal-500 text-white font-medium py-2 px-4 rounded hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-400"
        >
          Back
        </button>
        <h2 className="text-3xl font-semibold mt-4">Congratulations!</h2>
        <p className="text-gray-700 mt-2">
          You have completed all the steps successfully.
        </p>
      </div>
    </div>
  );
};

export default Step4Component;
