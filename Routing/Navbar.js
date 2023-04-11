import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

function Navbar(){
    return(<>
    <div className="Navbar">
        <h3>.Logo</h3>
    <ul>
        <li> <NavLink to={"/home"}>Home</NavLink> </li>
        <li> <NavLink to={"/shop"}>Shop</NavLink> </li>
        <li> <NavLink to={"/about"}>About</NavLink> </li>  
    </ul>
    </div>
    </>)
}
export default Navbar ;


