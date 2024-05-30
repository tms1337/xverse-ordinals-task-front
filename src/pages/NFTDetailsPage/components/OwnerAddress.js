import React from "react";

const OwnerAddress = ({ ownerAddress }) => {
  return (
    <div className="w-full mt-4">
      <p className="text-xs font-medium text-left text-white/70">
        Owner Address
      </p>
      <p className="text-sm font-medium text-left text-white break-words">
        {ownerAddress}
      </p>
    </div>
  );
};

export default OwnerAddress;
