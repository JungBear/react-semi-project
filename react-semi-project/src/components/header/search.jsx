import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { setSearchQuery } from "../../features/products/productslice";
import "./search.css"; 

export default function Search() {
    const [searchQuery, setSearchQueryLocal] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate(); // useNavigate 

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("검색어:", searchQuery); // 검색어가 제대로 업데이트되는지 확인
        dispatch(setSearchQuery(searchQuery));
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // 검색 결과 페이지로 이동합니다.
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    className="search-box"
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQueryLocal(e.target.value)}
                />
                <button className="search-button" type="submit">
                    검색
                </button>
            </form>
        </div>
    );
}
