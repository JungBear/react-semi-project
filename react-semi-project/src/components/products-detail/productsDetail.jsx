import products from "../../features/products/product";
import "./productsDetail.css";


export default function ProductDetail(){
    
    
    return(
        <div className="detail-context-box">
            <div className="detail-img">
                <img src={products[0].src}></img>
            </div>
            <div className="detail-info">
                <div>{products[0].productName}</div>
                <div>{products[0].price}</div>

                <div>
                    <p>색상</p>
                        {products[0].color.map((color, i)=>(
                            <div className="detail-color-radio">
                                <input type="radio" id={`color${i}`} name="color" value={color}/> 
                                <label for={`color${i}`}>{color}</label>
                            </div>
                        ))}
                </div>

                <p>사이즈</p>
                    {products[0].szie.map((size, i) =>(
                        <div className="detail-size-radio">
                            <input type="radio" id={`szie${i}`} name="size" value={size}></input>
                            <label for={`szie${i}`}>{size}</label>
                        </div>
                    ))}
                
                
                 <div>
                    <button > - </button>
                        {products[0].count}
                    <button > + </button>
                </div>

                <div className="total-price">
                    <p>총 결제금액</p>
                    <p>{products[0].price * products[0].count}원</p>
                </div>
                <div>
                    <button className="buy-btn">바로구매</button>
                    <button className="cart-btn">장바구니</button>
                </div>
            </div>   
        </div>
    )    
}