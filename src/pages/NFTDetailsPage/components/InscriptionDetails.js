import React from "react";

const InscriptionDetails = ({ inscription }) => {
  return (
    <p className="w-[146px] h-3 absolute left-[17px] top-[487px] text-base font-semibold text-left text-white">
      Inscription {inscription}
    </p>
  );
};

export default InscriptionDetails;
