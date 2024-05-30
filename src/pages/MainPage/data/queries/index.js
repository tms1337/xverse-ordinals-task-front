import axios from "axios";

const ORDINALS_UTXO_URL = (address) =>
  `https://api-3.xverse.app/v1/address/${address}/ordinal-utxo`;

export const queryOrdinalUTXOsPerAddress = async (address) => {
  try {
    const response = await axios.get(ORDINALS_UTXO_URL(address));
    return response.data.results;
  } catch (error) {
    console.error("Error fetching ordinal UTXOs:", error);
    return [];
  }
};
