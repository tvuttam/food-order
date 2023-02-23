import React from "react";
import { Route , Routes } from "react-router-dom";
import { Home ,Foodshow,Restaurant,Restaurant1 } from "../pages";
import { Header, Footer ,Order} from "../components/index";
import Cart from "../components/Cart";

const Router = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restourent" element={<Restaurant />}></Route>
        <Route path="/restourent1" element={<Restaurant1 />}></Route>
        <Route path="/foodshow" element={<Foodshow />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
