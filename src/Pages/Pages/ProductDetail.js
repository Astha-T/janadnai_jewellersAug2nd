import React from 'react' 
import { Link } from 'react-router-dom';

import './ProductDetail.css'
import SideBar from '../Components/SideBar';
import Contact from '../Components/Contact';

const ProductDetail = () => {
   return (
   <div>
    <SideBar/>

    <div className="details_section">
    
    <div className="row">
      <div className="col-md-6 col-12 slider_col">

        <div className="container-fluid  product">
          <div className="carousel-container position_banner row">

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-slide-number="0">
                  <img src= {require("./images/banner.png")} className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="1">
                  <img src={require("./images/banner.png")}  className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="2">
                  <img src={require("./images/banner.png")}  className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="3">
                  <img src={require("./images/banner.png")}  className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="4">
                  <img src={require("./images/banner.png")}  className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="5">
                  <img src={require("./images/banner.png")}  className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="6">
                  <img src={require("./images/banner.png")}  className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                <div className="carousel-item" data-slide-number="7">
                  <img src={require("./images/banner.png")}  className="d-block " alt="..."
                    data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox"
                    data-gallery="example-gallery"/>
                </div>
                  <div className="carousel-item" data-slide-number="8">
                              <img src={require("./images/banner.png")}  className="d-block " alt="..." data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
                            </div>
                            <div className="carousel-item" data-slide-number="9">
                              <img src={require("./images/banner.png")}  className="d-block " alt="..." data-remote="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"data-type="image" data-toggle="lightbox" data-gallery="example-gallery"/>
                            </div> 
              </div>
            </div>

            <div id="carousel-thumbs" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row mx-0">
                    <div id="carousel-selector-0" className="thumb col-4 col-sm-3 col-3 selected" data-target="#myCarousel"
                      data-slide-to="0">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-1" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="1">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-2" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="2">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-3" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="3">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                      <div id="carousel-selector-4" className="thumb col-4 col-sm-3 " data-target="#myCarousel" data-slide-to="4">
                                  <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                                </div>
                                <div id="carousel-selector-5" className="thumb col-4 col-sm-3 " data-target="#myCarousel" data-slide-to="5">
                                  <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                                </div> 
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row mx-0">
                    <div id="carousel-selector-4" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="4">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-5" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="5">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-6" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="6">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                    <div id="carousel-selector-7" className="thumb col-4 col-sm-3 col-3" data-target="#myCarousel"
                      data-slide-to="7">
                      <img src="https://thegraphicplanet.com/JandaniJewellers_design/img/Gold-JewelleryNpro.png"className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2 "></div>
                    
                  </div>
                </div>
              </div>
              <Link className="carousel-control-prev" to="#carousel-thumbs" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </Link>
              <Link className="carousel-control-next" to="#carousel-thumbs" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </Link>
            </div>

          </div> 
        </div>

      </div>

      <div className="col-md-6 col-12 slider_txt">
        <h4>Nackelss</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.</p>
        <button type="btn" className="enquiry">ENQUIRY NOW</button>
      </div>
    </div>
  </div>

    <Contact/>
   </div>
    )
}

export default ProductDetail;