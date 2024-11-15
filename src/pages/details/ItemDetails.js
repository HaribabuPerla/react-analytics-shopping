import React from "react";
import { useParams } from "react-router-dom";
import { mobilesData } from "../../constants";
import "../../css/itemDetails.css"
import RatingComponent from "../../components/RatingComponent";

function ItemDetails() {
  const params = useParams();
  const data = mobilesData?.find((el) => el?.name == params?.name);
  console.log("hari----->data", data);

  
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4">
          <img className="card-img img-rounded" 
          src={data?.imgUrl} 
          alt=""
         />
        </div>
    
        <div className="col-md-8">
          <div className="brand">Brand Details</div>
          <ul>
            <li>Mobile Name:{data?.name}</li>
            <li>Price:{data?.price}</li>
            <li>About:{data?.description}</li>
          </ul>
          <RatingComponent rating={data?.rating}/>
           
        </div>
       
      </div>
    </div>
  );
}

export default ItemDetails;
