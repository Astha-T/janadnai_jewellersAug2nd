import React from "react"

import classes from './FavProdList.module.css'
import FavProd from "./FavProd";

const FavProdList = (props) => {
    return (
        <ol className={classes['product-list']}>
            {props.products.map((prod)=> (
                <FavProd 
                name = {prod.name}
                image = {prod.image}
                />
            ))}
        </ol>
    );
};

export default FavProdList;