import '../stylesSheets/Activation.css'
import {ReactNotifications, Store} from "react-notifications-component";
import React, {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";
export const Activation = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/user/activation?token='+searchParams.get('token'),
            headers: { }
        };
        axios.request(config)
            .then((response) => {

                if(response.data === 'OK'){
                    navigate('/')
                    Store.addNotification({
                        title: "Успіх!",
                        message: "Акаунт успішно активований!",
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
                        title: "Помилка!",
                        message: "Виникла помилка під час активації!",
                        type: "danger",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__bounceIn"],
                        animationOut: ["animate__animated", "animate__flipOutX"],
                        dismiss: {
                            duration: 8000
                        }
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });

    })
    return(
        <div className='activation-container'>

            <ReactNotifications />
        </div>
    )
}