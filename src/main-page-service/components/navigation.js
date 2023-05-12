import "../stylesheets/navigation.css"
import {useState} from "react";
import jwt_decode from "jwt-decode";
import {Link} from "react-router-dom";

const Navigation = (showAdminPanel) => {
    const [role,setRole] = useState("");

    useState(()=>{
        try {
            const token = localStorage.getItem("jwt");
            const decodedToken = jwt_decode(token);
            const expirationTime = decodedToken.exp;

            if (expirationTime > Date.now() / 1000) {
                setRole(decodedToken.role)
            }
        }
        catch (e) {

        }

    })
    return (
        <nav>
            <div className="navigation-menu">
                    <Link to={"/main"}>Головна</Link>
                <div className="dropdown-menu">
                    <a href="#">Техніка ⇓</a>
                    <div className="additional-menu-technique">
                        <Link to={"/catalog/vzhyvana-tekhnika"}>Вживана техніка</Link>
                        <Link to={"/catalog/hlybokorozpushuvachi"}>Глибокорозпушувачі</Link>
                        <Link to={"/catalog/hreydery"}>Грейдери</Link>
                        <Link to={"/catalog/zmishuvachi-khimikativ"}>Змішувачі хімікатів</Link>
                        <Link to={"/catalog/mulchuvachi"}>Мульчувачі</Link>
                        <Link to={"/catalog/pluhy"}>Плуги</Link>
                        <Link to={"/catalog/ripakovi-stoly"}>Ріпакові столи</Link>
                        <Link to={"/catalog/rozkydachi-dobryv"}>Розкидачі добрив</Link>
                        <Link to={"/catalog/rotatsiyni-borony"}>Ротаційні борони</Link>
                        <Link to={"/catalog/teleskopichni-navantazhuvachi"}>Телескопічні навантажувачі</Link>
                    </div>
                </div>


                <div className="dropdown-menu">
                    <a href="#">Запчастини ⇓</a>
                    <div className="additional-menu-technique">
                        <Link to={"/catalog/sydinnya-traktorni-sears-seating"}>Сидіння тракторні</Link>

                    </div>
                </div>
                {role==='ADMIN' & showAdminPanel.showAdminPanel ? <Link to={'/admin'}>Aдмін панель</Link>:<div></div>}
            </div>
        </nav>
    )
}

export default Navigation
