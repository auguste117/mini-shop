import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MainContext from "../context/MainContext";
import SingleRecipe from "../components/SingleRecipe";
const MainPage = ({}) => {
  const { secret } = useContext(MainContext);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allrecipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <div className="center">
      <h2>ALL RECIPES</h2>
      <div className=" d-flex conteiner">
        {recipes.map((x, i) => (
          <SingleRecipe key={i} item={x} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
