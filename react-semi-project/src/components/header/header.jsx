import "./header.css";

export default function Header(){
    return(
        <div className="header-con"> 
           <div className="header-box">
            <button className="main-logo">
                <h1>로고</h1>
            </button>
            <input className="serch-box"/> 
            <button className="icon">장바구니</button>
           </div>
        
        </div>  
    )
}