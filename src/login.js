import React, { useState,useHistory } from 'react'
import {auth} from "./firebase"
import { Usestatevalue } from './stateprovider';
import { json, Link } from 'react-router-dom';
import {sigh_up_key} from "./constants"
import { useNavigate } from 'react-router-dom';
export const Login = () => {

const homing=useNavigate()
  const [email,setemail]=useState("")
 const [password, setpassword] = useState("");
 const [error,seterror]=useState("")
const history=useHistory;
const signin=()=>{
  const userlist=JSON.parse(localStorage.getItem(sigh_up_key))

  const user=userlist.find(user=>email===user.email && password===user.password)
  if(user){
    homing("/Home")

  }else{
    alert("email and password is not match")
  }
}

// const register=e=>{
//   e.preventDefault();

//   auth.createuserwithemailandpassword(email,password)
//   .then(auth=>{
//     if(auth){

//       history.push("/")
//     }
//   })
//   .catch(error=>alert(error.message))
// }
  return (
    <div>
        <div className="login_form">
          <h2 className='head'>sign in</h2>
            <label htmlFor="">email</label>
            <input type="text" className='inputitem' value={email} onChange={e=>setemail(e.target.value)}/>
            <label htmlFor="">password</label>
            <input type="text" className='inputitem' value={password} onChange={e=>setpassword(e.target.value)}/>
            <button className='buttonsignin' onClick={signin}>sign in</button>
            <p className="text">If you dont have a account create a new account</p>
            <Link to="/signup">
            <button className='buttonsignin'>create new account</button>
            </Link>

        </div>

    </div>
  )
}
