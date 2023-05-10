import {useContext} from "react";
import cart from '../images/cart-svgrepo-com.png';
import "../stylesheets/cart.css"
import {CartContext} from "../config/CartContext";
import {Link} from "react-router-dom";
function Cart() {
    const { cartItems } = useContext(CartContext);
    return(<div className="cart-user">
        <Link to={"/cart"}>
            <img src={cart} alt="cart-logo"/>
            <span className="cart-count">{cartItems.length}</span></Link>
    </div>)
}
export default Cart;