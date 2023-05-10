import Header from "../../main-page-service/components/header";
import Navigation from "../../main-page-service/components/navigation";
import Footer from "../../main-page-service/components/footer";
import "../stylesheets/catalog.css";
import config from "./config";
import ItemList from "./itemList";
import {useState} from "react";
import {useParams} from "react-router-dom";

const Catalog = () => {
    const { categoryId } = useParams()
    const [showAdminPanel, setShowAdminPanel] = useState(true);
    const dataList = config.dataList;
    const handleTokenRemoval = () => {
        setShowAdminPanel(false);
    };
    return(<div>
        <Header handleTokenRemoval={handleTokenRemoval}/>
        <Navigation showAdminPanel={showAdminPanel}/>
        <div className={"catalog-container"}>
            <ItemList items={dataList} />
        </div>
        <span className={"catalog-footer"}> <Footer/></span>

    </div>)
}
export default Catalog