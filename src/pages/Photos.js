import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { LarryContext } from "../LarryContext";

const Photos = () => {
  const { photos } = useContext(LarryContext);

  const display = photos.map((image, index) => (
    <Image key={image.id} img={image} className={getClass(index)} />
  ));

  return <main className="photos">{display}</main>;
};

export default Photos;
