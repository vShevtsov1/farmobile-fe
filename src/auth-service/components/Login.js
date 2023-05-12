import React from "react";
import {Link, useNavigate} from "react-router-dom";
import '../stylesSheets/LoginAndRegister.css'
import axios from "axios";
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'
import { Store } from 'react-notifications-component';
import 'animate.css/animate.min.css';
export const Login = () =>{
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        let data = JSON.stringify({
            "email": event.target.email.value,
            "password": event.target.password.value,
            "rememberMe": event.target.rememberMe.checked
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/user/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios.request(config)
            .then((response) => {
                if(response.data.status==="FAILED"){
                    Store.addNotification({
                        title: "ПОМИЛКА!",
                        message: "Не правильна пошта/пароль або акаунт не активований!",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__bounceIn"],
                        animationOut: ["animate__animated", "animate__flipOutX"],
                        dismiss: {
                            duration: 5000
                        }
                    });
                }else {
                    localStorage.setItem('jwt', response.data.jwt);
                    localStorage.setItem('role', response.data.roles);
                    navigate("/main");
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
                        <input  className='checkbox' type='checkbox' name='rememberMe'  /><label htmlFor='checkbox' >Запам'ятати мене?</label>
                        <span className="forgotPassword"><Link to={"/forgotpassword"} >Забули пароль?</Link></span>
                    </div>


                    <button className='auth-button' type='submit' style={{cursor: "pointer"}}  >Увійти</button>

                </form>
                <Link to={"/register"}>Немає акаунту? Зареєструватися.</Link>
            </div>
            <ReactNotifications />
        </div>

    )
}
