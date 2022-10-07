import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext.js';
import NotFoundPage from './views/NotFoundPage.js';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import About from './views/About.js';
import ItemDetail from './components/itemDetailContainer/ItemDetail.js';
import Cart from './views/Cart/Cart.js';
import Categories from './views/Categories'
import Checkout from './views/Checkout/Checkout.js';

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product/:id' element={<ItemDetail />} />
          <Route path='/category/:category' element={<Categories />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CartContextProvider>

  )
}

export default App;
