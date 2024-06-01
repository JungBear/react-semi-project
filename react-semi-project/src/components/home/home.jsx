import React from 'react';
import { useSelector } from 'react-redux';
import './home.css'

export default function Home() {
    const products = useSelector(state => state.products.products);

    return (
        <div>
            <div className="main-con">
                <h1>BEST</h1>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-item">
                            <img src={product.src} alt={product.productName} className="product-image" />
                            <h2>{product.productName}</h2>
                            <p>가격: {product.price}원</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}