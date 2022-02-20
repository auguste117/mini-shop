import { useRef, useContext } from "react";
import { useState } from "react";
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
function NewRecipe({}) {
  const { secret } = useContext(MainContext);
  const [error, setError] = useState(null);

  const nav = useNavigate();
  const titleRef = useRef();
  const ingredientsRef = useRef();
  const photoRef = useRef();
  const directionsRef = useRef();

  const createRecipe = () => {
    const recipe = {
      title: titleRef.current.value,
      directions: directionsRef.current.value,
      ingredients: ingredientsRef.current.value,
      photo: photoRef.current.value,
      secret: secret,
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(recipe),
    };
    fetch("http://localhost:5000/createrecipe", options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          nav("/mainpage");
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <div className="d-flex inputs">
      <div className="inputs d-flex ">
        <input type="text" ref={titleRef} placeholder="Title" />
        <input type="text" ref={ingredientsRef} placeholder="Ingredients" />

        <input type="text" ref={directionsRef} placeholder="Directions" />
        <input type="text" ref={photoRef} placeholder="Photo" />
      </div>
      <div>
        <button onClick={createRecipe}>Submit</button>
        <h3 className="error">{error}</h3>
      </div>
    </div>
  );
}
export default NewRecipe;
