import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import Basket from "../pages/basket/Basket";
import Detail from "../pages/detail/Detail";
import NotFoundPage from "../pages/notfound/NotFoundPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
