import React from "react";
import { useParams } from "react-router-dom";
import { shoes } from "./Products";

const LaunchProduct = () => {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;
  return (
    <div>
      <br />
      <br />
      <br />
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
};

export default LaunchProduct;
