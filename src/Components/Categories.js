import React from 'react'
import {Link } from 'react-router-dom'
import './Categories.css'

const Categories = () => {
    return (
        <div className="category_section">
                <h4>Shop by categories</h4>
                <div className="row">
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                        <figure>
                            <p className="circle">
                            <Link to="/gold"><img src={require("./images/gold.png")}/></Link>
                            </p>
                        
                    </figure>
                    <h5><Link to="/gold">Gold</Link></h5>
                    </div>
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                    <figure>
                        <p className="circle">
                        <img src={require("./images/diamond.png")}/></p>
                        
                    </figure>
                    <h5>Diamond</h5>
                    </div>
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                    <figure>
                        <p className="circle">
                        <img src={require("./images/silver.png")}/></p>
                        
                    </figure>
                    <h5>Silver</h5>
                    </div>
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                    <figure>
                        <p className="circle">
                        <img src={require("./images/platinum.png")}/></p>
                      
                    </figure>
                    <h5>Platinum</h5>
                    </div>
                </div>
            </div>
    )
}

export default Categories;