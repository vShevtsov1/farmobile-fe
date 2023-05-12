import "../stylesSheets/admin-panel.css"
import {useState} from "react";
import AdminProducts from "./admin-products";





const AdminPanel = () => {
    const [showContent, setShowContent] = useState('users');

    const handleClick = (type) => {
        if(type === 'users'){
            setShowContent('users');
        }else if(type === 'orders'){
            setShowContent('orders');
        }else {
            setShowContent('products')
        }

    };




    return (

        <div className="adminPanel-container">
            <div className='adminList'>
                <div className='buttons'>
                    <button onClick={()=> handleClick('users')} >Користувачі</button>
                    <button onClick={()=> handleClick('orders')} >Замовлення</button>
                    <button onClick={()=> handleClick('products')} >Замовлення</button>


                </div>
            </div>
            <div className='adminMain'>
                { showContent === 'users' ? (<div>This is the new content to be displayed</div>): showContent === 'orders' ? (<div>lololoshka</div>): (<div><AdminProducts/></div>) }
            </div>
        </div>

    )
}

export default AdminPanel;
