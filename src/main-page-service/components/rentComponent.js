import "../stylesheets/rent.css"
import rent from"../images/Agricultural_machinery_Fields_Krone_BiG_M_John_541472_2048x1152.jpg";
const RentComponent = () => {

    return(<div className="rent-container">
        <div className={"darken-image"}>
        </div>
        <img src={rent} className="rent-image" />
        <div className={"rent-text"}>
            <h1>Оренда техніки</h1>
            <p>Способи використання техніки без її купівлі можуть бути різними. Одним з них є оренда техніки</p>
        </div>
    </div>)
}
export default RentComponent;