import React from "react";

const InscriptionID = ({ inscriptionId }) => {
  return (
    <div className="w-full mt-4">
      <p className="text-xs font-medium text-left text-white/70">
        Inscription ID
      </p>
      <p className="text-sm font-medium text-left text-white break-words">
        {inscriptionId}
      </p>
    </div>
  );
};

export default InscriptionID;
