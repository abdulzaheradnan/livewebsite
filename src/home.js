import React from 'react'
import {Product} from "./product"
import "./home.css";

export const Home = () => {
  return (
    <div>
        <div className="home_container">
            <div className="image_containermain">
                <img src="https://www.pngkit.com/png/detail/364-3642224_clarit
                y-ecommerce-logo-logo-e-commerce-png.png" alt="" className='image_box'/>

            <div className="home_row">
                <Product/>
                {/* <Product/> */}
                
            </div>
            <div className="home_row">
            {/* <Product/> 
            <Product/>
             <Product/> */}
                 
            </div>
            <div className="home_row">
            {/* <Product/> */}
            </div>

            </div>
        </div>
    </div>
  )
}
