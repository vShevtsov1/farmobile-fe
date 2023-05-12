import Header from "../../main-page-service/components/header";
import Navigation from "../../main-page-service/components/navigation";
import Footer from "../../main-page-service/components/footer";
import "../stylesheets/catalog.css";
import ItemList from "./itemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Catalog = () => {
    const { categoryId } = useParams();
    const [showAdminPanel, setShowAdminPanel] = useState(true);
    const [items, setItems] = useState([]);
    const [data, setData] = useState(6);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "/products/get/category/?category=" + categoryId,
        };

        axios
            .request(config)
            .then((response) => {
                setDataList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryId]);

    useEffect(() => {
        setItems(dataList.slice(0, data));
    }, [dataList, data]);

    useEffect(() => {
        function handleScroll() {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setData((prevData) => prevData + 3);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleTokenRemoval = () => {
        setShowAdminPanel(false);
    };

    return (
        <div className={"catalog-container"}>
            <Header handleTokenRemoval={handleTokenRemoval} />
            <Navigation showAdminPanel={showAdminPanel} />
            <div className={"catalog-container"}>
                <ItemList items={items} />
            </div>
            <span className={"catalog-footer"}>
        <Footer />
      </span>
        </div>
    );
};

export default Catalog;
