import React, {useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import '../stylesSheets/LoginAndRegister.css'
import axios from "axios";
import {ReactNotifications, Store} from "react-notifications-component";


export const Register = () => {
    const [passwordLength, setPasswordLength] = useState(false);
    const [passwordUpper, setPasswordUpper] = useState(false);
    const [passwordNum, setPasswordNum] = useState(false);
    const navigate = useNavigate();

    function changePassword(event) {
        if (event.target.value.length < 8 ){
            setPasswordLength(false)
        }else {
            setPasswordLength(true)
        }
        if (containsUppercase(event.target.value)){
            setPasswordUpper(true)
        }else {
            setPasswordUpper(false)
        }
        if (hasNumber(event.target.value)){
            setPasswordNum(true)
        } else {
           setPasswordNum(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        let data = JSON.stringify({
            "name": event.target.name.value,
            "surname": event.target.surname.value,
            "email": event.target.email.value,
            "password": event.target.password.value
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/user/register',
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
                        message: "Електронна адреса вже зареєстрована!",
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
                    navigate('/')
                    Store.addNotification({
                        title: "Інформація",
                        message: "На вашу електронну адресу було надіслано лист для активації профілю.",
                        type: "info",
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

    function containsUppercase(str) {
        return str !== str.toLowerCase();

    }
    function hasNumber(myString) {
        return /\d/.test(myString);
    }




    return (
        <div className="Register">
            <div className="auth-form-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <label className='labelsForLoginAndRegister' htmlFor="name">Ім'я</label>
                    <input className='inputsForLoginAndRegister' name="name" id="name" required='true' placeholder="Ім'я"/>
                    <label className='labelsForLoginAndRegister' htmlFor="surname">Прізвище</label>
                    <input className='inputsForLoginAndRegister' name="surname" id="surname" required='true' placeholder="Прізвище"/>
                    <label className='labelsForLoginAndRegister' htmlFor="email">Електронна пошта</label>
                    <input className='inputsForLoginAndRegister' type="email" required='true' placeholder="youremail@gmail.com" id="email" name="email"/>
                    <label className='labelsForLoginAndRegister' htmlFor="password">Пароль</label>
                    <input className='inputsForLoginAndRegister' onChange={changePassword} type="password" required='true' placeholder="********" id="password" name="password"/>
                    {passwordLength ? (<div className='active-text-animation'><p >✅<span className='active-text'>Довжина паролю більше 8 символів!</span></p></div>): (<p>❌<span className='disabled-text'>Довжина паролю більше 8 символів!</span></p>)}
                    {passwordUpper ? (<div className='active-text-animation'><p >✅<span className='active-text'>Пароль містить велику літеру!</span></p></div>): (<p>❌<span className='disabled-text'>Пароль містить велику літеру!</span></p>)}
                    {passwordNum ? (<div className='active-text-animation'><p >✅<span className='active-text'>Пароль містить хоча б одну цифру!</span></p></div>): (<p>❌<span className='disabled-text'>Пароль містить хоча б одну цифру!</span></p>)}
                    {(passwordLength === true && passwordUpper === true && passwordNum === true) ? (<button className='auth-button'  style={{cursor:'pointer'}} type='submit'  >Зареєструватися</button>): (<button className='auth-button' type='submit' disabled={true}  >Зареєструватися</button>)}

                </form>
                <Link to={"/"}>Уже є акаунт? Увійти.</Link>
            </div>
            <ReactNotifications />
        </div>
    )
}