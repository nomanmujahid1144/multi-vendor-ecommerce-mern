const express = require("express");
const router = express.Router();
const {
    getWebsiteDefaultDataByUserLocation
} = require("../controllers/website.controllers");
const checkAuth = require("../middleware/check-auth");

router.post("/get-website-default-data-by-user-location", getWebsiteDefaultDataByUserLocation);

module.exports = router;
