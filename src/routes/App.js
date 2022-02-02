/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import Home from "../pages/Home/Home";
import CategoryProduct from "../pages/CategoryProduct/CategoryProduct";
import ProductPage from "../pages/ProductPage/ProductPage";
import Checkout from "../pages/Checkout/Checkout";
import SignIn from "../pages/SignIn/SignIn";
import Payment from "../pages/Payment/Payment";
import Orders from "../pages/Orders/Orders";
import NotFound from "../pages/NotFound/NotFound";
import { ScrollToTop } from "../hooks/ScrollToTop";
import { useStateValue } from "../StateProvider";
import { app } from "../firebase";
import "./App.scss";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JIltuIBTeQ7oc8iNkKzMlbRyH3ShQKMHYUVIXVSiq9pbqDCypg8JIopZGsEchrTjcUL2ytokLPHAvRBwguW0qLr00KS3fd6KO"
);
 
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when  the app comonent loads...
    app.auth().onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categoryproduct/:id" element={<CategoryProduct />} />
            <Route
              exact
              path="/product/:category/:product"
              element={<ProductPage />}
            />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              path="payment"
              element={
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              }
            />
            <Route path="orders" element={<Orders/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route exact path="/SignIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
