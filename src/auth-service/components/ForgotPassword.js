import React, {useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import '../stylesSheets/ForgotPassword.css'
import {ResetPassword} from "./ResetPassword";
import axios from "axios";
import {ReactNotifications, Store} from "react-notifications-component";
export const ForgotPassword = () =>{
    const navigate = useNavigate()
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    function handleSubmit(event) {
        event.preventDefault();
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/user/forgot-password/'+event.target.email.value,
        };
        setIsButtonClicked(true);
        axios.request(config)
            .then((response) => {
                console.log(response.data);
                if(response.data === 'OK'){
                    navigate('/')
                    Store.addNotification({
                        title: "Інформація",
                        message: "На вашу електронну адресу було надіслано лист для відновлення паролю.",
                        type: "info",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__bounceIn"],
                        animationOut: ["animate__animated", "animate__flipOutX"],
                        dismiss: {
                            duration: 5000
                        }
                    });
                }else {
                    navigate('/')
                    Store.addNotification({
                        title: "Помилка!",
                        message: "Виникла помилка під час відправки посилання для відновлення паролю.",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__bounceIn"],
                        animationOut: ["animate__animated", "animate__flipOutX"],
                        dismiss: {
                            duration: 5000
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return(
        <div className="ForgotPassword">
            <div className="forgotPassword-form-container">
                <form className="forgotPassword-form" onSubmit={handleSubmit}>
                    <label className='labelForForgotPassword' htmlFor = "email" >Електронна пошта</label>
                    <input className='inputForForgotPassword' type="email" required='true' placeholder="youremail@gmail.com" id = "email" name = "email"/>
                    { isButtonClicked === false ? (<button className='forgotPassword-button' style={{cursor: "pointer"}}  type='submit' >Скинути пароль</button>): (<button className='forgotPassword-button' style={{cursor: "not-allowed"}}  disabled={true}  type='submit' >Скинути пароль</button>)}
                </form>
            </div>
            <ReactNotifications />
        </div>

    )
}
