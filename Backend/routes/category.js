const express = require("express");
const multer = require("multer");
const path            = require('path');
const fs            = require('fs');
const ErrorResponse = require('../utils/errorResponse');
const Product = require('../models/Product');

const {
  addCategory,
  getAllRestaurantCategories,
  getAllCategories,
  getSingleBrand,
  deleteCategories,
  updateCategory,
  getAllProductsClientSide,
} = require("../controllers/category.controller");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.post("/addcategory", checkAuth,  addCategory);
router.get("/getrestaurantcategories", checkAuth, getAllRestaurantCategories);
router.get("/getcategories", getAllCategories);
router.get("/getsinglebrand", getSingleBrand);


router.get("/getproductsclient", getAllProductsClientSide);
router.delete("/deletecategories", deleteCategories);
router.patch("/updatecategory", updateCategory);

module.exports = router;
