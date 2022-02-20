const { nanoid } = require("nanoid");
const userDb = require("../schemas/createuser");
const recipeDb = require("../schemas/createrecipe");
const productDb = require("../schemas/createproduct");
const reviewDb = require("../schemas/restaurantreviews");

module.exports = {
  createuser: async (req, res) => {
    const { username, passwordOne } = req.body;
    const thisUser = await userDb.findOne({
      username,
    });
    if (!thisUser) {
      const user = new userDb();
      user.username = username;
      user.password = passwordOne;
      user.secret = nanoid();

      await user.save();
      res.send({ message: "User cretated" });
    }
    res.send({ error: true, message: "User name already exist" });
  },
  finduser: async (req, res) => {
    const { username, password } = req.body;
    const thisUser = await userDb.findOne({ username, password });
    if (thisUser) {
      const secret = thisUser.secret;
      res.send({ secret });
    }
    res.send({
      error: true,
      message: "this user do not exist please register",
    });
  },
  createrecipe: async (req, res) => {
    const { title, directions, ingredients, photo, secret } = req.body;
    const user = await userDb.findOne({ secret });
    const recipe = new recipeDb();
    recipe.title = title;
    recipe.directions = directions;
    recipe.ingredients = ingredients;
    recipe.photo = photo;
    recipe.user = user.username;
    recipe.secret = user.secret;

    await recipe.save();
    res.send({ message: "recipe created" });
  },
  createproduct: async (req, res) => {
    const { title, photo, price, secret } = req.body;
    const user = await userDb.findOne({ secret });

    const product = new productDb();
    product.title = title;
    product.photo = photo;
    product.price = price;
    product.secret = user.secret;

    product.quantity = 1;
    await product.save();

    res.send({ message: "product created" });
  },
  allrecipes: async (req, res) => {
    const recipes = await recipeDb.find();
    res.send({ recipes });
  },
  getSingle: async (req, res) => {
    const { id } = req.params;
    const recipe = await recipeDb.findOne({ _id: id });
    res.send({ recipe });
  },
  deleteRecipe: async (req, res) => {
    const { id } = req.params;
    await recipeDb.findOneAndDelete({ _id: id });
    res.send({ error: false });
  },
  editproduct: async (req, res) => {
    const { title, photo, price, id } = req.body;
    await productDb.findOneAndUpdate(
      { _id: id },
      { $set: { title: title, photo: photo, price: price } }
    );
    res.send({ error: false });
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    await productDb.findOneAndDelete({ _id: id });
    res.send({ error: false });
  },
  singleProduct: async (req, res) => {
    const { id } = req.params;
    const product = await productDb.findOne({ _id: id });
    res.send({ product });
  },
  allproducts: async (req, res) => {
    const products = await productDb.find();
    res.send({ products });
  },
  restaurantReview: async (req, res) => {
    const { name, photo, address, description, rating, secret } = req.body;
    const review = new reviewDb();
    const user = await userDb.findOne({ secret });

    review.name = name;
    review.photo = photo;
    review.address = address;
    review.description = description;
    review.rating = rating;
    review.user = user.username;
    review.secret = user.secret;
    await review.save();

    res.send({ message: "review saved" });
  },
  allreviews: async (req, res) => {
    const reviews = await reviewDb.find();
    res.send({ reviews });
  },
};
