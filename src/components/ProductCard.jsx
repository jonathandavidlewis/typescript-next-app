import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-brand">{product.brand.name}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-rating-reviews">
          <span className="product-rating">{product.rating} ⭐</span>
          <span className="product-reviews">({product.reviews} reviews)</span>
        </div>
        <p className="product-price">
          {product.currency} {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
