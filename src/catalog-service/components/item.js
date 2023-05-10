import React from 'react';
import '../stylesheets/item.css';
import {Link} from "react-router-dom";
import rent from"../images/Agricultural_machinery_Fields_Krone_BiG_M_John_541472_2048x1152.jpg";


const Item = (item) => {



    const url = `/item/${item.item.id}`;
    return (

        <Link className={'item-container-link'} to={url}> <div className="item">

            <img src={rent} alt={item.item.id} />
            <div className="item-details">
                <h3>{item.item.name}</h3>
                <span className={"small-description"}>робоча ширина, м10<br/>
                                                      кількість рядів лап 5<br/>
                                                      необхідна потужність трактора, к.с. 250+<br/>
                                                      рік випуску 1997</span>
                <p>{item.item.price} UAH</p>
            </div>
        </div></Link>

    );
}

export default Item;
