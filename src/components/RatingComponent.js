import React from 'react';
import StarRatings from 'react-star-ratings';

function RatingComponent({rating}) {
//   const [rating, setRating] = useState(0);

//   const changeRating = (newRating) => {
//     setRating(newRating);
//   };

  return (
    <div>
      <div>Customer Reviews</div>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        // changeRating={changeRating} //changing the rating
        numberOfStars={5}
        name="rating"
        starDimension="30px"
        starSpacing="5px"
      />
      <p>Customer Rating: {rating}</p>
    </div>
  );
}

export default RatingComponent;
