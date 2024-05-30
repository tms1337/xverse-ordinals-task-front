import axios from "axios";

const ORDINAL_PER_ADDR_ID = (address, inscription) =>
  `https://api-3.xverse.app/v1/address/${address}/ordinals/inscriptions/${inscription}`;

export const queryOrdinalPerAddressAndId = async (address, inscription) => {
  try {
    const url = ORDINAL_PER_ADDR_ID(address, inscription);

    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("Error fetching ordinal UTXOs:", error);
    return [];
  }
};

const parseAndDisplayImage = (rawData) => {
  const binaryData = Uint8Array.from(atob(rawData), (char) =>
    char.charCodeAt(0)
  );
  const blob = new Blob([binaryData], { type: "image/png" });
  const url = URL.createObjectURL(blob);

  return url;
};

const INSCRIPTION_CONTENT_URL = `https://ord.xverse.app/content`;
