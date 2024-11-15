import { createContext, useState } from "react";


const CartContext=createContext({});

function CartProvider({children}){
    const [cartData,setCartData]=useState([])
    const value={cartData,setCartData}
    console.log("context=====>",cartData)
    return(
        <CartContext.Provider value={value}>
               {children}
        </CartContext.Provider>
    )

}
export  {CartProvider,CartContext}