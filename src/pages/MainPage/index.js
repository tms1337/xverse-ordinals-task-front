import React, { useState } from "react";

import Header from "./components/Header";
import OwnerAddress from "./components/OwnerAddress";
import Results from "./components/Results";
import ResultItem from "./components/ResultItem";
import InputField from "./components/InputField";
import LookupButton from "./components/LookupButton";

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
  const [ordinalIds, setOrdinalIds] = useState([]);

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
      setOrdinalIds(ordinaUTXOs_to_ordinalIds(ordinals));

      const trimmedOrdinalIds = ordinalIds_to_trimmedOrdinalIds(ordinalIds, 8);
      setTrimmedOrdinalIds(sliceTrimmedOrdinalIds(trimmedOrdinalIds));
    } else {
      console.log("Invalid BTC Address");
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto p-4 bg-[#1a1a1a] relative overflow-hidden">
      <Header />
      <OwnerAddress />

      <form onSubmit={handleLookUpSubmit}>
        <InputField
          value={stateInputs.ownerAddress}
          onChange={onBtcAddressChange}
          inputError={inputError}
        />
        <LookupButton />
      </form>

      <Results />

      {ordinalIds.map((id, index) => (
        <ResultItem
          key={index}
          address={stateInputs.ownerAddress}
          top={270 + index * 60}
          inscription={id}
        />
      ))}
    </div>
  );
};

export default MainPage;
