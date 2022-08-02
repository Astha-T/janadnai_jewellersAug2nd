import React from "react"

import classes from './DetailList.module.css'
import Details from "./Details";

const DetailList = (props) => {
    return (
        <ul className={classes['detail-list']}>
            {props.details.map((list)=> (
                <Details
                full_name = {list.full_name}
                email = {list.email}
                mobile = {list.mobile}
                />
            ))}
        </ul>
    );
};

export default DetailList;