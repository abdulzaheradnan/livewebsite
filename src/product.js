import React, { useState ,useEffect,useReducer} from 'react'
import "./product.css";
import axios from "axios"
import {Link} from "react-router-dom"
// import { initiialstate,reducer } from './reducer';
import {Usestatevalue} from "./stateprovider"




export const Product = () => {
  const [array,setarray]=useState([])

 const [state,dispatch]=Usestatevalue();
 const [{searchinput},dispatche]=Usestatevalue();

 const baskethandle=(pro)=>{
  dispatch({
    type:"add",
    payload:{pro}
  })

 }
  useEffect(() => {
   axios.get('https://fakestoreapi.com/products').then((res)=>{
    setarray(res.data)
    console.log("this is api data",res.data)

   })
  }, []);

useEffect(()=>{
  const filtereddata=array.filter((item)=>{
    if(item.title.match(searchinput)){
      return true

    }
    return false
  })
  setarray(filtereddata)
},[searchinput])
console.log("this is array",array)
  return (
    <div>
      
      {array.map((item,id)=>{
  return(
     <div className='wholecontainer'>
        <div className="product_container">
               <div className="proinfo">
                    <>  <div className='titlepro' key={item.id}>{item.title}</div>
                    <div>${item.price}</div>
                    <div>{item.rating.rate}</div>
                    </>

              
            </div>
        <img src={item.image} alt="" className='image_product' />
        <button className='buttoncart' onClick={()=>{baskethandle(item)}
        }>add to store</button>

           
        </div>
          </div>
  )
})}
      

   
          </div>

  )
}
