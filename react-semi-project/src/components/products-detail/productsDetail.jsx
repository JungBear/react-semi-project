// ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './productsDetail.css';
import { addToCart } from '../../features/cart/cartslice';

export default function ProductDetail() {
    const { id } = useParams(); // URL에서 제품 ID를 추출
    const products = useSelector(state => state.products.products); // Redux 상태에서 제품 목록을 가져옴
    const product = products.find(p => p.id === parseInt(id)); // URL에서 추출한 ID와 일치하는 제품을 찾음

    const dispatch = useDispatch();

    // 상태 변수 초기화

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [sizeButtonsEnabled, setSizeButtonsEnabled] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedCount, setSelectedCount] = useState(0);
    const [seletedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        console.log(seletedProduct);
    }, [seletedProduct, selectedCount]);

    if (!product) { // 제품이 존재하지 않을 경우
        return <div>Product not found</div>; // 제품을 찾을 수 없음을 표시
    }

    // 총 가격 계산
    const totalPrice = selectedOptions.reduce((acc, option, i) => {
        const price = product.price * selectedCount;
        return acc + price;
    }, 0);

    function selectColor(color) {
        if (selectedColor === color) { // 이미 선택된 색상을 다시 선택하면
            setSelectedColor(''); // 색상 선택 해제
            setSelectedSize(''); // 사이즈 선택 해제
            setSizeButtonsEnabled(false); // 사이즈 버튼 비활성화
        } else { // 다른 색상을 선택하면
            setSelectedColor(color); // 색상 선택
            setSelectedSize(''); // 기존 사이즈 선택 해제
            setSizeButtonsEnabled(true); // 사이즈 버튼 활성화
        }
    }

    function selectSize(size) {
        setSelectedSize(selectedSize === size ? '' : size); // 선택된 사이즈 토글
        updateSelectedOptions(selectedColor, selectedSize === size ? '' : size); // 선택된 옵션 업데이트
    }

    function updateSelectedOptions(seletColor, selectSize) {
        if (seletColor === '' || selectSize === '') { // 색상 또는 사이즈가 선택되지 않은 경우
            return;
        } else if (seletColor !== '' && selectSize !== '') { // 색상과 사이즈가 모두 선택된 경우 
            const option = `${seletColor}/${selectSize}`;
            
            if (!selectedOptions.includes(option)) { // 선택된 옵션이 이미 존재하지 않는 경우    
                const newProduct= {...product, color: seletColor, size: selectSize};
                setSelectedProduct(newProduct);
                setSelectedOptions(prevOptions => [...prevOptions, option]); // 선택된 옵션 추가
            } else {
                alert('이미 존재하는 옵션입니다. 리스트를 확인해주세요.'); // 이미 존재하는 옵션 경고
            }
        }
    }

    function deleteOption(i) {
        const newOptions = [...selectedOptions]; // 기존 옵션 배열 복사
        newOptions.splice(i, 1); // 선택된 옵션 제거
        setSelectedOptions(newOptions); // 업데이트된 옵션 설정
    }

    function handleCountChange(quantity) {
        setSelectedCount(Number(quantity));
        const newProduct= {...seletedProduct, count: Number(quantity)};
        
            setSelectedProduct(newProduct);
            
            
    }

    const handleAddToCart = () => {
        dispatch(addToCart(seletedProduct));
    };


    return (
        <div className="detail-context-box">
            <div className="detail-img">
                <img src={product.src} alt={product.productName} /> {/* 제품 이미지와 이름을 출력 */}
            </div>
            <div className="detail-info">
                <h2>{product.productName}</h2>
                <h3>{product.price.toLocaleString()}원</h3>

                <div className="detail-color">
                    <div>색상</div>
                    {product.color.map((color, i) => (
                        <div key={i} className={`detail-color-button ${selectedColor === color ? 'selected' : ''}`}
                            onClick={() => selectColor(color)}>
                            {color}
                        </div>
                    ))}
                </div>

                <div className="detail-size">
                    <div>사이즈</div>
                    {product.size.map((size, i) => (
                        <div key={i}
                            className={`detail-size-button ${selectedSize === size ? 'selected' : ''} ${!sizeButtonsEnabled ? 'disabled' : ''}`}
                            onClick={() => !sizeButtonsEnabled ? null : selectSize(size)}>
                            {size}
                        </div>
                    ))}
                </div>
                <div className="detail-count">
                    {selectedOptions && (
                        selectedOptions.map((option, i) => (
                            <div className="detail-selected" key={i}>
                                <div>{option}</div>
                                <div>
                                    <select onChange={(e) => handleCountChange(e.target.value)}>
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <option key={num} value={num}>{num}개</option>
                                        ))}
                                    </select>
                                </div>
                                <button className="seleted-delete-btn" onClick={() => deleteOption(i)}> x </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="total-price">
                    <div>총 결제금액</div>
                    <div>{totalPrice.toLocaleString()}원</div>
                </div>
                <div>
                    <button className="buy-btn">바로구매</button>
                    <button className="cart-btn" onClick={handleAddToCart} >장바구니</button>
                </div>
            </div>
        </div>
    );
}
