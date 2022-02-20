import { useContext } from "react";
import MainContext from "../context/MainContext";

const CartProductCard = ({ item }) => {
  const { getCart, setCart } = useContext(MainContext);

  function add() {
    const itemIndex = getCart.findIndex((x) => x._id === item._id);
    getCart[itemIndex].quantity++;
    setCart([...getCart]);
  }

  function remove() {
    const itemIndex = getCart.findIndex((x) => x._id === item._id);

    if (getCart[itemIndex].quantity === 1) {
      const result = getCart.filter((x) => x._id !== item._id);
      return setCart([...result]);
    }

    getCart[itemIndex].quantity--;
    setCart([...getCart]);
  }

  return (
    <div className="card i-width">
      <img src={item.photo} alt="photo" />

      <div>
        <h3>Quantity: {item.quantity}</h3>
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
      </div>
      <div>
        <h3>Price: {item.price * item.quantity}€</h3>
      </div>
    </div>
  );
};

export default CartProductCard;
