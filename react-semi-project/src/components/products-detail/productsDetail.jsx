import { useState } from "react";
import products from "../../features/products/product";
import "./productsDetail.css";


export default function ProductDetail(){
    const [count, setCount] = useState(products[0].count);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    function CountDecrease(){
        if(count > 0){
            setCount(count -1);
        }
    }
    function CountIncrease(){
        setCount(count +1);
    }
     
    function GetColor(event){
        setSelectedColor(event.target.value);
    }
    function GetSize(event){
        setSelectedSize(event.target.value);
    }

    return(
        <div className="detail-context-box">
            <div className="detail-img">
                <img src={products[0].src}></img>
            </div>
            <div className="detail-info">
                <div className="detail-product-name">{products[0].productName}</div>
                <div>{products[0].price}원</div>

                <div className="detail-color-box">
                    <p>색상</p>
                        {products[0].color.map((color, i)=>(
                            <div className="detail-color-radio">
                                <input type="radio" id={`color${i}`} name="color" value={color} onChange={GetColor}/> 
                                <label for={`color${i}`}>{color}</label>
                            </div>
                        ))}
                </div>
                <div className="detail-size-box">
                    <p>사이즈</p>
                        {products[0].szie.map((size, i) =>(
                            <div className="detail-size-radio">
                                <input type="radio" id={`szie${i}`} name="size" value={size} onChange={GetSize}></input>
                                <label for={`szie${i}`}>{size}</label>
                            </div>
                        ))}
                </div>
                
                <div className="detail-count">
                    {/* radio 2개 선택되면 비우고 새로운 개체받기 */}
                    <ul className="detail-selected">
                        <li>{selectedColor}</li>
                        <li>{selectedSize}</li>
                    </ul>
                    <button onClick={CountDecrease}>-</button>
                    <div>{count}</div>
                    <button onClick={CountIncrease}>+</button>
                </div>

                <div className="total-price">
                    <p>총 결제금액</p>
                    <p>{products[0].price * count}원</p>
                </div>
                <div>
                    <button className="buy-btn">바로구매</button>
                    <button className="cart-btn">장바구니</button>
                </div>
            </div>   
        </div>
    )    
}