import React, { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import {Usestatevalue} from "./stateprovider"



export const Header = () => {

  const [{basket},dispatch]=Usestatevalue()
  const [{searchinput},dispatchs]=Usestatevalue()
const [input,setinput]=useState("")

  // console.log(basket)
  return (
    <div className='header1'>
          <Link to="/Home" style={{textDecoration:'none'}}>
         <div className="header_logo">

        <StorefrontIcon className='header_logoimage' fontSize='large'/>
        <h1 className='header_logotitle'>eSHOP</h1>

      </div>
          </Link>
      <div className="header_search">
        <input className='headersearch_input' type="text" value={input} onChange={(e)=>{setinput(e.target.value)}}></input>
        <SearchIcon fontSize='large' className='header_searchicon' onClick={()=>{dispatchs({
          type:"search",
          payload:{input}
        })}}/>

      </div>
      <div className="header_nav">
          <Link to="/login" style={{textDecoration:'none'}}>
            <div className='font'>
        <div className="nav_item">
          <span className="nav_item_one">Hello Guest</span>

          <span className="nav_item_two">Sign In</span>
        </div>
            </div>
          </Link>
        <div className="nav_item">
          <span className="nav_item_one">Your</span>
          <span className="nav_item_two">Shop</span>

        </div>
        <Link to="/basket" >
        <div className="nav_item_baskit">
          <ShoppingBasketIcon fontSize='large'/>
          <span className="nav_item_basket2">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}
