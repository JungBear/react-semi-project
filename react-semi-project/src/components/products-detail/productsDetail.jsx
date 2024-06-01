import products from "../../features/products/product"


export default function ProductDetail(){
    
    
    return(
        <div>
            <div>
                <img src={products.src}></img>
            </div>
            <div>
                <div>{products.productName}</div>
                <div>{products.price}</div>
                <p>색상</p>
                
                <input id="color1" name="color" type="radio" value={products[0].color[0]}></input>
                <label for="color1">{products[0].color[0]}</label>
                <input id="color2" name="color" type="radio" value={products[0].color[1]}></input>
                <p>사이즈</p>
                <input type="radio" value={products[0].szie[0]}></input>
                
                 <div>
                    
                    <button> - </button>
                    <button> + </button>
                </div>
                <div>
                    <p>총 결제금액</p>
                    <p>{products.price}원</p>
                </div>
                
            </div>
            <button>바로구매</button>
            <button>장바구니</button>
        </div>
    )    
}