import React from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";
import { useContext } from "react";

const SingleProduct = ({ item }) => {
  const nav = useNavigate();
  const { getCart, setCart } = useContext(MainContext);

  function goToPage() {
    nav("/product/" + item._id);
  }
  function addToCart() {
    const itemInCart = getCart.find((x) => x._id === item._id);

    if (itemInCart) {
      const itemIndex = getCart.findIndex((x) => x._id === item._id);
      getCart[itemIndex].quantity++;
      setCart([...getCart]);
    } else {
      setCart([...getCart, item]);
    }
  }
  return (
    <div className="card i-width ">
      <h2>{item.title}</h2>
      <img src={item.photo} alt="photo" onClick={goToPage} />
      <h2>Price: {item.price} €</h2>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default SingleProduct;
