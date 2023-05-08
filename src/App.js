import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Footer from './components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './rtk/slices/productsSlice';
import React, { useEffect, useRef, useState } from 'react';
import Cart from './components/Pages/Products/Cart';
const ProductDetails = import('./components/Pages/Products/ProductDetail')
const Products = import('./components/Pages/Products/Products')
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/:Category"
            element={<Products />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      <Cart />
      <Footer />
    </>
  );
}

export default App;
