import './tshirt.css';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Tshirt() {
    const products = useSelector((state) => state.products.products);
    const tshirts = products.filter(product => product.category === "상의");

    return (
        <div className="tshirt-container">
            <h1>상의</h1>
            <div className="tshirt-grid">
                {tshirts.map(tshirt => (
                    <div className="tshirt-item" key={tshirt.id}>
                        <img className="tshirt-image" src={tshirt.src} alt={tshirt.productName} />
                        <div className="tshirt-info">
                            <h3 className="tshirt-name">{tshirt.productName}</h3>
                            <p className="tshirt-price">가격: {tshirt.price}원</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
