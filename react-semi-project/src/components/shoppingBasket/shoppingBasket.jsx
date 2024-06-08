import React, { useEffect, useState } from "react"
import "./shoppingBasket.css"
import { useDispatch, useSelector } from "react-redux";
import {  changecount, decreasecount, increasecount, removeFromCart } from "../../features/cart/cartslice";

export default function ShoppingBasket(){
    const dispatch = useDispatch(); // useDispatch를 사용하여 dispatch 함수 가져오기
    const products = useSelector((state) => state.products.products);
    const cart = useSelector((state) => state.cart.cartItems);
    
    const [allChecked, setAllChecked] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        // 장바구니 항목이 변경될 때마다 체크된 상태를 업데이트
        setCheckedItems(cart.map((_, index) => index));
    }, [cart]);
    
    const handleCountChange = (e, index) => {
        const newcount = parseInt(e.target.value, 10);
        if (newcount >= 0) { // 수량이 0보다 큰지 확인
            dispatch(changecount({ index, count: newcount }));
        }
    };

    const handleRemoveFromCart = (index) => {
        dispatch(removeFromCart(products[index].id)); // 첫 번째 제품의 ID를 액션으로 전달
      };
    
    // thead의 체크박스를 해제하면 전부해제, 체크하면 전부 체크
    const handleAllCheckChange = (e) => {
        const isChecked = e.target.checked;
        setAllChecked(isChecked);
        if (isChecked) {
            setCheckedItems(cart.map((_, index) => index));
        } else {
            setCheckedItems([]);
        }   
    };

    // 각각의 상품들을 체크하면 체크, 해제되면 해제
    const handleItemCheckChange = (e, index) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setCheckedItems([...checkedItems, index]);
        } else {
            setCheckedItems(checkedItems.filter(item => item !== index));
        }
    };

    // 선택된 상품들의 가격만 총 상품금액에 표시
    const calculateTotalProductAmount = () => {
        return checkedItems.reduce((total, index) => {
            const item = cart[index];
            return total + (item.price * item.count);
        }, 0);
    };
      
    let totalProductAmount = calculateTotalProductAmount();
    
    const productPrice = (item)=>{
        let tempProductPrice = item.price * item.count;
        // console.log(totalProductAmount);
        return  fommater(tempProductPrice);
    }

    const increasecountHandler = (item) => {
        dispatch(increasecount(item))
    }

    const decreasecountHandler = (item) =>{
        dispatch(decreasecount(item))
    }
    
    function fommater(num){
        return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(num).replace('₩', '');
    }

    function orderAllProduct(){

    }
    
    // function orderChoiceProduct(){
    //     const price = checkedItems.map((item)=>{
    //         item.count * item.price
    //     })
    // }


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
                                    <input type="checkbox" checked={allChecked} onChange={handleAllCheckChange}></input>
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
                                <tr className="order-table-items" key={index}>
                                <td><input type="checkbox" checked={checkedItems.includes(index)} onChange={(e) => handleItemCheckChange(e, index)}/></td>
                                <td>
                                    <img src={item.src} alt={item.productName} style={{ width: "50px", height: "auto" }} />
                                </td>
                                <td>
                                    <p className="table-body-product-name font-bold">{item.productName}</p>
                                    <p className="table-body-select-option">{item.color[index]}, {item.size[index]}</p>
                                </td>
                                <td className="count-container">
                                    <input
                                    type="text"
                                    value={item.count}
                                    size={1}
                                    className="count-input"
                                    onChange={(e) => handleCountChange(e, index)}
                                    />
                                    <div className="count-btn-container">
                                        <img className="count-btn" src="/img/btn_count_up.gif" onClick={()=>increasecountHandler(item)}/>
                                        <img className="count-btn" src="/img/btn_count_down.gif" onClick={()=>decreasecountHandler(item)}/>
                                    </div>
                                </td>
                                <td className="font-bold">{productPrice(item)}원</td>
                                <td>무료</td>
                                <td>
                                    <input type="button" onClick={() => handleRemoveFromCart(index)} value={"삭제"}/>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <table className="order-totalsummary">
                        <colgroup>
                            <col style={{width:"23%"}}></col>
                            <col style={{width:"25%"}}></col>
                            <col style={{width:"auto"}}></col>
                        </colgroup>

                        <thead className="order-totalsummary-thead">
                            <tr className="order-totalsummary-title">
                                <th>총 상품금액</th>
                                <th>총 배송비</th>
                                <th>결제 예상 금액</th>
                            </tr>
                        </thead>

                        <tbody className="font-bold">
                            <tr>
                                <td><strong>{fommater(totalProductAmount)}</strong>원</td>
                                <td><span className="sign-span">+</span><strong>0</strong>원</td>
                                <td><span className="sign-span">=</span><strong>{fommater(totalProductAmount)}</strong>원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-btn-container">
                    {/* <button className="order-btn btn-black" onClick={orderAllProduct()}>전체 상품 주문</button>
                    <button className="order-btn btn-gray" onClick={orderChoiceProduct()}>선택 상품 주문</button> */}
                </div>
            </div>
        </div>
    )
}