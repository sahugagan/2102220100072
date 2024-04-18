// ProductDetailsPage.js
import React, { useEffect, useState } from 'react';

const ProductDetailsPage = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.id;
    fetch(`http://localhost:8000/api/products/${productId}`) // Corrected template literal syntax
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details-page">
      <h2>Product Details</h2>
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
