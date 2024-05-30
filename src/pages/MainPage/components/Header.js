import React from "react";

const Header = () => {
  return (
    <div className="w-[375px] h-[88px] absolute left-0 top-0 overflow-hidden">
      <div className="w-[375px] h-[88px] absolute left-[-1px] top-[-1px] opacity-0 bg-[#1a1a1a]"></div>
      <p className="absolute left-[92px] top-[54px] text-sm font-medium text-center text-white">
        Ordinal Inscription Lookup
      </p>
    </div>
  );
};

export default Header;
