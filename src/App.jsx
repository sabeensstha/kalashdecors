import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={ <Login/> } />
            <Route path="/cart" element={ <Cart/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/product/:id" element={ <Product/> } />
            <Route path="/product" element={ <ProductList/> } />
            <Route path="/" element={ <Home/> } exact />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
