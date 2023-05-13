import React, {useState} from "react";
import {Login} from "./auth-service/components/Login";
import {Register} from "./auth-service/components/Register";
import {ForgotPassword} from "./auth-service/components/ForgotPassword";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import {ResetPassword} from "./auth-service/components/ResetPassword";
import {Activation} from "./auth-service/components/Activation";
import MainPage from "./main-page-service/components/mainPage";
import { CartContext } from "./main-page-service/config/CartContext";
import Catalog from "./catalog-service/components/catalog";
import ItemInfo from "./catalog-service/components/item-info";
import CartSubmit from "./cart-service/components/cart-submit";
import AdminPanel from "./admin-service/components/admin-panel";
import Order from "./admin-service/components/order";







function App() {
  const [cartItems, setCartItems] = useState(new Map());

  return (
      <CartContext.Provider value={{ cartItems, setCartItems }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>}/>
            <Route path="/activation" element={<Activation/>}/>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/catalog/:categoryId" element={<Catalog/>}/>
            <Route path="/catalog/item/:itemId" element={<ItemInfo/>}/>
            <Route path="/cart-submit" element={<CartSubmit/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
            <Route path="/order/:orderId" element={<Order/>}/>
          </Routes>
        </BrowserRouter>

      </div>
      </CartContext.Provider>
  );
}

export default App;
