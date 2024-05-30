import React from "react";
// import { useLocation } from "react-router-dom";

const ResultItem = ({ top, inscription, id = "faruk..." }) => {
  // const location = useLocation();
  // const currentUrl = location.pathname;

  return (
    <div className="relative my-4 mx-auto max-w-md">
      <p className="text-sm font-medium text-left text-white">
        Inscription {inscription}
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
      {/* <a href={`${currentUrl}/${id}`} className="absolute right-0 bottom-0">
        <button className="text-white">Go to {id}</button>
      </a> */}
    </div>
  );
};

export default ResultItem;
