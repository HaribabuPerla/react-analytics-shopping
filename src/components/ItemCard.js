import "../css/header.css";
import { Link } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import { CartContext } from "../helper/cartContext";
import SnackBar from "./SnackBar";

export default function ItemCard(props){
    const{data,btnOne,btnTwo}=props
    const {cartData,setCartData}=useContext(CartContext);
    const[snackbarActive,setSnackbarActive]=useState({active:false,color:"",message:""});

    const cartHandler=(data)=>{
        let checkData=cartData?.find((el)=>el?.id == data?.id)
   if(!checkData){
    setCartData((prev)=>[...prev,data])
    setSnackbarActive({
        active:true,
        message:`Your ${data?.name} Added to cart Successfully`,
        color:"green"
    })
    
   }else{
    setSnackbarActive({
        active:true,
        message:`Your ${data?.name} already in cart`,
        color:"red"
    })
   }
        
    }
useEffect(()=>{
        snackbarActive?.active && 
         setTimeout(()=>{
            setSnackbarActive({
                active:false,
                message:"",
                color:""
            })
         },2000)

    },[snackbarActive])
    const deleteHandler=(data)=>{

        let removedData=cartData?.filter((el)=>el?.id !== data?.id)
       console.log("data----->",removedData);
       setCartData(removedData)
     setSnackbarActive({
            active:true,
            message:`Your ${data?.name} removed Successfully`,
            color:"green"
    
        })
      
       

    }
    return(
        <>
        <div className="card item-card mt-3">
            <div className="card-head card-img" >
                 <img className="card-img img-rounded" src={data?.imgUrl} alt="" />
            </div>
            <div className="card-body bg-dark">
                <h4 className="card-title text-warning">{data?.name}</h4>
                <div className="cad-text text-warning"> {data?.price}</div>
                <div className="d-flex flex-row justify-content-between w-100">
                    <div>
                        {
                            btnTwo === "Delete"?
                            <Link to={`/details/${data?.name}`} className="btn btn-primary mt-3">Place Order</Link>
                            :
                            <Link to={`/details/${data?.name}`} className="btn btn-primary mt-3">See details</Link>
                        }
                   
                    </div>
                    <div>
                    <div onClick={btnTwo === "Delete"?()=>{deleteHandler(data)}:()=>cartHandler(data)}className={btnTwo === "Delete"?"btn btn-danger mt-3":"btn btn-success mt-3"}>{btnTwo}</div>
                    </div>
            
            
                </div>
                

            </div>

        </div>
        {
            snackbarActive?.active &&
            <SnackBar
              bgColor={snackbarActive?.color}
              txtColor="white"
              message ={snackbarActive?.message}

            

            
            />

        }
        </>
    )
}