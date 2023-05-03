import React, {useState} from "react";
import {Login} from "./auth-service/components/Login";
import {Register} from "./auth-service/components/Register";
import {ResetPassword} from "./auth-service/components/ResetPassword";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css"



function App() {


  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/resetPassword" element={<ResetPassword/>}/>
          </Routes>
        </BrowserRouter>

      </div>
  );
}

export default App;
