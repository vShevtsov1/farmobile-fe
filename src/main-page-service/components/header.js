    import "../stylesheets/header.css"
    import { ReactComponent as Logo } from '../images/farm-machine-tractor-vehicle-svgrepo-com.svg';
    import {Link} from "react-router-dom";
    import { Link as ScrollLink } from 'react-scroll';
    import {useEffect, useState} from "react";
    import jwt_decode from 'jwt-decode';
    import Cart from "./cart";




    const Header = ({handleTokenRemoval}) => {
        const [login,setLogin] = useState(false);
        const [email,setEmail] = useState("");

        useState(()=>{
            try {
                const token = localStorage.getItem("jwt");
                const decodedToken = jwt_decode(token);
                const expirationTime = decodedToken.exp;

                if (expirationTime > Date.now() / 1000) {
                    setLogin(true);
                    setEmail(decodedToken.sub);
                }
            }
            catch (e) {

            }

        })

        function logout() {
            setLogin(false)
            localStorage.removeItem("jwt");
            localStorage.removeItem("role");
            handleTokenRemoval();
        }

        return (
            <header>
                <div className="header-container">
                    <div className="main-name">
                        <Link to='/main'><Logo/></Link>
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

                             <ScrollLink
                                 to='question-container'
                                 spy={true}
                                 smooth={true}
                                 offset={-70}
                                 duration={1500}
                                 className='leaveRequest-button'
                                 style={{marginRight: 25  }}
                             >Залишити заявку</ScrollLink>
                        {login ? <div className={"login-text"}>Привіт {email} <span className={"logout-text"} onClick={logout}>Вихід</span></div>: <Link to={"/"}><button className='leaveRequest-button' type='submit'>Увійти</button></Link>}
                    </div>

                <Cart/>
                </div>
            </header>
        )
    }

    export default Header;
