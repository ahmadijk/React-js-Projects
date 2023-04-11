import React from "react";
import Navbar from "./Navbar";
import "./Login.css"
import { useEffect,useState } from "react";

function Shop(){
    const [data , setdata]=useState([]);

 useEffect(()=>{
  fetch("https://api.escuelajs.co/api/v1/products").then(function(data){
        return data.json() 
        }).then(function(response){
            console.log(response);
         setdata(response)
    })
},[]);

console.log(data)
    return(<>
    <Navbar/>
    <div style={{display:'grid' , gridTemplateColumns:'auto auto auto' , marginLeft:'10%'}}>

{data.map(function(y){  
    return(

        // <div className="CARDS" style={{backgroundColor:"",width:"auto" }}>
        <div className="P-Cards" style={{backgroundColor:'#eee', marginTop:'10%' , alignItems:'center', padding:'10px' , boxSizing :"border-box" , width:"75%" , borderRadius:"3px"}}>
        <h2>{y.title}</h2>
        <img src={y.images} alt="" style={{width:'100px' , height:'100px'}}/>
        <h2 style={{fontSize:"10px" ,marginLeft:"auto",marginRight:"auto"}}>{y.description }</h2><br></br>
        <p>{y.price}$</p>
       
        </div>
        // </div>
   )
})}

</div>
    <h1 style={{textAlign : "center" , fontSize:"50px" , marginTop : "50px"}}>Welcome To Shopping page !</h1>
    </>)
}

export default Shop ;
