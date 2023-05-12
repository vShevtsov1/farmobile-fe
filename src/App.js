import React, {useState} from "react";
import {Login} from "./auth-service/components/Login";
import {Register} from "./auth-service/components/Register";
import {ForgotPassword} from "./auth-service/components/ForgotPassword";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import {ResetPassword} from "./auth-service/components/ResetPassword";
import {Activation} from "./auth-service/components/Activation";
import Navigation from "./main-page-service/components/navigation";
import RentComponent from "./main-page-service/components/rentComponent";
import Header from "./main-page-service/components/header";
import MainPage from "./main-page-service/components/mainPage";
import Question from "./main-page-service/components/question";
import Footer from "./main-page-service/components/footer";
import { CartContext } from "./main-page-service/config/CartContext";
import Catalog from "./catalog-service/components/catalog";
import ItemInfo from "./catalog-service/components/item-info";
import CartSubmit from "./cart-service/components/cart-submit";
import Payment from "./cart-service/components/payment";
import AdminPanel from "./admin-service/components/admin-panel";
import AdminProducts from "./admin-service/components/admin-products";
import Order from "./admin-service/components/order";


function App() {
  const [cartItems, setCartItems] = useState(new Map());

  return (
      <CartContext.Provider value={{ cartItems, setCartItems }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>}/>
            <Route path="/activation" element={<Activation/>}/>
            <Route path="/navigation" element={<Navigation/>}/>
            <Route path="/rent" element={<RentComponent/>}/>
            <Route path="/header" element={<Header/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/question" element={<Question/>}/>
            <Route path="/footer" element={<Footer/>}/>
            <Route path="/catalog/:categoryId" element={<Catalog/>}/>
            <Route path="/catalog/item/:itemId" element={<ItemInfo/>}/>
            <Route path="/cart-submit" element={<CartSubmit/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/admin" element={<AdminPanel/>}/>
            <Route path="/products" element={<AdminProducts/>}/>
            <Route path="/order/:orderId" element={<Order/>}/>
          </Routes>
        </BrowserRouter>

      </div>
      </CartContext.Provider>
  );
}

export default App;
