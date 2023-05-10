    import Header from "./header";
    import Navigation from "./navigation";
    import RentComponent from "./rentComponent";
    import About from "./about";
    import "../stylesheets/mainPage.css"
    import Question from "./question";
    import Footer from "./footer";
    import {ReactNotifications} from "react-notifications-component";
    import React, {useState} from "react";

    const MainPage = () => {
        const [showAdminPanel, setShowAdminPanel] = useState(true);

        const handleTokenRemoval = () => {
            setShowAdminPanel(false);
        };
        return (<div className={"main-page-container"}>
            <Header handleTokenRemoval={handleTokenRemoval}/>
            <Navigation showAdminPanel={showAdminPanel}/>
            <RentComponent/>
            <About/>
            <Question/>
            <Footer/>
            <ReactNotifications/>
        </div>)
    }
    export default MainPage;