import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const SingleRecipePage = ({ setCart, getCart }) => {
  const nav = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const { secret, setSecret } = useContext(MainContext);

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/single/" + id)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.recipe);
      });
  }, []);

  function deleteRecipe() {
    fetch("http://localhost:5000/delete/" + id)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          nav("/mainpage");
        }
      });
  }

  return (
    <div>
      {recipe && (
        <div className=" d-flex center">
          <div className=" single-item column ">
            <img src={recipe.photo} alt="recipe" />
            <h5>Author: {recipe.user}</h5>
            <h1>{recipe.title}</h1>
            <h2>Ingredients</h2>
            <div>{recipe.ingredients}</div>
            <h2>Directions</h2>

            <div>{recipe.directions}</div>

            {secret === recipe.secret && (
              <div>
                <button onClick={deleteRecipe}>Delete Recipe</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRecipePage;
