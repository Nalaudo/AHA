import React from 'react';
import NotFoundPage from './pages/NotFoundPage.js';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Nosotros from './pages/Us.js';
import Productos from './pages/Products';
import Contacto from './pages/Contact.js';
import Cart from './pages/Cart.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/AHA' element={<Home />} />
        <Route exact path='/inicio' element={<Home />} />
        <Route exact path='/nosotros' element={<Nosotros />} />
        <Route exact path='/productos' element={<Productos />} />
        <Route exact path='/contacto' element={<Contacto />} />
        <Route exact path='/carrito' element={<Cart />} />
        <Route exact path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
