import React from 'react';
import './App.css';

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Nav
import Navbar from './components/Header/Navbar';
//Pages
import Home from './components/pages/views/Home';
import ItemDetailContainer from './components/pages/ItemDetailContainer/ItemDetailContainer';

//CartContext

import CartProvider from './context/CartContext';
import InCart from './components/pages/views/InCart/InCart';



function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryId" element={<Home />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<InCart />} />
        </Routes>
      </CartProvider>

    </Router>
  );
}

export default App;
