import React, { useEffect, useContext, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const SingleProductPage = ({}) => {
  const nav = useNavigate();
  const [product, setProduct] = useState(null);
  const [showinputs, setShowinputs] = useState(false);
  const [error, setError] = useState(null);
  const { getCart, setCart } = useContext(MainContext);

  const titleRef = useRef();
  const priceRef = useRef();
  const photoRef = useRef();

  const { secret } = useContext(MainContext);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/singleproduct/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
      });
  }, []);

  function deleteProduct() {
    fetch("http://localhost:5000/deleteproduct/" + id)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          nav("/buyproducts");
        }
      });
  }
  function showInputs() {
    setShowinputs(!showinputs);
  }
  function editProduct() {
    console.log("edit");
    const product = {
      title: titleRef.current.value,
      photo: photoRef.current.value,
      price: priceRef.current.value,
      id: id,
    };
    console.log(id);
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    };
    fetch("http://localhost:5000/editproduct", options)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          nav("/buyproducts");
        } else {
          setError(data.message);
        }
      });
  }
  function addToCart() {
    const itemInCart = getCart.find((x) => x._id === product._id);

    if (itemInCart) {
      const itemIndex = getCart.findIndex((x) => x._id === product._id);
      getCart[itemIndex].quantity++;
      setCart([...getCart]);
    } else {
      setCart([...getCart, product]);
    }
  }
  return (
    <div className="all-products">
      {product && (
        <div>
          {showinputs && (
            <div>
              <h2 className="center">Please enter new information</h2>
              <div className=" d-flex column">
                <input type="text" ref={titleRef} placeholder="Enter title" />
                <input type="text" ref={photoRef} placeholder="Enter photo" />
                <input type="text" ref={priceRef} placeholder="Enter price" />
                <button onClick={editProduct}>Edit product</button>
                <h3 className="error">{error}</h3>
              </div>
            </div>
          )}
          <div className="d-flex single-item column">
            <img src={product.photo} alt="product" />
            <div className=" column d-flex">
              <div className="center">
                <h1>{product.title}</h1>
                <div>Price: {product.price} €</div>
                <button onClick={addToCart}>Add to cart</button>
              </div>

              {secret === product.secret && (
                <div className="center">
                  <button onClick={deleteProduct}>Delete Product</button>
                  <button onClick={showInputs}>Edit Product</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
