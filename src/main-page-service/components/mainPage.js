import Header from "./header";
import Navigation from "./navigation";
import RentComponent from "./rentComponent";
import About from "./about";
import "../stylesheets/mainPage.css"
const MainPage = () => {
    return (<div className={"main-page-container"} >
        <Header/>
        <Navigation/>
        <RentComponent/>
        <About/>
    </div>)
}
export default MainPage;