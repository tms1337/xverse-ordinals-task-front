import React from "react";

const ResultItem = ({ address, top, inscription }) => {
  return (
    <div
      className="relative my-4 mx-auto max-w-md"
      onClick={() =>
        window.location.replace(
          `${window.location.origin}/?address=${address}&inscription=${inscription}`
        )
      }
    >
      <p className="text-sm font-medium text-left text-white">
        <span className="mr-4 text-lg">Inscription</span>
        <span className="text-gray-400">{inscription.slice(0, 32)}</span>
      </p>
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-1"
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
    </div>
  );
};

export default ResultItem;
