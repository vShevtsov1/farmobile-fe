import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../stylesSheets/LoginAndRegister.css'


export const Register = () => {
    const [passwordLength, setPasswordLength] = useState(false);
    const [passwordUpper, setPasswordUpper] = useState(false);
    const [passwordNum, setPasswordNum] = useState(false);


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

    function handleSubmit() {

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
                    <label className='labelsForLoginAndRegister' htmlFor="lastName">Прізвище</label>
                    <input className='inputsForLoginAndRegister' name="lastName" id="name" required='true' placeholder="Прізвище"/>
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
        </div>
    )
}