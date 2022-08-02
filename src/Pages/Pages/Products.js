import { useState} from "react";
import React from 'react'

import Product_list from "../Extra-files/Product_list";
import ProductServices from "../Services/ProductServices";
import './Products.css'
import SideBar from "../Components/SideBar";

const Products = (props) => {
    
    const [products,setProducts] = useState([])

       ProductServices.Get_Products().then((response)=>response.json()).then(data=> {

         const updatedProd= data.result.map((productData)=> {
            
                return{
                    name : productData.name,
                    image : productData.image
                }
            
          })
    
          setProducts(updatedProd);
        }
        )

    return(
        <div>
            <SideBar/>
        <div className="category_section">
        <h4>Shop by Products</h4>
        <div className="row">
        <div className="col-md-3 col-xs-6 col-sm-6 col-6">
            <Product_list products={products}/> 
        </div>
        </div>
        </div>
        </div>
    )
}
export default Products;