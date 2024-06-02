import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./search"; // Search 컴포넌트를 import합니다.
import "./header.css";

export default function Header() {
  return (
    <header className="header-con">
      <div className="header-box">
        <NavLink exact to={'/'} className="main-logo">로고</NavLink>
        {/* 검색 컴포넌트를 추가합니다. */}
        <Search />
        <button className="icon">장바구니</button>
      </div>
      <nav className="nav-bar">
        <NavLink exact to={'/tshirt'} className="nav-link" activeClassName="active">상의</NavLink>
        <NavLink exact to={'/trousers'} className="nav-link" activeClassName="active">하의</NavLink>
        <NavLink exact to={'/outer'} className="nav-link" activeClassName="active">아우터</NavLink>
      </nav>
    </header>
  );
}
