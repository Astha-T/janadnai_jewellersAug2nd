import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import Logo from './Logo'
import Store from '../Redux/Store'
import {ACTION_USER_LOGIN_LOGOUT} from '../Redux/Actions/UserAction'
import './Sidebar.css'

function mapStateToProps(state){
    return {
        loginstatus : state.user.loginstatus,
        full_name : state.user.full_name,
        user_id : state.user.user_id
    }
}

const SideBar= (props) => {

    var logout = ()=>{
        Store.dispatch({...ACTION_USER_LOGIN_LOGOUT,payload:{
            loginstatus : false,
            full_name : undefined,
            user_id : undefined
         }})
         alert("Logging Out")
    }

    return ( 
       <div>
        <div className="main_header" id="headerup">
        <nav className="navbar my-navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <Logo/>
        
        <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">

             <span
                className="iconify bar-icon"
                 data-icon="fa-solid:bars"
                 data-inline="false"
            ></span>
          </button>
          
          {props.loginstatus ?
         <div className="collapse navbar-collapse" id="navbarNav">
        
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item nav-active">
                        <Link className="nav-link" to="/"
                          >Home <span className="sr-only"></span></Link>
                      </li>

                      <li className="nav-item userli">
                        <ul>
                          <li>
                           <span></span></li>
                          <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                            data-toggle="dropdown">Search By</Link>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/category_list">Category</Link>
                                <Link className="dropdown-item" to="/product_list">Product</Link>
                                <Link className="dropdown-item" to="#" >Search Single Product</Link>
                              </div>
                            </li>
                        </ul>
                      </li>

                      <li className="nav-item userli">
                        <ul>
                      <li>
                           <span className="fa fa-cog"></span></li>
                          <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                            data-toggle="dropdown">User Settings</Link>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/view_profile" >Your Profile</Link>
                                <Link className="dropdown-item" to="/favourite_products" >Favourite Products</Link>
                                <Link className="dropdown-item" to="/notifications" >Notifications</Link>
                                <Link className="dropdown-item" to="/bookappointment" >Book Appointment</Link>
                      
                              </div>
                            </li>
                            </ul>
                      </li>
                      
                      <li className="nav-item userli">
                        <ul>
                          <li>
                           <span className="fa fa-user"></span></li>
                          <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                            data-toggle="dropdown">Hi {props.full_name}</Link>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#" onClick={logout}>Logout</Link>
                              </div>
                            </li>
                        </ul>
                      </li>
                    </ul>

                    
                  </div>
                    : <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ml-auto">
                      <li className="nav-item nav-active">
                        <Link className="nav-link" to="/"
                          >Home <span className="sr-only"></span></Link>
                      </li>
                      
                      <li className="nav-item userli">
                        <ul>
                          <li>
                           <span></span></li>
                          <li className="dropdown"><Link className="nav-link dropdown-toggle" to="#"
                            data-toggle="dropdown">Search By</Link>
                              <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/category_list" >Category</Link>
                                <Link className="dropdown-item" to="/product_list" >Product</Link>
                                <Link className="dropdown-item" to="#" >Search Single Product</Link>
                              </div>
                            </li>
                        </ul>
                      </li>

                      <li className="nav-item signupli">
                        <Link className="nav-link signup" to="/login" data-toggle="modal" data-target="#basicModal">Login/Signup</Link>
                      </li>
                      </ul>
                       </div>}
                  <form className="navbar-form navbar-right navbar-form-search" role="search">
                    <div className="search-form-container hdn" id="search-input-container">
                      <div className="search-input-group">
                        <button type="button" className="btn btn-default" id="hide-search-input-container">
                          <span className="fa fa-close" aria-hidden="true"></span></button>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Search for..."/>
                        </div>
                      </div>
                    </div>
                    
                    <button type="submit" className="btn btn-default" id="search-button"><span className="fa fa-search"
                       aria-hidden="true"></span></button>
                  </form>

     
           </div>
           </nav>
           </div>
           
</div>
    )
}

export default connect(mapStateToProps)(SideBar);