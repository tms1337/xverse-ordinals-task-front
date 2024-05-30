import React, { useState, useEffect } from "react";

import MainVerticalLayout from "../../layouts/MainVerticalLayout";

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

  const INSCRIPTION_CONTENT_URL = `https://ord.xverse.app/content`;
  const imgUrl = `${INSCRIPTION_CONTENT_URL}/${inscription}`;

  useEffect(() => {
    const fetchOrdinal = async () => {
      const data = await queryOrdinalPerAddressAndId(address, inscription);
      setOrdinal(data);
    };

    fetchOrdinal();
  }, [address, inscription]);

  if (!ordinal) return <div>Loading...</div>;

  return (
    <MainVerticalLayout>
      <Header />
      <ImageSection url={imgUrl} />

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
    </MainVerticalLayout>
  );
};

export default NFTDetailsPage;
