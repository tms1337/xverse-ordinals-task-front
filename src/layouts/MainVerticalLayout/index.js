import React from "react";

const MainVerticalLayout = ({ children }) => {
  return (
    <div className="w-[375px] h-[1198px] relative overflow-hidden bg-[#1a1a1a]">
      {children}
    </div>
  );
};

export default MainVerticalLayout;
