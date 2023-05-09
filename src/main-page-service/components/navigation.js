import "../stylesheets/navigation.css"

const Navigation = () => {
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
                <a href="#">Контакти</a>
            </div>
        </nav>
    )
}

export default Navigation
