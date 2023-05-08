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



function App() {


  return (
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
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
