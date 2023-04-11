import React, { useEffect } from "react";
import { useState  } from "react";
import { useNavigate } from "react-router";

import "./Login.css"

function LoginForm(){
    const Navigate = useNavigate();
    const [email , setemail]=useState("");
    const [Password ,setpassword]=useState("");
    const [error , seterror]=useState(false);

function submithandler(event){
    event.preventDefault();
        Navigate("/");
}

useEffect(()=>{
    if(email && Password && Password.length >= 8){
        seterror(false);
    } else{
        seterror(true);
    }
},[Password,email]);



    return(<form className="Login-Form" onSubmit={submithandler}>
        <div className="Form-group" onChange={(event)=> setemail(event.target.value)} value={email}>
            <label>Email</label>
            <input type={"email"} placeholder="Email"/>
        </div>
        <div className="Form-group"onChange={(event)=> setpassword(event.target.value)} value={Password} >
            <label>Password</label>
            <input type={"Password"} placeholder="Password"/>
        </div>
        <button disabled={error }>Login</button>
    </form>
    )
}
export default LoginForm ;


