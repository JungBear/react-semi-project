import React from 'react';
import { useSelector } from 'react-redux';
import './outer.css'; // Outer에 해당하는 CSS 파일을 import 해주세요.
import { useNavigate } from 'react-router-dom';

export default function Outer() {
    const products = useSelector((state) => state.products.products);
    const outer = products.filter(product => product.category === "아우터");
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className="outer-container">
            <h1>아우터</h1>
            <div className="outer-grid">
                {outer.map(outerwear => (
                    <button className="outer-item" key={outerwear.id} onClick={() => handleProductClick(outerwear.id)}>
                        <img className="outer-image" src={outerwear.src} alt={outerwear.productName} />
                        <div className="outer-info">
                            <h3 className="outer-name">{outerwear.productName}</h3>
                            <p className="outer-price">가격: {outerwear.price}원</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
