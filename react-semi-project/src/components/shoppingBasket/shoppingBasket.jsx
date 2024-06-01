import React from "react"
import "./shoppingBasket.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../features/products/productslice";

export default function ShoppingBasket(){

    const products = useSelector((state) => state.products.products);

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
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>
                                    <img src={products[0].src} alt={products[0].productName} style={{ width: "50px", height: "auto" }} />
                                </td>
                                <td>
                                    <p>{products[0].productName}</p>
                                    <p>{products[0].color[0]}</p>
                                </td>
                                <td>
                                    <input type="text" value={products[0].count} size={1}></input>
                                </td>
                                <td>{products[0].price}</td>
                                <td>0원</td>
                                <td>
                                    {/* <input type="button" onClick={useDispatch(deleteFromCart)}/> */}
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    )
}