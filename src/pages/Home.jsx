import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('/products.json')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
    
    return (
        <div className="container">
        <h2>Products</h2>
        <div className="product-list">
        {products.map(product => (
            <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
                <h3 className="product-name">{product.name}</h3>
                <h3 className="product-sku">{product.sku} </h3>
                <img src={product.image} alt={product.name} className="product-image" />
            </Link>
        </div>
        ))}
        </div>
    </div>
);
};

export default Home;