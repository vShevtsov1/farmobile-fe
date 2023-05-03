import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../stylesSheets/ResetPassword.css'
export const ResetPassword = () =>{

    function handleSubmit() {

    }

    return(
        <div className="ResetPassword">
            <div className="resetPassword-form-container">
                <form className="resetPassword-form" onSubmit={handleSubmit}>
                    <label className='labelForResetPassword' htmlFor = "email" >Електронна пошта</label>
                    <input className='inputForResetPassword' type="email" required='true' placeholder="youremail@gmail.com" id = "email" name = "email"/>
                    <button className='resetPassword-button' type='submit' >Скинути пароль</button>
                </form>
            </div>
        </div>

    )
}
