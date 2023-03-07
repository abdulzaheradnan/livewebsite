import React, { useReducer, useState } from 'react'
// import { initiialstate,reducer } from './reducer'
import {Usestatevalue} from "./stateprovider"

const Basket = () => {
  


  const[{basket},dispatch]=Usestatevalue()
  console.log(basket)
 

const total=basket.reduce((amount,item)=>(item.price + amount),0)


function removeitem(remove){
  dispatch({
    type:"removefromcart",
    payload:{remove}
  })

}

  return (
    <div>
      <div className='basketcomtainer'>
        <h1>total  :  ${total}</h1>
      </div>

      <div className='mainbasket'>
  
        <div>{basket.map((item)=>(
          <div className='productpage'>
          <img src={item.image} alt={item.title} className="imagecontainer"/>
          <div>

          <div>{item.title}</div><br />
          <div>${item.price}</div>
          <button className='buttoncart' onClick={()=>{removeitem(item.id)}}>remove from cart</button>
          </div>

          </div>
        ))}</div>
      </div>
    </div>
    )
}
export {Basket};
