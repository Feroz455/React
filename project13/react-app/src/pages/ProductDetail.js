import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productId);
  return (
    <div>
      <h1>Product details</h1>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetail;
