import React, { useState } from 'react';
import '../stylesheets/question.css';
import axios from "axios";
import {ReactNotifications, Store} from "react-notifications-component";

const Question = () => {
    const [phone, setPhone] = useState('');

    const handleChange = (event) => {
        let value = event.target.value;
        if (value.length === 1 && value !== '+') {
            value = '+380' + value;
        } else if (value.length > 1 && !value.startsWith('+380')) {
            value = '+380' + value.slice(4);
        }
        setPhone(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = JSON.stringify({
            "name": event.target.name.value,
            "phonenumber": event.target.phone.value
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: '/questions/create',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios.request(config)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    Store.addNotification({
                        title: "Інформація",
                        message: `Ваша заявка зареєстрована з номером ${response.data.idquestions}, очікуйте на дзвінок від наших операторів`,
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
    };

    return (
        <div className="question-container">
            <form className="questionForm" onSubmit={handleSubmit}>
                <div className="formInside">
                    <label htmlFor="name">Ім'я</label>
                    <input required="true" placeholder="Введіть ваше ім'я" id="name" name="name" />
                    <label htmlFor="phone">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+380 (__) ___-____"
                        value={phone}
                        onChange={handleChange}
                        maxLength="13"
                    />
                    <button className="button-phone-me" type="submit">
                        Зателефонувати мені
                    </button>
                </div>
            </form>
            <ReactNotifications />
        </div>
    );
};

export default Question;
