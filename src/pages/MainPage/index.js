import React, { useState } from "react";

import Header from "./components/Header";
import OwnerAddress from "./components/OwnerAddress";
import Results from "./components/Results";
import ResultItem from "./components/ResultItem";
import InputField from "./components/InputField";
import LookupButton from "./components/LookupButton";
import MainVerticalLayout from "../../layouts/MainVerticalLayout";

import { validateBTCAddress } from "./data/validators";

import { queryOrdinalUTXOsPerAddress } from "./data/queries";
import {
  ordinaUTXOs_to_ordinalIds,
  ordinalIds_to_trimmedOrdinalIds,
  sliceTrimmedOrdinalIds,
} from "./data/transformers";

const MainPage = () => {
  const [stateInputs, setStateInputs] = useState({
    ownerAddress: "",
  });
  const [inputError, setInputError] = useState(false);
  const [ordinalUTXOs, setOrdinalUTXOs] = useState([]);
  const [trimmedOrdinalIds, setTrimmedOrdinalIds] = useState([]);

  const onBtcAddressChange = async (event) => {
    const newAddress = event.target.value;
    setStateInputs({ ownerAddress: newAddress });
    const isValid = await validateBTCAddress(newAddress);
    setInputError(!isValid);
  };

  const handleLookUpSubmit = async (event) => {
    event.preventDefault();
    if (!inputError) {
      const ordinals = await queryOrdinalUTXOsPerAddress(
        stateInputs.ownerAddress
      );
      setOrdinalUTXOs(ordinals);
      const ordinalIds = ordinaUTXOs_to_ordinalIds(ordinals);
      const trimmedOrdinalIds = ordinalIds_to_trimmedOrdinalIds(ordinalIds, 8);
      console.log({ trimmedOrdinalIds });
      setTrimmedOrdinalIds(sliceTrimmedOrdinalIds(trimmedOrdinalIds));
    } else {
      console.log("Invalid BTC Address");
    }
  };

  return (
    <MainVerticalLayout>
      <Header />
      <OwnerAddress />
      <Results />
      {trimmedOrdinalIds.map((id, index) => (
        <ResultItem key={index} top={270 + index * 60} inscription={id} />
      ))}
      <form onSubmit={handleLookUpSubmit}>
        <InputField
          value={stateInputs.ownerAddress}
          onChange={onBtcAddressChange}
          inputError={inputError}
        />
        <LookupButton />
      </form>
    </MainVerticalLayout>
  );
};

export default MainPage;
