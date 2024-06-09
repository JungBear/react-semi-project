import React from 'react';
import { useSelector } from 'react-redux';
import './searchr.css'; // 검색 결과 스타일 파일을 가져옵니다.
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  // Redux store에서 검색어와 검색 결과를 가져옵니다.
  const searchQuery = useSelector(state => state.products.searchQuery);
  const products = useSelector(state => state.products.products);

  // 검색어와 일치하는 상품을 필터링합니다.
  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();

  const handleProductClick = (id) => {
      navigate(`/product/${id}`);
  };

  return (
    <div className="search-results-container">
      <h2>검색 결과</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-item" onClick={() => handleProductClick(product.id)}>
              <img src={product.src} alt={product.productName} className="product-image" />
              <div className="product-name">{product.productName}</div>
              <div className="product-price">{product.price}원</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results-message">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default SearchResults;
