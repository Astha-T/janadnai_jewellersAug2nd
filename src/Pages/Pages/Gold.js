import React from 'react' 
import { useNavigate, Link } from 'react-router-dom';

import './Gold.css'
import Contact  from '../Components/Contact';
import Join from '../Components/Join';
import SideBar from '../Components/SideBar';

const Gold = () =>
{
  const navigate = useNavigate();

   const navigatehandler = () => {
            navigate('./productdetail')
   }
  
  return (
    <div>
      <SideBar/>
    <div className="category_section gold">
                <h4>Gold</h4>
                <div className="row">
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                        <figure>
                            <p>
                            <img className="like" src={require("./images/like1.png")}/>
                            <Link to="/gold/productdetail"><img src={require("./images/Gold-Jewellery-PNG-Picture 1.png")}/></Link></p>
                        
                    </figure>
                    <h5><Link to="/gold/productdetail">Nackelss</Link></h5>
                    </div>
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                    <figure>
                        <p>
                        <img className="like" src={require("./images/Vector (3).jpg")}/>
                        <img src={require("./images/earrings1.png")}/></p>
                        
                    </figure>
                    <h5>Earings</h5>
                    </div>
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                    <figure>
                        <p className="circle">
                        <img className="like" src={require("./images/Vector (3).jpg")}/>
                        <img src={require("./images/pngwing 2.png")}/></p>
                        
                    </figure>
                    <h5>Rani Nackelss</h5>
                    </div>
                    
                  
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                    <figure>
                        <p>
                        <img className="like" src={require("./images/Vector (3).jpg")}/>
                        <img src={require("./images/pngwing 3.png")}/></p>
                      
                    </figure>
                    <h5>Bangles</h5>
                    </div>
                    <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                      <figure>
                          <p>
                          <img className="like" src={require("./images/Vector (3).jpg")}/>
                          <img src={require("./images/pngwing 4.png")}/></p>
                        
                      </figure>
                      <h5>Ring</h5>
                      </div>
                      <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                        <figure>
                            <p>
                            <img className="like" src={require("./images/Vector (3).jpg")}/>
                            <img src={require("./images/pngwing 5.png")}/></p>
                          
                        </figure>
                        <h5>Earrings</h5>
                        </div>
                        <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                          <figure>
                              <p>
                              <img className="like" src={require("./images/Vector (3).jpg")}/>
                              <img src={require("./images/chain.png")}/></p>
                            
                          </figure>
                          <h5>Chain</h5>
                          </div>
                          <div className="col-md-3 col-xs-6 col-sm-6 col-6">
                            <figure>
                                <p>
                                <img className="like" src={require("./images/Vector (3).jpg")}/>
                                <img src={require("./images/bracelet.png")}/></p>
                              
                            </figure>
                            <h5>Bracelet</h5>
                            </div>
                    </div>
                </div>
                <Join/>
                <Contact/>
                </div>
  )
}

export default Gold;