    import Header from "../../main-page-service/components/header";
    import Navigation from "../../main-page-service/components/navigation";
    import React, {useContext, useEffect, useState} from "react";
    import jwt_decode from "jwt-decode";
    import {useNavigate} from "react-router-dom";
    import Footer from "../../main-page-service/components/footer";
    import "../stylesheets/cart-submit.css"
    import axios from "axios";
    import {CartContext} from "../../main-page-service/config/CartContext";
    import Payment from "./payment";

    const CartSubmit = () => {
        const [showAdminPanel, setShowAdminPanel] = useState(true);
        const navigate = useNavigate();
        const [token, setToken] = useState("");
        const [phone, setPhone] = useState("");
        const [userInfo, setUserInfo] = useState({});
        const { cartItems, setCartItems } = useContext(CartContext);
        const [showPayment, setShowPayment] = useState(true);

        const handleTokenRemoval = () => {
            setShowAdminPanel(false);
            navigate("/main")
        };

        useEffect(() => {
            try {
                const token = localStorage.getItem("jwt");
                const decodedToken = jwt_decode(token);
                const expirationTime = decodedToken.exp;

                if (expirationTime < Date.now() / 1000) {
                    navigate("/");
                } else {
                    setToken(token);
                }
            } catch (e) {
                navigate("/");
            }
        }, [navigate]);

        useEffect(() => {
            const fetchUserInfo = async () => {
                try {
                    let config = {
                        method: "get",
                        maxBodyLength: Infinity,
                        url: "/user/my-info",
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    };
                    const response = await axios.request(config);
                    setUserInfo(response.data);
                } catch (error) {
                    console.log(error);
                }
            };

            if (token) {
                fetchUserInfo();
            }
        }, [token]);

        const handleChange = (event) => {
            let value = event.target.value;
            if (value.length === 1 && value !== "+") {
                value = "+380" + value;
            } else if (value.length > 1 && !value.startsWith("+380")) {
                value = "+380" + value.slice(4);
            }
            setPhone(value);
        };


        function deleteItem(key) {
            const newMap = new Map(cartItems);
            newMap.delete(key);
            setCartItems(newMap);
        }
        const totalSum = Array.from(cartItems.entries()).reduce(
            (acc, [key, value]) => acc + (key.price*value),
            0
        );

        function submitOrder(event) {
            event.preventDefault()
            setShowPayment(false);
        }

        return (
            <div>
                <Header handleTokenRemoval={handleTokenRemoval}/>
                <Navigation showAdminPanel={showAdminPanel}/>
                {showPayment ?
                    (<div className={"cart-submit-container"}>
                        <div className={"items-table"}>
                            <h1>До сплати:{totalSum} UAH</h1>
                            <table>
                                <thead>
                                <tr>
                                    <td>
                                        Назов
                                    </td>
                                    <td>
                                        Кількість
                                    </td>
                                    <td>
                                        Ціна
                                    </td>
                                    <td>
                                        ❌
                                    </td>
                                </tr>

                                </thead>
                                <tbody>
                                {Array.from(cartItems.entries()).map(([key, value]) => (
                                    <tr key={key.id}>
                                        <td>{key.name}</td>
                                        <td>{value}</td>
                                        <td>{key.price*value}</td>
                                        <td onClick={()=>deleteItem(key)}>❌</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className={"user-info-cart"}>
                            <div className={"user-form"}>
                                <form className={"form-user"} onSubmit={submitOrder}>
                                    <label htmlFor="name">Ім'я</label>
                                    <input disabled={true} value={userInfo.name} name="name" id="name" placeholder="Ім'я"/>
                                    <label htmlFor="name">Прізвище</label>
                                    <input disabled={true} value={userInfo.surname} name="surname" id="surname" placeholder="Прізвище"/>
                                    <label htmlFor="email">Електронна пошта</label>
                                    <input type="email" disabled={true} value={userInfo.email} placeholder="youremail@gmail.com" id="email" name="email"/>
                                    <label htmlFor="email">Адреса</label>
                                    <input required={true} placeholder="Адреса" id="adress" name="adress"/>
                                    <label htmlFor="email">Номер телефону</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+380 (__) ___-____"
                                        value={phone}
                                        onChange={handleChange}
                                        maxLength="13"/>
                                    {cartItems.size===0? <button disabled={true} className={"leaveRequest-button"}>Замовити</button>:
                                        <button className={"leaveRequest-button"} >Замовити</button>}
                                </form>

                            </div>
                        </div>
                    </div>):(<Payment summ={totalSum}/>)}

                <Footer/>
            </div>
        );
    };

    export default CartSubmit;
