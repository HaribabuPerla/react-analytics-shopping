import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";


export default function Header(){
    return(
        // <div className="header-container">
        //     <div className="flex-container">
        //     <div>
        //     <h3 style={{color:"white"}}>Hari Sai Mobiles</h3>
        //     </div>
        //     <div>
        //     <nav className="links-container">
         
        //     <div >
        //        <Link className="route-link" to="/">Home</Link>
        //     </div>
        //     <div >
        //       <Link className="route-link" to="/details">Details</Link> 
        //     </div>
        //     <div className="route-link">
        //        <Link className="route-link" to="/cart">Cart</Link> 
        //     </div>
           
         
            
        
        // </nav>
        // </div>
        // </div>
        // </div>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <div className="d-flex flex-row justify-content-between align-items-center w-100 h-100">
        <div>
        <Link className="navbar-brand text-white" href="#">Hari Sai Shopping</Link>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
        </div>
        <div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to ="/details">Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to ="/cart">Cart</Link>
        </li>
        
      </ul>
    </div>
        </div>
    </div>
   
    
  </div>
</nav>
    )
}