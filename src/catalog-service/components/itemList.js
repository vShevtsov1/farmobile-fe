import React from 'react';

import "../stylesheets/itemList.css"
import Item from "./item";

const ItemList = ({ items }) => {
    console.log(items)
    return (
        <div className="item-list">
            {items.map(item => (
                <Item key={item.idProducts} item={item} className="item-animation" />
            ))}
        </div>

    );
};

export default ItemList;
