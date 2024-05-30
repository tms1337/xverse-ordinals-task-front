import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import InscriptionDetails from "./components/InscriptionDetails";
import AttributesSection from "./components/AttributesSection";
import HorizontalLine from "./components/HorizontalLine";
import InscriptionID from "./components/InscriptionID";
import OwnerAddress from "./components/OwnerAddress";
import ImageSection from "./components/ImageSection";

import { queryOrdinalPerAddressAndId } from "./data/queries";

const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    address: params.get("address"),
    inscription: params.get("inscription"),
  };
};

const NFTDetailsPage = () => {
  const [ordinal, setOrdinal] = useState(null);
  const { address, inscription } = getQueryParams();

  useEffect(() => {
    const fetchOrdinal = async () => {
      const data = await queryOrdinalPerAddressAndId(address, inscription);
      setOrdinal(data);
    };

    fetchOrdinal();
  }, [address, inscription]);

  if (!ordinal) return <div>Loading...</div>;

  return (
    <div className="min-h-screen max-w-md mx-auto p-4 bg-[#1a1a1a] relative overflow-hidden">
      <Header />
      <ImageSection
        url={`https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1092182.svg`}
      />

      <InscriptionDetails inscription={ordinal.id.slice(0, 6)} />
      <HorizontalLine />
      <InscriptionID inscriptionId={ordinal.id} />
      <OwnerAddress ownerAddress={ordinal.address} />
      <AttributesSection
        contentType={ordinal.content_type}
        outputValue={ordinal.value}
        contentLength={ordinal.content_length}
        location={ordinal.location}
        genesisTransaction={ordinal.genesis_tx_id}
      />
    </div>
  );
};

export default NFTDetailsPage;
