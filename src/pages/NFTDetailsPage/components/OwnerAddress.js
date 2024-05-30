import React from "react";

const OwnerAddress = ({ ownerAddress }) => {
  return (
    <div className="w-[311px] h-[61px] absolute left-[18px] top-[625px]">
      <p className="absolute top-0 text-xs font-medium text-left text-white/70">
        Owner Address
      </p>
      <p className="w-[311px] absolute top-[23px] text-sm font-medium text-left text-white">
        {ownerAddress}
      </p>
    </div>
  );
};

export default OwnerAddress;
