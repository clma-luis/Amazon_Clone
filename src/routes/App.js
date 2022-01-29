/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import Home from "../pages/Home/Home";
import CategoryProduct from "../pages/CategoryProduct/CategoryProduct";
import ProductPage from "../pages/ProductPage/ProductPage";
import Checkout from "../pages/Checkout/Checkout";
import NotFound from "../pages/NotFound/NotFound";
import {ScrollToTop} from '../hooks/ScrollToTop'
import "./App.scss";


function App() {




  return (
    <div className="App">
      


      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="/categoryproduct/:id" element={<CategoryProduct/>} />
            <Route exact path="/product/:category/:product" element={<ProductPage/>} />
            <Route exact path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
