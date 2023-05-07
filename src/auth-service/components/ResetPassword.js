import React, {useState} from "react";
import {Link, Navigate, useNavigate, useSearchParams} from "react-router-dom";
import '../stylesSheets/ResetPassword.css'
import axios from "axios";
import {ReactNotifications, Store} from "react-notifications-component";

export const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    function checkPassword(event){
        if(event.target.value === password){
            setPasswordsMatch(true)
        }else{
            setPasswordsMatch(false)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        let data = JSON.stringify({
            "password": password
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/user/reset-password?token='+searchParams.get('token'),
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios.request(config)
            .then((response) => {
                console.log(response.data);
                if(response.data === 'OK'){
                    navigate('/')
                    Store.addNotification({
                        title: "Успіх!",
                        message: "Ви успішно змінили пароль!",
                        type: "success",
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
                        title: "ПОМИЛКА!",
                        message: "Не вдалося змінити пароль.",
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

    return (
        <div className="ResetPassword">
            <div className="resetPassword-form-container">
                <form className="resetPassword-form" onSubmit={handleSubmit}>
                    <label className='labelForResetPassword' htmlFor="password">Новий пароль</label>
                    <input className='inputForResetPassword' type="password" required={true} placeholder="********" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <label className='labelForMachingPassword' htmlFor="confirm-password">Повторіть новий пароль</label>
                    <input className='inputForMachingPassword' type="password" required={true} placeholder="********" id="confirm-password" name="confirm-password" onChange={checkPassword} />
                    {!passwordsMatch && (<div className='active-error-text-animation'><p >❌<span className='error-text'>Паролі не співпадають</span></p></div>)}

                    {!passwordsMatch ? (<button className='resetPassword-button'   type='submit' disabled={true} >Змінити пароль</button>): (<button className='resetPassword-button' type='submit' style={{cursor:'pointer'}}  >Змінити пароль</button>)}
                </form>
            </div>
            <ReactNotifications />
        </div>
    );
}