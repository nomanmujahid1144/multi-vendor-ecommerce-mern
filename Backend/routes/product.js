const express = require("express");
const multer = require("multer");
const path            = require('path');
const fs            = require('fs');
const ErrorResponse = require('../utils/errorResponse');
const Product = require('../models/Product');

const {
  addProduct,
  getAllRestaurantProducts,
  uploadImage,
  getAllProducts,
  getdiscountproducts,
  getFeatureProducts,
  getProductByBrand,
  getProductByBrandWithCategory,
  deleteProducts,
  updateProduct,
  getAllProductsClientSide,

  addToFavourite,
  getAllFavourites,
} = require("../controllers/product.controllers");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.post("/addproduct", checkAuth ,  addProduct);
router.get("/get-restaurant-products", checkAuth, getAllProducts);
router.get("/getproducts", getAllRestaurantProducts);
router.get("/getdiscountproducts", getdiscountproducts);
router.get("/getfeatureproducts", getFeatureProducts);
router.get("/getproductbybrand", getProductByBrand);
router.get("/getproductbybrandwithcategory", getProductByBrandWithCategory);



router.get("/getproductsclient", getAllProductsClientSide);
router.delete("/deleteproducts", deleteProducts);
router.patch("/updateproduct", updateProduct);

router.patch("/addtofavourite" ,  addToFavourite);
router.get("/getallfavourites" ,  getAllFavourites);

module.exports = router;
