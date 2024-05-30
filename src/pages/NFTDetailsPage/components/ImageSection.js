import React from "react";

const ImageSection = ({ url }) => {
  return (
    <img
      src={url}
      className="w-[375px] h-[375px] absolute left-[-1px] top-[87px] object-cover"
    />
  );
};

export default ImageSection;
