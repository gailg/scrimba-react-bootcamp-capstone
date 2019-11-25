import React, { useState, useContext } from "react";
import { LarryContext } from "../LarryContext";

const Image = ({ img, className }) => {
  const [hovered, setHovered] = useState(false);
  console.log("Image hovered:", hovered);
  const { toggleFavorite } = useContext(LarryContext);

  const heartIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
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
