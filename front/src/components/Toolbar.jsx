import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../context/MainContext";
const Toolbar = ({ secret }) => {
  const { getCart, setCart } = useContext(MainContext);

  return (
    <div className="toolbar">
      {!secret && <Link to="/registration/">Registration</Link>}
      {!secret && <Link to="/login/">Login</Link>}
      {secret && <Link to="/mainpage/">Main Page</Link>}
      {secret && <Link to="/createrecipe/">Create Recipe</Link>}
      {secret && <Link to="/buyproducts/">Buy products</Link>}
      {secret && <Link to="/createproduct/">Add product</Link>}
      {secret && <Link to="/reviews/">Restaurants Reviews</Link>}

      {secret && <Link to="/cart/">Cart ({getCart.length})</Link>}
    </div>
  );
};

export default Toolbar;
