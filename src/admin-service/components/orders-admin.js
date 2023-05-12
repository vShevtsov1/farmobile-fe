import "../stylesSheets/orders-admin.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const OrdersAdmin = () => {
  const [orders,setOrders]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '/orders/get-all',
    };

    axios.request(config)
        .then((response) => {
          setOrders(response.data)
        })
        .catch((error) => {
          console.log(error);
        });

  })

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
            <tr key={order.idorders} onClick={()=>orderInfo(order.idorders)}>
              <td>{order.idorders}</td>
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