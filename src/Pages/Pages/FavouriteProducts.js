import { useState} from "react";
import React from 'react'

import SideBar from '../Components/SideBar'
import FavProdList from "../Extra-files/FavProdList";
import ProductServices from "../Services/ProductServices";
import './FavouriteProducts.css'

const FavouriteProducts = () => {
    
    const [products,setProducts] = useState([])

    const fetchFavProducts = () => {
       ProductServices.Get_FavoriteProducts().then((response)=>response.json()).then(data=> {
          
          
          const imgurl = 'https://dev.weblaunchpad.in/jandani_jewellers/public/product';

         const updatedProductList = data.result.map((productData)=> {
            
                return{
                    id: productData.id,
                    image : imgurl+'/'+productData.image,
                    name : productData.name
                }
            
          })
          setProducts(updatedProductList)
        }
        )
    }

    return(
        <div>
            <SideBar/>
        <div className="favProd">
            <h2>Your Favourite Products</h2>
           <button onClick={fetchFavProducts}>Click here to see your Favourite Products</button>
            <FavProdList products={products}/> 
        </div>
        </div>
    )
}
export default FavouriteProducts;