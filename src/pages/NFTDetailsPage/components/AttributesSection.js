import React from "react";

const AttributesSection = ({
  contentType,
  outputValue,
  contentLength,
  location,
  genesisTransaction,
}) => {
  return (
    <div className="w-full mt-8">
      <div className="mb-4">
        <p className="text-xs font-medium text-left text-white/70">
          Content Type
        </p>
        <div className="w-full h-10 mt-2 rounded-lg bg-[#24252c] flex items-center p-2">
          <p className="text-sm font-medium text-left text-white">
            {contentType}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xs font-medium text-left text-white/70">
          Output Value
        </p>
        <div className="w-full h-10 mt-2 rounded-lg bg-[#24252c] flex items-center p-2">
          <p className="text-sm font-medium text-left text-white">
            {outputValue}
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xs font-medium text-left text-white/70">
          Content Length
        </p>
        <div className="w-full h-10 mt-2 rounded-lg bg-[#24252c] flex items-center p-2">
          <p className="text-sm font-medium text-left text-white">
            {contentLength} bytes
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xs font-medium text-left text-white/70">Location</p>

        <div className="w-full mt-2 rounded-lg bg-[#24252c] p-2 break-words">
          <p className="text-sm font-medium text-left text-white">{location}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs font-medium text-left text-white/70">
          Genesis Transaction
        </p>
        <div className="w-full mt-2 rounded-lg bg-[#24252c] p-2 break-words">
          <p className="text-sm font-medium text-left text-white">
            {genesisTransaction}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttributesSection;
