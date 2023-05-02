import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../stylesSheets/LoginAndRegister.css'
export const Login = () =>{

    function handleSubmit() {

    }

    return(
        <div className="Login">
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor = "email" >Електронна пошта</label>
                    <input type="email" required='true' placeholder="youremail@gmail.com" id = "email" name = "email"/>
                    <label htmlFor="password">Пароль</label>
                    <input  type="password" required='true' placeholder="********" id="password" name="password"/>
                    <button className='auth-button' type='submit' style={{cursor: "pointer"}}  >Увійти</button>

                </form>
                <Link to={"/register"}>Немає акаунту? Зареєструватися.</Link>
            </div>
        </div>

    )
}
