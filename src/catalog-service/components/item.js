import React from 'react';
import '../stylesheets/item.css';
import {Link} from "react-router-dom";



const Item = (item) => {



    const url = `/catalog/item/${item.item.idProducts}`;
    return (

        <Link className={'item-container-link'} to={url}> <div className="item">

            <img src={item.item.photo.link} alt={item.item.id} />
            <div className="item-details">
                <h3>{item.item.name}</h3>
                <span className={"small-description"}><pre>{item.item.productSpecs}</pre></span>
                <p>{item.item.price} UAH</p>
            </div>
        </div></Link>

    );
}

export default Item;
