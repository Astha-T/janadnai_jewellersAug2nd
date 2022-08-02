import React, { useState } from 'react'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'

import BookingService from '../Services/BookingServices'
import './Products.css'

function mapStateToProps(state){
  return {
      loginstatus : state.user.loginstatus,
      full_name : state.user.full_name,
      user_id : state.user.user_id
  }
}

const All_Products = (props) => {

    const [bookingmsg, setBookingmsg] = useState('');

    const bookjewellery = () => {
       
      BookingService.Book__jewellery().then((response)=>response.json()).then(data=> {
        console.log(data)
        if(data.status==='true'){
    
          setBookingmsg("Booking Successful")
          console.log(bookingmsg)
        }

        else {
            setBookingmsg("Failed to book this product!!!")
            console.log(bookingmsg)
        }
      })
    

    }

    return (
      <div className='products'>
       
                        <figure className="figure">
                            <Link to=''><img src={props.image}/></Link>
                    </figure>
                    <h5><Link to=''>{props.name}</Link></h5>
                    <button onClick={bookjewellery}>Book Jewelley</button>
                    <p>{bookingmsg}</p>
                   
                    </div>
    )
}

export default connect(mapStateToProps)(All_Products);