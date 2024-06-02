import './trousers.css';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Trousers() {
    const products = useSelector((state) => state.products.products);
    const trousers = products.filter(product => product.category === "하의");

    return (
        <div className="trousers-container">
            <h1>하의</h1>
            <div className="trousers-grid">
                {trousers.map(trouser => (
                    <div className="trousers-item" key={trouser.id}>
                        <img className="trousers-image" src={trouser.src} alt={trouser.productName} />
                        <div className="trousers-info">
                            <h3 className="trousers-name">{trouser.productName}</h3>
                            <p className="trousers-price">가격: {trouser.price}원</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
