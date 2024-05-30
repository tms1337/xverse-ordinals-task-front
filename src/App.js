import React from "react";

import MainPage from "./pages/MainPage";
import NFTDetailsPage from "./pages/NFTDetailsPage";

const App = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[#1a1a1a]">
      {/* <MainPage /> */}
      <NFTDetailsPage />
    </div>
  );
};

export default App;
