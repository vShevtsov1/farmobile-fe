import "../stylesheets/header.css"
import { ReactComponent as Logo } from '../images/farm-machine-tractor-vehicle-svgrepo-com.svg';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="main-name">
                    <Logo/>
                    <h1>Farmobile</h1>
                </div>
                <div className='main-phrase'>
                    <h3>
                        <i>
                            Історія зустрічає майбутнє: наші технології - ваш успіх!
                        </i>
                    </h3>
                </div>
                <div className='call-service'>
                    <div className='first-telef-number'>
                        <h2>(055) 555-55-55</h2>
                        <h4>Відділ продажу запчастин</h4>
                    </div>
                    <div className='second-telef-number'>
                        <h2>(033) 333-33-33</h2>
                        <h4>Відділ продажу техніки</h4>
                    </div>
                </div>
                <div className='leaveRequest-button-container'>
                    <button className='leaveRequest-button' style={{marginRight: 25 }} type='submit'>Залишити заявку</button>
                    <Link to='/'>
                    <button className='leaveRequest-button' type='submit'>Увійти</button></Link>
                </div>


            </div>
        </header>
    )
}

export default Header;
