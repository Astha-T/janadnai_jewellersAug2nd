import { useState} from "react";
import React from 'react'

import SideBar from "../Components/SideBar";
import OtherServices from '../Services/OtherServices';
import classes from './PrivacyPolicy.module.css'
import Contact from "../Components/Contact";

const PrivacyPolicy1 = () => {
    const [displayPrivacyPolicy, setDisplayPrivacyPolicy] = useState('');

       OtherServices.privacy_Policy().then((response)=>response.json()).then(data=> {
            
                console.log(data.result.description);
            
         const updatedPolicy= data.result.description;
         setDisplayPrivacyPolicy(updatedPolicy);
        }
        )

    return(
        <div className={classes.privacypolicy}>
            <SideBar/>
            <h2>Privacy Policy</h2>
            <h3>{displayPrivacyPolicy}</h3>
            <Contact/>
        </div>
    )
}
export default PrivacyPolicy1;