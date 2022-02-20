import { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContext from "./context/MainContext";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MainPage from "./pages/MainPage";
import Toolbar from "./components/Toolbar";
import CreateRecipe from "./pages/CreateRecipe";
import CreateProduct from "./pages/CreateProduct";
import BuyProducts from "./pages/BuyProduct";
import SingleRecipePage from "./pages/SingleRecipePage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import RestaurantsReviews from "./pages/RestaurantsReviews";
function App() {
  const [secret, setSecret] = useState(null);
  const [getCart, setCart] = useState([]);

  return (
    <MainContext.Provider
      value={{
        secret,
        setSecret,
        getCart,
        setCart,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Toolbar secret={secret} />

          <Routes>
            <Route path="/registration" element={<Registration />} />

            <Route path="/login" element={<Login />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/createrecipe" element={<CreateRecipe />} />
            <Route path="/createproduct" element={<CreateProduct />} />
            <Route path="/recipe/:id" element={<SingleRecipePage />} />
            <Route
              path="/product/:id"
              element={
                <SingleProductPage getCart={getCart} setCart={setCart} />
              }
            />
            <Route path="/buyproducts" element={<BuyProducts />} />
            <Route path="/reviews" element={<RestaurantsReviews />} />

            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MainContext.Provider>
  );
}

export default App;
