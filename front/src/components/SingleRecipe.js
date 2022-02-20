import React from "react";
import { useNavigate } from "react-router-dom";

const SingleRecipe = ({ item }) => {
  const nav = useNavigate();
  function goToPage() {
    nav("/recipe/" + item._id);
  }

  return (
    <div className="card i-width " onClick={goToPage}>
      <img src={item.photo} alt="photo" />

      <h2>{item.title}</h2>
    </div>
  );
};

export default SingleRecipe;
