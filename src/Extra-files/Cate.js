import React from 'react'
import {Link } from 'react-router-dom'

import './Cate.css'

const Cate = (props) => {
    return (
                        <figure className="figure">
                            <Link to="/productbycate_list"><img src={props.image}/></Link>

                            <h5><Link to="/productbycate_list">{props.name}</Link></h5>
                    </figure>
                   


    )
    }
export default Cate;