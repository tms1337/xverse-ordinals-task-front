import React from "react";

const MainVerticalLayout = ({ children }) => {
  return (
    <div className="min-h-screen max-w-md mx-auto p-4 bg-[#1a1a1a] relative overflow-hidden">
      {children}
    </div>
  );
};

export default MainVerticalLayout;
