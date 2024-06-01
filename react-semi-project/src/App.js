import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ShoppingBasket from './components/shoppingBasket/shoppingBasket';
import ProductDetail from './components/products-detail/productsDetail';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductDetail />}/>
        <Route path='/cart' element={<ShoppingBasket/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
