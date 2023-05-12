import "../stylesSheets/order.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Order = () => {
    const { orderId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "/orders/id?orderId=" + orderId,
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [orderId]);

    function formatData(data) {
        const date = new Date(data);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return formattedDate + " " + formattedTime;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="order-container">
            <table>
                <thead>
                <tr>
                    <th colSpan="2">{data.idorders}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Дата</th>
                    <td>{formatData(data.date)}</td>
                </tr>
                <tr>
                    <th>Сумма</th>
                    <td>{data.summ}</td>
                </tr>
                <tr>
                    <th>Номер</th>
                    <td>{data.phoneNumber}</td>
                </tr>
                <tr>
                    <th>Адреса</th>
                    <td>{data.adress}</td>
                </tr>
                <tr>
                    <th>Пошта</th>
                    <td>{data.userDTO.email}</td>
                </tr>
                <tr>
                    <th>Назва</th>
                    <th>Ціна</th>
                </tr>
                {data.products.map((product) => (
                    <tr key={product.idProducts}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Order;
