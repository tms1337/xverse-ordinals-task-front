import React from "react";

const ResultItem = ({ top, inscription }) => {
  return (
    <>
      <div className="w-[281px] h-[49px]">
        <p
          className="w-[281px] h-[49px] absolute left-[21px] text-sm font-medium text-left text-white"
          style={{ top: `${top}px` }}
        >
          Inscription {inscription}
        </p>
      </div>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        style={{ left: `${top + 75.63}px`, top: `${top + 15.63}px` }}
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
    </>
  );
};

export default ResultItem;
