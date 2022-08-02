import React from 'react';

import classes from './Details.module.css';

const Details = (props) => {
    
  return (
    <li className={classes.details}>
      <h3>Name : {props.full_name}</h3>
      <p>Email : {props.email}</p>
      <p>Mobile : {props.mobile}</p>
    </li>
    
  );
};

export default Details;