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
      <header/>
      <Route> 
        <Routes path='/product' element={<ProductDetail />}/>
        <Routes path='/cart' element={<ShoppingBasket/>}/>
      </Route>
    </div>
  );
}

export default App;
