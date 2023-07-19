import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Footer from './components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './rtk/slices/productsSlice';
import React, { useEffect, useRef, useState } from 'react';
import Cart from './components/Pages/prods/Cart';
import ProductDetails from './components/Pages/prods/ProductDetail'
import Products from './components/Pages/prods/Products.jsx'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
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
