/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import Home from "../pages/Home/Home";
import CategoryProduct from "../pages/CategoryProduct/CategoryProduct";
import NotFound from "../pages/NotFound/NotFound";
import { HomeData } from "../Data/HomeData";
import {ScrollToTop} from '../hooks/ScrollToTop'
import "./App.scss";
import { useStateValue } from "../StateProvider";



function App() {

  const [{data}, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "CHARGE_DATA",
      datavalue: {
        ...HomeData
      }}
    )
  }, [])
 

  

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />} >
            
            <Route index element={<Home/>} />
            <Route path="categoryproduct/:id" element={<CategoryProduct/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
