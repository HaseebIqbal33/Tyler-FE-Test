import React, { useState } from "react";

interface Step1ComponentProps {
  onNextStep: () => void;
  currentStep: number;
  formData: {
    propertyName: string;
    address: string;
    country: string;
    city: string;
    zipcode: string;
    closeDate: string;
  };
  updateFormData: (formData: {
    propertyName: string;
    address: string;
    country: string;
    city: string;
    zipcode: string;
    closeDate: string;
  }) => void;
}

// Validation function

function validateForm(formData: {
  propertyName: string;
  address: string;
  country: string;
  city: string;
  zipcode: string;
  closeDate: string;
}) {
  const errors = {
    propertyName: "",
    address: "",
    country: "",
    city: "",
    zipcode: "",
    closeDate: "",
  };

  // Validate propertyName (required)
  if (!formData.propertyName) {
    errors.propertyName = "property name is required.";
  }
  if (!formData.address) {
    errors.address = "address is required.";
  }
  if (!formData.country) {
    errors.country = "country is required.";
  }
  if (!formData.city) {
    errors.city = "city is required.";
  }
  if (!formData.zipcode) {
    errors.zipcode = "zip code is required.";
  } else if (!/^\d+$/.test(formData.zipcode)) {
    errors.zipcode = "zip code must be a number.";
  }
  if (!formData.closeDate) {
    errors.closeDate = "close date is required.";
  }

  return errors;
}
export default function Step1Component({
  onNextStep,
  formData,
  updateFormData,
}: Step1ComponentProps) {
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Perform validation
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    // Check if there are any validation errors
    if (Object.values(newErrors).every((error) => !error)) {
      onNextStep(); // Move to the next step if there are no errors
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the form data in the child component
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({
    propertyName: "",
    address: "",
    country: "",
    city: "",
    zipcode: "",
    closeDate: "",
  });

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-teal-900">
        Property detail
      </h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="propertyName"
            className="block  text-teal-900 text-sm font-bold mb-2"
          >
            Property Name
          </label>
          <input
            type="text"
            id="propertyName"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3  text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Property Name"
          />
          {errors.propertyName && (
            <p className="text-red-500 text-sm bold">{errors.propertyName}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block  text-teal-900 text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3  text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm bold">{errors.address}</p>
          )}
        </div>
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="country"
              className="block  text-teal-900 text-sm font-bold mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3  text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Country"
            />
            {errors.country && (
              <p className="text-red-500 text-sm bold">{errors.country}</p>
            )}
          </div>
          <div className="w-1/4 pr-2">
            <label
              htmlFor="city"
              className="block  text-teal-900 text-sm font-bold mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3  text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="City"
            />
            {errors.city && (
              <p className="text-red-500 text-sm bold">{errors.city}</p>
            )}
          </div>
          <div className="w-1/4">
            <label
              htmlFor="zipcode"
              className="block  text-teal-900 text-sm font-bold mb-2"
            >
              Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3  text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Zipcode"
            />
            {errors.zipcode && (
              <p className="text-red-500 text-sm bold">{errors.zipcode}</p>
            )}
          </div>
        </div>
        <div className="mb-4"></div>
        <div className="mb-4">
          <label
            htmlFor="closeDate"
            className="block  text-teal-900 text-sm font-bold mb-2"
          >
            Close Date
          </label>
          <input
            type="date"
            id="closeDate"
            name="closeDate"
            value={formData.closeDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3  text-teal-900 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.closeDate && (
            <p className="text-red-500 text-sm bold">{errors.closeDate}</p>
          )}
        </div>
        <div className="flex items-center  justify-end">
          <button
            type="submit"
            className="bg-teal-800 hover:bg-teal-900  text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
