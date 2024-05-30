import React from "react";

const InputField = ({ value, onChange, inputError }) => {
  return (
    <input
      className={`w-full max-w-md mx-auto p-2 mt-4 bg-[#24252c] text-white border-b-2 ${
        inputError ? "border-red-500" : "border-transparent"
      }`}
      placeholder="Enter Address"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
