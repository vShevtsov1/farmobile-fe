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

                    <label className='labelsForLoginAndRegister' htmlFor = "email" >Електронна пошта</label>
                    <input className='inputsForLoginAndRegister' type="email" required='true' placeholder="youremail@gmail.com" id = "email" name = "email"/>
                    <label className='labelsForLoginAndRegister' htmlFor="password">Пароль</label>
                    <input  className='inputsForLoginAndRegister' type="password" required='true' placeholder="********" id="password" name="password"/>

                    <div className='checkboxAndResetPassword'>
                        <input  className='checkbox' type='checkbox' name='checkbox'  /><label htmlFor='checkbox' >Запам'ятати мене?</label>
                        <span className="resetPassword"><Link to={"/resetPassword"} >Забули пароль?</Link></span>
                    </div>


                    <button className='auth-button' type='submit' style={{cursor: "pointer"}}  >Увійти</button>

                </form>
                <Link to={"/register"}>Немає акаунту? Зареєструватися.</Link>
            </div>
        </div>

    )
}
