import React from "react";
import { useEffect, useState, useRef } from "react";

import SingleProduct from "../components/SingleProduct";
const BuyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="center">
      <h2>BUY PRODUCTS</h2>
      <div className=" d-flex conteiner">
        {products.map((x, i) => (
          <SingleProduct key={i} item={x} />
        ))}
      </div>
    </div>
  );
};

export default BuyProducts;
