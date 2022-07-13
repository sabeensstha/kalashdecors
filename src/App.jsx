import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Demo from './pages/Demo';
import { selectUsername } from "./features/userSlice"
import { useSelector } from 'react-redux';
import Logout from './components/Logout';
import React from 'react';

const App =() => {
  const username = useSelector(selectUsername)

  return (
    <BrowserRouter>
        <div>
          <Routes>
            {
              username ? <Route path='/logout' element={<Logout />} />  : <Route path="/login" element={ <Login /> } />
            }
            
            <Route path="/cart" element={ <Cart/> } />
            <Route path="/demo" element={ <Demo/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/product/:id" element={ <ProductDetail/> } />
            <Route path="/product" element={ <ProductList/> } />
            <Route path="/" element={ <Home/> } exact />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
