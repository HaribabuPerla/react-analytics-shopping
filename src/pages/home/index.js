import React from 'react';
import { mobilesData } from '../../constants';
import ItemCard from '../../components/ItemCard';

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
         {
          mobilesData?.map((item)=>{
            return(
              <div key={item?.id} className='col-12 col-md-4'>
                 <ItemCard data={item} btnTwo="Add To Cart"/>
            </div>
            )
            

          })
         }

      </div>
       
    </div>
  );
};

export default Home;