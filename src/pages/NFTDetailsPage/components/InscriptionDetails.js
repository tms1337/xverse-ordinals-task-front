import React from "react";

const InscriptionDetails = ({ inscription }) => {
  return (
    <p className="w-full text-base font-semibold text-left text-white mt-4 break-words">
      Inscription {inscription}
    </p>
  );
};

export default InscriptionDetails;
