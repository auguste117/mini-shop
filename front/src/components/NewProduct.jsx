import { useRef, useContext } from "react";
import { useState } from "react";
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
function NewRecipe({}) {
  const { secret } = useContext(MainContext);

  const [error, setError] = useState(null);

  const nav = useNavigate();
  const titleRef = useRef();
  const priceRef = useRef();
  const photoRef = useRef();

  const createProduct = () => {
    const product = {
      title: titleRef.current.value,
      photo: photoRef.current.value,
      price: priceRef.current.value,
      secret: secret,
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    };
    fetch("http://localhost:5000/createproduct", options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          nav("/buyproducts");
        } else {
          setError(data.message);
        }
      });
  };

  return (
    <div>
      <div className="inputs d-flex column">
        <input type="text" ref={titleRef} placeholder="Enter title" />
        <input type="text" ref={photoRef} placeholder="Enter photo" />
        <input type="text" ref={priceRef} placeholder="Enter price" />
      </div>
      <button onClick={createProduct}>Submit</button>
      <h3 className="error">{error}</h3>
    </div>
  );
}
export default NewRecipe;
