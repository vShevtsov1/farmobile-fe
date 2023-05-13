import "../stylesSheets/orders-admin.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";

const OrdersAdmin = () => {
  const [orders,setOrders]=useState([]);
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
    if (token) {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "/orders/get-all",
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      axios
          .request(config)
          .then((response) => {
            setOrders(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }, [token]);

  function orderInfo(order) {
  navigate("/order/"+order)

  }

  return(<div className={"orders-admin"}>
    <table>
      <thead>
      <tr>
        <td>ID замовлення</td>
        <td>Дата</td>
        <td>Сума</td>
        <td>Номер телефону</td>
        <td>Адреса</td>
        <td>Користувач</td>
      </tr>
      </thead>
      <tbody>
      {orders.map((order) => {
        const date = new Date(order.date);
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        return (
            <tr key={order.idOrders} onClick={()=>orderInfo(order.idOrders)}>
              <td>{order.idOrders}</td>
              <td>{`${formattedDate} ${formattedTime}`}</td>
              <td>{order.summ}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.adress}</td>
              <td>{order.users.email}</td>
            </tr>
        );
      })}
      </tbody>
    </table>
  </div>)
}
export default OrdersAdmin;