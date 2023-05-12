import "../stylesheets/item-info.css"
import {useContext, useEffect, useState} from "react";
import Header from "../../main-page-service/components/header";
import Navigation from "../../main-page-service/components/navigation";
import Footer from "../../main-page-service/components/footer";
import {useParams} from "react-router-dom";
import axios from "axios";
import {CartContext} from "../../main-page-service/config/CartContext";

const ItemInfo = () => {
    const {itemId} = useParams();
    const [showAdminPanel, setShowAdminPanel] = useState(true);
    const [item, setItem] = useState(null);
    const { cartItems, setCartItems } = useContext(CartContext);
    const [quantity,setQuantity]=useState(0);
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: '/products/get/id/?id=' + itemId,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setItem(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [itemId])
    const handleTokenRemoval = () => {
        setShowAdminPanel(false);
    };
    const addKeyValuePair = () => {
        if(quantity>=1){
            const newMap = new Map(cartItems);
            newMap.set(item, quantity);
            setCartItems(newMap);
        }

    };

    function changeQuantity(event) {
        event.preventDefault();
        setQuantity(event.target.value)
    }

    return (<div>
            {item ? (
                <div><Header handleTokenRemoval={handleTokenRemoval}/>
                    <Navigation showAdminPanel={showAdminPanel}/>
                    <div className="item-info-container">
                        <div className={"item-info-container-foto"}>
                            <div className={"photo-container"}>
                                <h1>{item.name}</h1>
                                <img src={item.photo.link}/>
                            </div>
                            <div className={"item-order-container"}>
                                <h2>{item.price} UAH</h2>
                                <p>В наявності: {item.quantity}</p>
                                <p>Кількість для замовлення: <input onChange={changeQuantity} name={"quantity"} type={"number"} min={0} max={item.quantity} defaultValue={0}/></p>
                                {item.quantity>0?
                                    <button onClick={addKeyValuePair} className={"leaveRequest-button"}>Додати до кошика</button>:
                                    <button  disabled={true} className={"leaveRequest-button"}>Додати до кошика</button>}

                                <p><pre>{item.productSpecs}</pre></p>
                            </div>
                        </div>
                        <div className={"item-full-info"}>
                        <h3>Повний опис</h3>
                            <pre><p>{item.fullDescription}</p></pre>
                        </div>
                    </div>
                    <Footer/>
                </div>) : (<div></div>)}
        </div>
    )
}
export default ItemInfo;