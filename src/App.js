import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext.js';
import NotFoundPage from './views/NotFoundPage.js';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import About from './views/About.js';
import Products from './views/Products/Products';
import ItemDetail from './components/itemDetailContainer/ItemDetail.js';
import Contact from './views/Contact.js';
import Cart from './views/Cart/Cart.js';
import Categories from './views/Products/Categories'
import Checkout from './views/Checkout/Checkout.js';

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/inicio' element={<Home />} />
          <Route path='/nosotros' element={<About />} />
          <Route path='/productos' element={<Products />} />
          <Route path='/productos/:id' element={<ItemDetail />} />
          <Route path='/categoria/:category' element={<Categories />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/carrito' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CartContextProvider>

  )
}

export default App;
