import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'
import React, { useEffect } from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {sigh_up_key} from "./constants"

export const Signup = () => {

    const log=useNavigate()

    const [list, setlist] = useState([])
    const [email,setemail]=useState("")
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("")



    const handleregister=()=> {
        let userlist=JSON.parse(localStorage.getItem(sigh_up_key))
       
        userlist = userlist === null ? [] : userlist;
        localStorage.setItem(sigh_up_key,JSON.stringify([...userlist,{email,password}]))
        if(userlist){
            log("/login")
        }else{
            alert("invalid data")
            setemail("")
            setpassword("")
        }

    }
    return (
        <div>
            <div className="login_form">
                <h2 className='head'>sign up</h2>
                <p style={{ color: "red" }}>{error}</p>
                <label htmlFor="">email</label>
                <input type="text" className='inputitem' value={email} onChange={e => setemail(e.target.value)} />
                <label htmlFor="">password</label>
                <input type="password" className='inputitem' value={password} onChange={e => setpassword(e.target.value)} />
                <button className='buttonsignin' onClick={handleregister}>register</button>

            </div>
        </div>
    )
}


