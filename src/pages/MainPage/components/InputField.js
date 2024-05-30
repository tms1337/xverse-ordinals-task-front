import React from "react";

const InputField = ({ value, onChange, inputError }) => {
  return (
    <input
      className={`w-[342px] h-8 absolute left-[15px] top-[124px] text-white p-2 bg-[#24252c] ${
        inputError ? "border-b-2 border-red-500" : ""
      }`}
      placeholder="Enter Address"
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
