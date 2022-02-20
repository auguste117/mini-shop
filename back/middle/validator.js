module.exports = {
  validateUser: (req, res, next) => {
    const { username, passwordOne, passwordTwo } = req.body;

    if (username.length < 5 || username.length > 10) {
      return res.send({ error: true, message: "please check username" });
    }
    if (passwordOne.length < 3 || passwordOne.length > 20) {
      return res.send({ error: true, message: "please check password" });
    }
    if (passwordOne !== passwordTwo) {
      return res.send({ error: true, message: "password do not match" });
    }
    next();
  },
  validateLogin: (req, res, next) => {
    const { username, password } = req.body;

    if (!username) {
      return res.send({ error: true, message: "please enter username" });
    }
    if (!password) {
      return res.send({ error: true, message: "please enter password" });
    }

    next();
  },
  validateProduct: (req, res, next) => {
    const { title, price, photo } = req.body;
    if (!title || title.length > 100)
      return res.send({ error: true, message: "Please add title" });
    if (!price) return res.send({ error: true, message: "Enter price" });
    if (!photo.includes("http"))
      return res.send({ error: true, message: "Bad image" });

    next();
  },
  validateRecipe: (req, res, next) => {
    const { title, directions, ingredients, photo } = req.body;
    directions, ingredients;

    if (!title || title.length > 100)
      return res.send({ error: true, message: "Please add title" });
    if (!directions)
      return res.send({ error: true, message: "Please decribe recipe" });
    if (!ingredients)
      return res.send({ error: true, message: "Please add ingredients" });
    if (!photo.includes("http"))
      return res.send({ error: true, message: "Bad image" });

    next();
  },
  validateRestaurant: (req, res, next) => {
    const { name, photo, address, description, rating } = req.body;

    if (!name || name.length > 30)
      return res.send({ error: true, message: "Bad name" });
    if (!description)
      return res.send({ error: true, message: "Please add description" });
    if (!address)
      return res.send({ error: true, message: "Please add address" });
    if (!rating) return res.send({ error: true, message: "Please add rating" });
    if (!photo.includes("http"))
      return res.send({ error: true, message: "Bad image" });

    next();
  },
};
