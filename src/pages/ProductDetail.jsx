import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";


const ProductDetail = () => {
const { id } = useParams();
const [product, setProduct] = useState(null);

    useEffect(() => {
    fetch('/products.json')
        .then(response => response.json())
        .then(data => {
        const product = data.find(p => p.id === parseInt(id));
        setProduct(product);
    });
}, [id]);

const handleBuy = () => {
    alert(`Producto ${product.name} añadido al carrito!`);
};

if (!product) return <div>Loading...</div>;

return (
    <div className="product-detail">
        <h2>{product.name}</h2>
        <IoLogoAndroid className='android'/> <MdPhoneAndroid className='cel1'/> <FaApple className='apple'/> <MdSmartphone className='cel2'/>
        <img src={product.image} alt={product.name} className="image-detail" />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={handleBuy}>Comprar</button>
    </div>
);
};

export default ProductDetail;