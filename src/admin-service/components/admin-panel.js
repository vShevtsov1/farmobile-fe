import "../stylesSheets/admin-panel.css"
import {useEffect, useState} from "react";
import AdminProducts from "./admin-products";
import UsersAdmin from "./users-admin";
import OrdersAdmin from "./orders-admin";
import jwt_decode from "jwt-decode";
import {Link, useNavigate} from "react-router-dom";





const AdminPanel = () => {
    const [showContent, setShowContent] = useState('users');
    const navigate = useNavigate();
    const handleClick = (type) => {
        if(type === 'users'){
            setShowContent('users');
        }else if(type === 'orders'){
            setShowContent('orders');
        }else {
            setShowContent('products')
        }

    };
    useEffect(()=>{
        try {
            const token = localStorage.getItem("jwt");
            const decodedToken = jwt_decode(token);
            const expirationTime = decodedToken.exp;

            if ((expirationTime < Date.now() / 1000)&&(decodedToken.role!="ADMIN")) {
                navigate("/")
            }
        }
        catch (e) {
            navigate("/")
        }
    })



    return (

        <div className="adminPanel-container">
            <div className='adminList'>
                <div className='buttons'>
                    <button onClick={()=> handleClick('users')} >Користувачі</button>
                    <button onClick={()=> handleClick('orders')} >Замовлення</button>
                    <button onClick={()=> handleClick('products')} >Продукти</button>
                    <Link to={"/"}><button  >Вихід</button></Link>


                </div>
            </div>
            <div className='adminMain'>
                { showContent === 'users' ? (<UsersAdmin/>): showContent === 'orders' ? (<OrdersAdmin/>): (<div><AdminProducts/></div>) }
            </div>
        </div>

    )
}

export default AdminPanel;
