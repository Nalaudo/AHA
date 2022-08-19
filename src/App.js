import React from 'react';
import NotFoundPage from './pages/NotFoundPage.js';
import NavBar from './components/NavBar/NavBar';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros.js';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto.js';
import Cart from './pages/Cart.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting={"HOLA MUNDO"} />
      <Routes>
        <Route exact path='/' element={<Inicio />} />
        <Route exact path='/AHA' element={<Inicio />} />
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
