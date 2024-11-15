import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../helper/cartContext';
import ItemCard from '../../components/ItemCard';
import "../../css/cart.css";
import { Link } from 'react-router-dom';


const Cart = () => {
  const{cartData}=useContext(CartContext);
  const [price,setPrice]=useState(0);
  const [priceArr,setPriceArr]=useState([])
 
 
  const calculateSum = () => {
    let filterMap=cartData?.map((item)=>{
      return parseInt(item?.price.replace(/,/g, ''), 10)
    })
    console.log(filterMap,"1234")
    return filterMap.reduce((total, current) => {
        return total + current;
    }, 0);
}
  console.log("price=====>",cartData)
  return (
    <>
    {
      cartData?.length > 0 ? 
      <div style={{marginBottom:"20%"}}>
      <div className='container'>
        <div className='totalPrice'>
          Total Amount: { calculateSum(cartData)}
        </div>
  
      </div>
      <div className='container'>
        <div className='row'>
        {
          cartData?.length > 0 && 
          <>
          <div className='cart-items-heading'>Your Cart Items:</div>
          {
            cartData?.map((item)=>{
              return(
                <div key={item?.id} className='col-12 col-md-4'>
                <ItemCard data={item} btnTwo="Delete"/>
               </div>
              )
            })
  
          }
          
          </>
        }
        
      </div>
      </div>
      </div>
      :
      <div style={{marginBottom:"20%"}}>
         <div className='container d-flex justify-content-center align-items-center w-100 h-100' >
        <div className='totalPrice' style={{padding:"25px"}}>
           Your Cart is Empty,If u need to add anything in cart Please go to <Link to="/">Home Page</Link>

        </div>
  
      </div>
        
        </div>

    }
    </>
   
  );
};

export default Cart;