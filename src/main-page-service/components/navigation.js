import "../stylesheets/navigation.css"
import {useState} from "react";
import jwt_decode from "jwt-decode";

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
    console.log(showAdminPanel.showAdminPanel)
    return (
        <nav>
            <div className="navigation-menu">
                    <a href="#">Головна</a>
                <div className="dropdown-menu">
                    <a href="#">Техніка ⇓</a>
                    <div className="additional-menu-technique">
                        <a href="#">Вживана техніка</a>
                        <a href="#">Глибокорозпушувачі</a>
                        <a href="#">Грейдери</a>
                        <a href="#">Змішувачі хімікатів</a>
                        <a href="#">Мульчувачі</a>
                        <a href="#">Плуги</a>
                        <a href="#">Ріпакові столи</a>
                        <a href="#">Розкидачі добрив</a>
                        <a href="#">Ротаційні борони</a>
                        <a href="#">Телескопічні навантажувачі</a>
                    </div>
                </div>


                <div className="dropdown-menu">
                    <a href="#">Запчастини ⇓</a>
                    <div className="additional-menu-technique">
                        <a href="#">Сидіння тракторні</a>

                    </div>
                </div>
                {role==='ADMIN'&showAdminPanel.showAdminPanel ? <a href="#">Aдмін панель</a>:<div></div>}
            </div>
        </nav>
    )
}

export default Navigation
