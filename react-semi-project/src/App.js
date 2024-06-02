import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ShoppingBasket from './components/shoppingBasket/shoppingBasket';
import ProductDetail from './components/products-detail/productsDetail';
import Header from './components/header/header';
import Home from './components/home/home';
import Trousers from './components/clothes/trousers/trousers';
import Outer from './components/clothes/outer/outer';
import Tshirt from './components/clothes/tshirt/tshirt';
import SearchResults from './components/header/searchresults';

function App() {
  return (
    <div>
      <Header/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductDetail />}/>
        <Route path='/cart' element={<ShoppingBasket/>}/>
        <Route path='/outer' element={<Outer/>}/>
        <Route path='/trousers' element={<Trousers/>}/>
        <Route path='/tshirt' element={<Tshirt/>}/>
        <Route path='/search' element={<SearchResults />} /> {/* 검색 결과를 렌더링하는 경로 추가 */}
      </Routes>
    </div>
  );
}

export default App;
