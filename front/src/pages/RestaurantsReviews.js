import React from "react";
import InputsReview from "../components/InputsReview";
import { useContext, useEffect, useState } from "react";

const RestaurantsReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allreviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
      });
  });

  return (
    <div className="center ">
      <h2>Add new review</h2>

      <div>{<InputsReview />}</div>
      <h2>All restaurants Reviews</h2>

      {reviews && (
        <div className=" d-flex conteiner">
          {reviews.map((x, i) => (
            <div className="review column d-flex">
              <div>
                <h2>{x.name}</h2>
                <img src={x.photo} alt="photo" />
              </div>
              <div>Address: {x.address}</div>
              <div>Rating: {x.rating}</div>
              <div>{x.description}</div>
              <div>Author: {x.user}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantsReviews;
