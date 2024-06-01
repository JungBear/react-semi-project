import products from "../../features/products/product"

export default function ProductDetail(){
    return(
        <div>
            <div>
                <img src={product.src}></img>
            </div>
            <div>
                <div>{products.productName}</div>
                <div>{products.price}</div>
                <p>색상</p>
                <button ></button>
            </div>
        </div>
    )    
}