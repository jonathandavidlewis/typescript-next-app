import React from "react";
import ProductCard from "./ProductCard";

const ProductCardList = ({ products }) => {
  return (
    <div className="product-card-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;
