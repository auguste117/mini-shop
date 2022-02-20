import { useContext } from "react";
import CartProductCard from "./CartProductCard";
import MainContext from "../context/MainContext";

const Cart = () => {
  const { getCart } = useContext(MainContext);

  function total() {
    let counter = 0;
    getCart.map((x) => (counter += x.price * x.quantity));
    return counter;
  }

  return (
    <div>
      <h2>Total price: {total()} €</h2>
      <div className=" d-flex conteiner">
        {getCart.map((x, i) => (
          <CartProductCard key={i} item={x} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
