import React, {useEffect, useState} from 'react';
import { Document, Page, Text, StyleSheet,PDFViewer ,View,Font} from '@react-pdf/renderer';
import {useNavigate, useParams} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

import UkrainianFont from '../stylesSheets/DroidSerif-Regular.ttf';

// Register the custom font
Font.register({ family: 'UkrainianFont', src: UkrainianFont });
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
                response.data.date = formatData(response.data.date)
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
        <div style={{ width: '100vw', height: '100vh' }}>
            <PDFViewer style={{ width: '100%', height: '100%' }}>
                <OrderDocument data={data} />
            </PDFViewer>
        </div>
    );
};

const OrderDocument = ({data}) => (
    <Document>
        <Page style={styles.page}>
            <Text style={styles.text}>Номер замовлення {data.idorders}</Text>
            <Text style={styles.data}>Дата: {data.date}</Text>
            <Text style={styles.data}>Cума: {data.summ} UAH</Text>
            <Text style={styles.data}>Номер телефону: {data.phoneNumber}</Text>
            <Text style={styles.data}>Адреса: {data.adress}</Text>
            <Text style={styles.data}>Ім'я клієнта: {data.userDTO.name}</Text>
            <Text style={styles.data}>Прізвище клієнта: {data.userDTO.surname}</Text>
            <Text style={styles.data}>Електронна адреса клієнта: {data.userDTO.email}</Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.headerText}>Назва продукту</Text>
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.headerText}>Ціна продукту</Text>
                    </View>
                </View>
                {data.products.map((product) => (
                    <View style={styles.tableRow} key={product.idProducts}>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>{product.name}</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.cellText}>{product.price}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#E4E4E4',
        padding: 10,
        fontFamily: 'UkrainianFont', // Set the custom font
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },
    table: {
        marginTop: 20,
        display: 'table',
        width: 'auto',
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        width: '50%',
        padding: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000',
    },
    headerText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cellText: {
        textAlign: 'center',

    }

});

export default Order;
