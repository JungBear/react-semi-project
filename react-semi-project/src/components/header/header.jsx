import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header-con">
      <div className="header-box">
       
        <Link to={'/'} className="main-logo"><h1>로고</h1></Link>  
        
        <input className="serch-box" placeholder="검색어를 입력하세요" />
        <button className="icon">장바구니</button>
      </div>
      <div className="radio-group">
      <Link to={'/tshirt'}><input type="radio" id="option1" name="category" value="상의" /></Link> 
        <label htmlFor="option1">상의</label>
        
        <Link to={'/trousers'}><input type="radio" id="option2" name="category" value="하의" /></Link> 
        <label htmlFor="option2">하의</label>
        
        <Link to={'/outer'}><input type="radio" id="option3" name="category" value="아우터" /></Link> 
        <label htmlFor="option3">아우터</label>
      </div>
    </div>
  );
}
