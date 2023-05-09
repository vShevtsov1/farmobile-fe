import Header from "./header";
import Navigation from "./navigation";
import RentComponent from "./rentComponent";
import About from "./about";
import "../stylesheets/mainPage.css"
import Question from "./question";
import Footer from "./footer";
const MainPage = () => {
    return (<div className={"main-page-container"} >
        <Header/>
        <Navigation/>
        <RentComponent/>
        <About/>
        <Question/>
        <Footer/>
    </div>)
}
export default MainPage;