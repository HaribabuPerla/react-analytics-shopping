import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../helper/cartContext";


export default function Header(){
  const{cartData}=useContext(CartContext)
    return(
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
        {/* <li className="nav-item">
          <Link className="nav-link text-white" to ="/details">Details</Link>
        </li> */}
        
        <li className="nav-item">
          <Link className="nav-link text-white" to ="/cart">
          {
            cartData?.length > 0 &&
            <div className="cartBadge">{cartData?.length}</div>
          }
          
          Cart
          </Link>
        </li>
        
      </ul>
    </div>
        </div>
    </div>
   
    
  </div>
</nav>
    )
}