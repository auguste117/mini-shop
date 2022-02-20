const express = require("express");
const router = express.Router();
const controller = require("../controllers/database");
const validator = require("../middle/validator");

router.post("/createuser", validator.validateUser, controller.createuser);
router.post("/finduser", validator.validateLogin, controller.finduser);
router.post(
  "/createproduct",
  validator.validateProduct,
  controller.createproduct
);
router.post("/createrecipe", validator.validateRecipe, controller.createrecipe);
router.post(
  "/restaurant",
  validator.validateRestaurant,
  controller.restaurantReview
);
router.post("/editproduct", validator.validateProduct, controller.editproduct);

router.get("/allrecipes", controller.allrecipes);
router.get("/allproducts", controller.allproducts);
router.get("/allreviews", controller.allreviews);

router.get("/single/:id", controller.getSingle);
router.get("/singleproduct/:id", controller.singleProduct);
router.get("/delete/:id", controller.deleteRecipe);
router.get("/deleteproduct/:id", controller.deleteProduct);

// router.get("/remove/:id", controller.remove);

module.exports = router;
