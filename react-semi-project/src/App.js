import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import ShoppingBasket from './components/shoppingBasket/shoppingBasket';
import ProductDetail from './components/products-detail/productsDetail';

function App() {
  return (
    <div>
      <header/>
      <Route path='/product' element={<ProductDetail />}/>
      <Route path='/cart' element={<ShoppingBasket/>}/>
    </div>
  );
}

export default App;
