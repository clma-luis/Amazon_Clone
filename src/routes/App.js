import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import Home from "../pages/Home/Home";
import ComputerAccesories from "../pages/ComputerAccesories/ComputerAccesories";
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
            <Route path="computer-accesories" element={<ComputerAccesories/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
