// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductCard;