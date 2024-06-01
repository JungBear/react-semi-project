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
                <button>{products.color[0]}</button>
                <button>{products.color[1]}</button>
                <p>사이즈</p>
                <button>{products.szie}</button>
                
                
                <div>
                    
                    <button> - </button>
                    <button> + </button>
                </div>
                <div>
                    <p>총 결제금액</p>
                    <p>{products.price * count}원</p>
                </div>
            </div>
            <button>바로구매</button>
            <button>장바구니</button>
        </div>
    )    
}