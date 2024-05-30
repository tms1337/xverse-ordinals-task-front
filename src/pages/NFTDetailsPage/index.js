import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import InscriptionDetails from "./components/InscriptionDetails";
import AttributesSection from "./components/AttributesSection";
import HorizontalLine from "./components/HorizontalLine";
import InscriptionID from "./components/InscriptionID";
import OwnerAddress from "./components/OwnerAddress";
import ImageSection from "./components/ImageSection";

import { queryImage, queryOrdinalPerAddressAndId } from "./data/queries";

const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    address: params.get("address"),
    inscription: params.get("inscription"),
  };
};

const NFTDetailsPage = () => {
  const [ordinal, setOrdinal] = useState(null);
  const [imgSVG, setImgSVG] = useState(null);
  const { address, inscription } = getQueryParams();

  useEffect(() => {
    const fetchOrdinal = async () => {
      const data = await queryOrdinalPerAddressAndId(address, inscription);
      setOrdinal(data);
    };

    fetchOrdinal();

    const fetchImage = async () => {
      const data = await queryImage(address, inscription);
      setImgSVG(data);
    };

    fetchImage();
  }, [address, inscription]);

  if (!ordinal) return <div>Loading...</div>;

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[#1a1a1a]">
      <Header />
      <ImageSection url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVER9fGEmdEvgKoNMdaWRBH8qiz4ywOBPWw&s" />
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
