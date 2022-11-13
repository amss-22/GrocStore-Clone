import { Routes, Route } from "react-router-dom"

import React from 'react'
import HomePage from "../pages/HomePage"
import Login from "../pages/Login"
import ProductPage from "../pages/ProductPage"
import SingleProduct from "../pages/SingleProduct"
import CartPage from "../pages/CartPage"
import Signup from "../pages/Signup"
import PrivateRouter from "./PrivateRoute"
import { Admin } from "../pages/Admin"


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>

        <Route path="/product" element={
          
            <ProductPage />
          
        }></Route>
        <Route path="/:category/:id" element={<SingleProduct />}></Route>
        <Route path="/Cart" element={<CartPage />}></Route>
        <Route path="/Admin" element={
          <PrivateRouter>
            <Admin />
          </PrivateRouter>
        }></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes