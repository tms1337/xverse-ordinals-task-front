export const ordinaUTXOs_to_ordinalIds = (ordinalUTXOs) => {
  return ordinalUTXOs.flatMap((result) =>
    result.inscriptions.map((inscription) => inscription.id)
  );
};

export const ordinalIds_to_trimmedOrdinalIds = (ordinalIds, len = 6) => {
  return ordinalIds.map((id) =>
    id.length > len ? id.substring(0, len) + "..." : id
  );
};

export const sliceTrimmedOrdinalIds = (trimmedOrdinalIds, len = 3) => {
  return trimmedOrdinalIds.slice(0, len);
};
