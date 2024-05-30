import React from "react";

import MainPage from "./pages/MainPage";
import NFTDetailsPage from "./pages/NFTDetailsPage";

const isDetailsPage = () => {
  const params = new URLSearchParams(window.location.search);

  return !!params.get("address") && !!params.get("inscription");
};

const App = () => {
  return (
    <div className="w-screen min-h-screen relative overflow-hidden bg-[#1a1a1a]">
      {isDetailsPage() ? <NFTDetailsPage /> : <MainPage />}
    </div>
  );
};

export default App;
