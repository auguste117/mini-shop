import { useRef, useContext, useState } from "react";
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
function InputsReview({}) {
  const { secret, setSecret } = useContext(MainContext);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");

  const nav = useNavigate();
  const nameRef = useRef();
  const photoRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();
  const ratingRef = useRef();

  const getParams = () => {
    const restaurant = {
      name: nameRef.current.value,
      address: addressRef.current.value,
      photo: photoRef.current.value,
      description: descriptionRef.current.value,
      rating: ratingRef.current.value,
      secret: secret,
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(restaurant),
    };
    fetch("http://localhost:5000/restaurant", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.message);
        }
      });
  };

  return (
    <div className="d-flex">
      <div className="inputs d-flex column">
        <input type="text" ref={nameRef} placeholder="restaurant name" />
        <input type="text" ref={photoRef} placeholder="restaurant photo " />
        <input type="text" ref={addressRef} placeholder="restaurant address" />
        <input type="text" ref={descriptionRef} placeholder="description " />
        <div>
          <label for="vol">Rating:</label>
        </div>
        <div>
          0
          <input
            type="range"
            onChange={(event) => setValue(event.target.value)}
            ref={ratingRef}
            name="vol"
            min="0"
            max="5"
            step="1"
          />
          5<div>{value}</div>
          <div>
            <h3 className="error">{error}</h3>
            <button onClick={getParams}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InputsReview;
