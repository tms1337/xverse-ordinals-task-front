import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-center relative bg-[#1a1a1a]">
      <div className="absolute left-4 top-4">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_5_15)">
            <path
              d="M17.5 7L10.5 14L17.5 21"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_5_15">
              <rect width="28" height="28" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="text-sm font-medium text-center text-white">Details</p>
    </div>
  );
};

export default Header;
