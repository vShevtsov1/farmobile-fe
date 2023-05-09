import Header from "./header";
import Navigation from "./navigation";
import RentComponent from "./rentComponent";
import About from "./about";
import "../stylesheets/mainPage.css"
import Question from "./question";
import Footer from "./footer";
import {ReactNotifications} from "react-notifications-component";
import React from "react";
const MainPage = () => {
    return (<div className={"main-page-container"} >
        <Header/>
        <Navigation/>
        <RentComponent/>
        <About/>
        <Question/>
        <Footer/>
        <ReactNotifications />
    </div>)
}
export default MainPage;