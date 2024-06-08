import React from 'react';
import { useSelector } from 'react-redux';
import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const products = useSelector(state => state.products.products.slice(0, 6)); // 처음 6개의 제품만 가져오기
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="home-container">
            <div className="main-con">
                <h1>BEST</h1>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-item" onClick={() => handleProductClick(product.id)}>
                            <button className="img-btn">
                                <img src={product.src} alt={product.productName} className="product-image" />
                                <h2 className="product-name">{product.productName}</h2>
                            </button>
                            <p className="product-price">가격: {product.price}원</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
