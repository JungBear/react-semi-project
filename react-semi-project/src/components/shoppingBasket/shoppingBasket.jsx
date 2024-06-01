import React from "react"
import "./shoppingBasket.css"
import { useDispatch, useSelector } from "react-redux";
import {  removeFromCart } from "../../features/cart/cartslice";
import { changeQuantity } from "../../features/products/productslice";

export default function ShoppingBasket(){
    const dispatch = useDispatch(); // useDispatch를 사용하여 dispatch 함수 가져오기
    const products = useSelector((state) => state.products.products);
    const cart = useSelector((state) => state.cart.cartItems);
    
    const handleCountChange = (e) => {
        dispatch(changeQuantity({ index: 0, quantity: e.target.value }));
      };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(products[0].id)); // 첫 번째 제품의 ID를 액션으로 전달
      };
      
      // 삭제 버튼에 onClick 이벤트 핸들러 추가
      <input type="button" onClick={handleRemoveFromCart} value={"삭제"}/>

    const totalPrice = products[0].price * products[0].count;
    const formattedPrice = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(totalPrice);
    const priceWithoutCurrency = formattedPrice.replace('₩', ''); // 원화 표시 제거

    return(
        <div className="shoppingcart-container">
            <div className="shoppingcart-inner">
                <div className="shoppingcart-title">
                    <p className="shoppingcart-title-content">장바구니</p>
                </div>
                <div className="order-table-container">
                    <table className="order-table">
                        <colgroup>
                            <col style={{ width: "27px" }}/>
                            <col style={{ width: "98px" }}/>
                            <col style={{ width: "auto" }}/>
                            <col style={{ width: "98px" }}/>
                            <col style={{ width: "120px" }}/>
                            <col style={{ width: "98px" }}/>
                            <col style={{ width: "120px" }}/>
                        </colgroup>
                        
                        <thead className="order-table-head">
                            <tr>
                                <th>
                                    <input type="checkbox"></input>
                                </th>
                                <th>이미지</th>
                                <th>상품정보</th>
                                <th>수량</th>
                                <th>구매 금액</th>
                                <th>배송비</th>
                                <th>삭제</th>
                            </tr>
                        </thead>

                        <tbody className="order-table-body">
                            {cart.map((item, index) => (
                                <tr key={index}>
                                <td><input type="checkbox"/></td>
                                <td>
                                    <img src={item.src} alt={item.productName} style={{ width: "50px", height: "auto" }} />
                                </td>
                                <td>
                                    <p>{item.productName}</p>
                                    <p>{item.color[0]}</p>
                                </td>
                                <td>
                                    <input
                                    type="text"
                                    value={item.quantity}
                                    size={1}
                                    onChange={(e) => handleCountChange(e, index)}
                                    />
                                </td>
                                <td>{new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(item.price * item.quantity)}</td>
                                <td>무료</td>
                                <td>
                                    <input type="button" onClick={() => handleRemoveFromCart(item.id)} value={"삭제"}/>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    )
}