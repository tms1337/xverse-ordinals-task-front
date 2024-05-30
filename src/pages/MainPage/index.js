import React from "react";
import Header from "./components/Header";
import OwnerAddress from "./components/OwnerAddress";
import Results from "./components/Results";
import ResultItem from "./components/ResultItem";
import InputField from "./components/InputField";
import LookupButton from "./components/LookupButton";
import MainVerticalLayout from "../../layouts/MainVerticalLayout";

const MainPage = () => {
  return (
    <MainVerticalLayout>
      <Header />
      <OwnerAddress />
      <Results />
      <ResultItem top={270} inscription="2f83b9b0" />
      <ResultItem top={330} inscription="fe7cff70" />
      <ResultItem top={395} inscription="b81979b1" />
      <InputField />
      <LookupButton />
    </MainVerticalLayout>
  );
};

export default MainPage;
