import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import ShoppingBasket from './components/shoppingBasket/shoppingBasket';

function App() {
  return (
    <div>
      <Route path='/' element={}/>
      <Route path='' element={}/>
      <Route path='cart' element={<ShoppingBasket/>}/>
    </div>
  );
}

export default App;
