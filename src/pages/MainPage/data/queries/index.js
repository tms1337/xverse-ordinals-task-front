import axios from "axios";

export const queryOrdinalUTXOsPerAddress = async (address) => {
  try {
    const response = await axios.get(
      `https://api-3.xverse.app/v1/address/${address}/ordinal-utxo`
    );
    return response.data.results; // Assuming the data you need is in the 'results' field
  } catch (error) {
    console.error("Error fetching ordinal UTXOs:", error);
    return [];
  }
};
