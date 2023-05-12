import "../stylesSheets/order.css"
import axios from "axios";






const Order = () => {





    return (

        <div className="order-container">
            <table>
                <thead>
                <tr>
                    <th colSpan='2'>Название</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>Дата</th>
                    <td>10.05.2023</td>

                </tr>
                <tr>
                    <th>Сумма</th>
                    <td>12.05.2023</td>

                </tr>
                <tr>
                    <th>Номер</th>
                    <td>15.05.2023</td>

                </tr>
                <tr>
                    <th>Адреса</th>
                    <td>15.05.2023</td>

                </tr>
                <tr>
                    <th>Пошта</th>
                    <td>15.05.2023</td>

                </tr>
                </tbody>
                <tr>
                    <th>Назва</th>
                    <th>Ціна</th>
                </tr>
                <tr>
                    <td>f</td>
                    <td>d</td>
                </tr>
            </table>








        </div>

    )
}

export default Order;
