import React from 'react';

import './FavProd.css';

const FavProd = (props) => {
    
  return (
    <div className="row">
        <div className="col-md-3 col-xs-6 col-sm-6 col-6">
    <div className='favprod'>
      <img src={props.image} alt="product_image"/>
      <h5>{props.name}</h5>
    </div>
    </div>
    </div>
    
  );
};

export default FavProd;