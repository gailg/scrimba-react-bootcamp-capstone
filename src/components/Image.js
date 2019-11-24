import React from "react";

const Image = ({ img, className }) => {
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="" />
    </div>
  );
};

export default Image;
