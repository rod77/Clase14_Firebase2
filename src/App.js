import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { Checkout } from './components/Checkout/Checkout';
import CartProvider from './context/CartContext';
import './App.css'
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
