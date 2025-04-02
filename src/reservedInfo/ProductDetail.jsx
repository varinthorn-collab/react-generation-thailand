import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-gray-500">Product ID: {product.id}</p>
    </div>
  );
};

export default ProductDetail;
