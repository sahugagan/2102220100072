// AllProductsPage.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const AllProductsPage = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch('http://localhost:8000/api/products')
.then(response => response.json())
.then(data => setProducts(data))
.catch(error => console.error('Error fetching products:', error));
}, []);

return (
    <div className="all-products-page">
<h2>All Products</h2>
<div className="product-grid">
        {products.map(product => (
    <ProductCard key={product.id} product={product} />
        ))}
</div>
    </div>
);
};

export default AllProductsPage;