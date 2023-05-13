import "../stylesSheets/order.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Order = () => {
    const { orderId } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [token, setToken] = useState("");

    useEffect(() => {
        try {
            const token = localStorage.getItem("jwt");
            const decodedToken = jwt_decode(token);
            const expirationTime = decodedToken.exp;

            if (expirationTime < Date.now() / 1000) {
                navigate("/login");
            } else {
                setToken(token);
            }
        } catch (e) {
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let config = {
                    method: "post",
                    maxBodyLength: Infinity,
                    url: "/orders/id?orderId=" + orderId,
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                };

                const response = await axios.request(config);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        if (token) {
            fetchData();
        }
    }, [orderId, token]);

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
