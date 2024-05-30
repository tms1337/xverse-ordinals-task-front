import React from "react";

const InscriptionID = ({ inscriptionId }) => {
  return (
    <div className="w-[311px] h-[61px] absolute left-[18px] top-[540px]">
      <p className="absolute top-0 text-xs font-medium text-left text-white/70 max-w-screen">
        Inscription ID
      </p>
      <p className="w-[311px] absolute top-[23px] text-sm font-medium text-left text-white">
        {inscriptionId}
      </p>
    </div>
  );
};

export default InscriptionID;
