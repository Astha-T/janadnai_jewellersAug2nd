import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import './Otp.css'
import SideBar from '../Components/SideBar'
import UserService from '../Services/UserServices'

const Otp = (props) =>
{
       var phonebox = undefined;
       var otpbox = undefined;
   
       const [msg,setMsg] = useState('');
       const [otpIsValid,setOtpIsValid] = useState(false);

       const submitHandler = (event) => {
         event.preventDefault();

         var ob1= {
          mobile: phonebox.value,
          otp: otpbox.value
         }
         console.log(ob1)
            
           UserService.otpVerify(ob1).then(response=>response.json()).then(data=>
              {
                if(data.status==="1") {
                  console.log(data)
                  setOtpIsValid(true)
                  setMsg("Otp is Valid")
                }
                else {
                  setMsg("Please enter correct Otp/Mobile no.")
                }
              }
           )}

       return( otpIsValid? <Navigate to="/login"/>: <>
           <SideBar/>
          <div className="enterotp">
          <div>
          <p>You registered Successfully!!!</p>
          <h2>Enter Otp</h2>
          <form onSubmit ={submitHandler}> 
          <input type="text" placeholder="Phone No." ref={c=>phonebox=c} required/>
          <input type="text" placeholder=' OTP' name="otp" ref={c=>otpbox=c} required/>
          <button type="send">Submit</button>
          <p>{msg}</p>
          </form>
          </div>
        </div>
        </>
       )

}

export default Otp;