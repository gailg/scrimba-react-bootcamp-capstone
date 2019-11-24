import React, { useState } from "react";

const Image = ({ img, className }) => {
  const [hovered, setHovered] = useState(false);

  const heartIcon = hovered && <i className="ri-heart-fill favorite"></i>;
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;
  return (
    <div className={`${className} image-container`}>
      <img
        src={img.url}
        className="image-grid"
        alt=""
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      />
      {heartIcon}
      {cartIcon}
    </div>
  );
};

export default Image;
