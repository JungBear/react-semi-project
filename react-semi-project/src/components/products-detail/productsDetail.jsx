import products from "../../features/products/product"
//import { increseCount, minusCount } from "../../features/products/productslice"


export default function ProductDetail(){
    
    
    return(
        <div>
            <div className="detail-img">
                <img src={products[0].src}></img>
            </div>
            <div className="detail-info">
                <div>{products[0].productName}</div>
                <div>{products[0].price}</div>
                <p>색상</p>
                    {products[0].color.map((color, i)=>(
                        <div className="detail-color-radio">
                            <input type="radio" id={`color${i}`} name="color" value={color}/> 
                            <label for={`color${i}`}>{color}</label>
                        </div>
                        
                    ))}
                <p>사이즈</p>
                    {products[0].szie.map((size, i) =>(
                        <input type="radio" id={`size${i}`} name="size" value={size}>{products[0].szie[0]}/</input>>
                        <label for={`size${i}`}></label>
                    ))}
                
                
                 <div>
                    <button onClick={minusCount}> - </button>
                        {products[0].count}
                    <button onClick={increseCount}> + </button>
                </div>
                <div>
                    <p>총 결제금액</p>
                    <p>{products[0].price * products[0].count}원</p>
                </div>
                
            </div>
            <button>바로구매</button>
            <button>장바구니</button>
        </div>
    )    
}