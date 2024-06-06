import { useState } from "react";
import products from "../../features/products/product";
import "./productsDetail.css";


export default function ProductDetail(){
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [sizeButtonsEnabled, setSizeButtonsEnabled] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedCount, setSelectedCount] = useState({});

    const totalPrice = selectedOptions.reduce((acc, selectedOptions, i) => {
        const price = products[0].price * selectedCount[i];
        return acc + price;
    }, 0);

    function selectColor(color) {
        // 한번 선택한 색상을 선택할때 => 색상,사이즈 모두 선택해제 + 사이즈버튼 비활성화
        if(selectedColor === color){
            setSelectedColor('');
            setSelectedSize('');
            setSizeButtonsEnabled(false);
        }else{
            // 다른 색상선택 => 색상저장,사이즈 선택헤제(사이즈 다시 선택을 위해) + 사이즈 버튼 활성화
            setSelectedColor(color);
            setSelectedSize('');
            setSizeButtonsEnabled(true);
        }
    }
    
    function selectSize(size) {
        setSelectedSize(selectedSize === size ? '' : size);
        updateSelectedOptions(selectedColor, selectedSize === size ? '' : size);
    }

    function updateSelectedOptions(color, size) {
        if (color === '' || size === '') {
            return;
        }else if(color !== '' && size !== ''){
            const option = `${color}/${size}`;
            if (!selectedOptions.includes(option)) {
                setSelectedOptions(prevOptions => [...prevOptions, option]);
            }else{
                alert('이미 존재하는 옵션입니다. 리스트를 확인해주세요.');
            }
        }
    }

    function deleteOption(i) {
        // 선택한 i번째를 없앤 새 배열 생성
        const newOptions = [...selectedOptions];
        newOptions.splice(i, 1);
        setSelectedOptions(newOptions);
    }

    function handleCountChange(i, count) {
        setSelectedCount(prevState => ({
            ...prevState,
            [i]: count
        }));
    }

    return(
        <div className="detail-context-box">
            <div className="detail-img">
                <img src={products[0].src}></img>
            </div>
            <div className="detail-info">
                <h2>{products[0].productName}</h2>
                <h3>{products[0].price.toLocaleString()}원</h3>

                <div className="detail-color">
                    <div>색상</div>
                    {products[0].color.map((color, i)=>(
                        <div key={i} className={`detail-color-button ${selectedColor === color ? 'selected' : ''}`} 
                            onClick={() => selectColor(color)}> 
                            {color}
                        </div>
                    ))}
                </div>
                
                <div className="detail-size">
                    <div>사이즈</div>
                    {products[0].szie.map((size, i) =>(
                        <div key={i} 
                             className={`detail-size-button ${selectedSize === size ? 'selected' : ''} ${!sizeButtonsEnabled ? 'disabled' : ''} `} 
                             onClick={() => !sizeButtonsEnabled ? 'disabled' : selectSize(size)}>
                            {size}
                        </div>
                    ))}
                </div>
                <div className="detail-count">
                { selectedOptions && (
                        selectedOptions.map((option, i) => (
                            <div className="detail-selected" key={i}>
                                <div>{option}</div>
                                <div>
                                    <select onChange={(e) => handleCountChange(i, e.target.value)}>
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
                    <button className="cart-btn">장바구니</button>
                </div>
            </div>   
        </div>
    )    
}
