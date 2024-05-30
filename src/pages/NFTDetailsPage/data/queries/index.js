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

function extractContentId(str) {
  const regex = /\/content\/([a-zA-Z0-9]+)/;
  const match = str.match(regex);
  return match ? match[1] : null;
}

export const queryImage = async (address, inscription) => {
  try {
    const response = await fetch(
      `https://ord.xverse.app/content/${inscription}`,
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          pragma: "no-cache",
          priority: "i",
          "sec-ch-ua":
            '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": '"Android"',
          "sec-fetch-dest": "image",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          cookie:
            "_ga=GA1.1.306549783.1716392232; _ga_L7JX9C5KDJ=GS1.1.1716786345.4.0.1716786345.0.0.0",
          Referer:
            "https://ord.xverse.app/content/c0aa7e9748e5d0c580f8000336b017f06bffc85579e19f3498f409fec6b5043ci1",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: null,
        method: "GET",
      }
    );
  } catch (error) {
    console.error("Error fetching ordinal UTXOs:", error);
    return [];
  }
};
