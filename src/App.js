import React from "react";

const App = () => {
  return (
    <div className="w-[375px] h-[1198px] relative overflow-hidden bg-[#1a1a1a]">
      <div className="w-[375px] h-[88px] absolute left-0 top-0 overflow-hidden">
        <div className="w-[375px] h-[88px] absolute left-[-1px] top-[-1px] opacity-0 bg-[#1a1a1a]"></div>
        <p className="absolute left-[92px] top-[54px] text-sm font-medium text-center text-white">
          Ordinal Inscription Lookup
        </p>
      </div>
      <p className="absolute left-4 top-[98px] text-sm font-medium text-center text-white">
        Owner Bitcoin Address:
      </p>
      <p className="absolute left-[21px] top-[229px] text-sm font-medium text-center text-white">
        Results
      </p>
      <div className="w-[281px] h-[49px]">
        <p className="w-[281px] h-[49px] absolute left-[22px] top-[270px] text-sm font-medium text-left text-white">
          Inscription 2f83b9b0
        </p>
      </div>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[346.63px] top-[285.63px]"
        preserveAspectRatio="none"
      >
        <path
          d="M1 1L8 8L1 15"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <div className="w-[281px] h-[49px]">
        <p className="w-[281px] h-[49px] absolute left-[21px] top-[330px] text-sm font-medium text-left text-white">
          Inscription fe7cff70
        </p>
      </div>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[345.63px] top-[345.63px]"
        preserveAspectRatio="none"
      >
        <path
          d="M1 1L8 8L1 15"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <div className="w-[281px] h-[49px]">
        <p className="w-[281px] h-[49px] absolute left-[21px] top-[395px] text-sm font-medium text-left text-white">
          Inscription b81979b1
        </p>
      </div>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[345.63px] top-[410.63px]"
        preserveAspectRatio="none"
      >
        <path
          d="M1 1L8 8L1 15"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <div className="w-[342px] h-8 absolute left-[15px] top-[124px] bg-[#24252c]"></div>
      <div className="w-[342px] h-[46px] absolute left-[15px] top-[166px] rounded-[10px] bg-[#465ae9]"></div>
      <p className="absolute left-40 top-[182px] text-sm font-medium text-center text-white">
        Look up
      </p>
    </div>
  );
};

export default App;
