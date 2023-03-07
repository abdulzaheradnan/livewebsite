import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react';
import axios from "axios"
import { ListItem } from '@mui/material';



export const Singlepageproduct = () => {

const [singleproduct,setsingleproduct]=useState({})
    const {id}=useParams();
    useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((ret)=>{
    console.log("api ata2",ret.data)
    setsingleproduct(ret.data)
    })
    
   
}, [singleproduct]);
  

    console.log("this is param",id)
  return (
    <div>
      <div>{singleproduct.title}</div>
    </div>
  )
}
