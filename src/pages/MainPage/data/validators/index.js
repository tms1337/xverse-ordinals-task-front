import validate from "bitcoin-address-validation";

export const validateBTCAddress = async (address) => {
  return validate(address);
};
