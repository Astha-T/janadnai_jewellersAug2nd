import React from "react"

import './FavProdList.css'
import FavProd from "./FavProd";

const FavProdList = (props) => {
    return (
        <div className='product-list'>
            {props.products.map((prod)=> (
                <FavProd 
                name = {prod.name}
                image = {prod.image}
                />
            ))}
        </div>
    );
};

export default FavProdList;