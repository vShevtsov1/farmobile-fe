import "../stylesheets/payment.css"
import Cards from 'react-credit-cards-2';
import React, {useState} from "react";
import 'react-credit-cards-2/dist/es/styles-compiled.css'

const Payment = ({summ}) => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    function createOrder() {

    }

    return(<div className={"payment-container"}>
        <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
        />
        <form onSubmit={createOrder}>
            <label htmlFor="number">Номер картки</label>
            <input
                type="number"
                name="number"

                required={true}
                placeholder="Номер картки"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onKeyPress={(e) => {
                    if (e.target.value.length >= 16) e.preventDefault();
                }}
            />
            <label htmlFor="number">Термін дії</label>
            <input
                type="number"
                required={true}
                name="expiry"
                placeholder="Термін дії"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onKeyPress={(e) => {
                    if (e.target.value.length >= 4) e.preventDefault();
                }}
            />
            <label htmlFor="number">Власник картки</label>
            <input
                name="name"
                required={true}
                placeholder="Власник картки"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}

            />
            <label htmlFor="number">CVC</label>
            <input
                type="number"
                required={true}
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onKeyPress={(e) => {
                    if (e.target.value.length >= 3) e.preventDefault();
                }}
            />
            <button  className={"leaveRequest-button"}>Оплатити {summ} UAH</button>


        </form>
    </div>)
}
export default Payment;