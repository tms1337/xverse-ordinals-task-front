import React from "react";

const AttributesSection = ({
  contentType,
  outputValue,
  contentLength,
  location,
  genesisTransaction,
}) => {
  return (
    <div className="w-[343px] h-[427px] absolute left-[17px] top-[779px]">
      <div className="w-[343px] h-[66px] absolute top-[92px]">
        <p className="absolute left-[3px] top-0 text-xs font-medium text-left text-white/70">
          Content Type
        </p>
        <div className="w-[343px] h-10 absolute left-[-1px] top-6 rounded-lg bg-[#24252c]"></div>
        <p className="w-[315px] absolute left-3 top-9 text-sm font-medium text-left text-white">
          {contentType}
        </p>
      </div>
      <div className="w-[343px] h-[66px] absolute top-[0]">
        <p className="absolute left-[3px] top-0 text-xs font-medium text-left text-white/70">
          Output Value
        </p>
        <div className="w-[343px] h-10 absolute left-[-1px] top-6 rounded-lg bg-[#24252c]"></div>
        <p className="w-[315px] absolute left-3 top-9 text-sm font-medium text-left text-white">
          {outputValue}
        </p>
      </div>
      <div className="w-[343px] h-[66px] absolute top-[184px]">
        <p className="absolute left-[3px] top-0 text-xs font-medium text-left text-white/70">
          Content Length
        </p>
        <div className="w-[343px] h-10 absolute left-[-1px] top-6 opacity-80 rounded-lg bg-[#24252c]"></div>
        <p className="w-[315px] absolute left-3 top-9 text-sm font-medium text-left text-white">
          {contentLength} bytes
        </p>
      </div>
      <div className="w-[343px] h-[66px] absolute top-[276px]">
        <p className="absolute left-[3px] top-0 text-xs font-medium text-left text-white/70">
          Location
        </p>
        <div className="w-[343px] h-10 absolute left-[-1px] top-6 rounded-lg bg-[#24252c]"></div>
        <p className="w-[315px] absolute left-3 top-9 text-sm font-medium text-left text-white">
          {location}
          <br />
        </p>
      </div>
      <div className="w-[343px] h-[66px] absolute top-[368px]">
        <p className="absolute left-[3px] top-0 text-xs font-medium text-left text-white/70">
          Genesis Transaction
        </p>
        <div className="w-[343px] h-10 absolute left-[-1px] top-6 opacity-80 rounded-lg bg-[#24252c]"></div>
        <p className="w-[315px] absolute left-3 top-9 text-sm font-medium text-left text-white">
          {genesisTransaction}
        </p>
      </div>
    </div>
  );
};

export default AttributesSection;
