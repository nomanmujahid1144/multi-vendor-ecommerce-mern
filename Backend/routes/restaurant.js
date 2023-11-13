const express = require("express");
const router = express.Router();
const {
    addRestaurant,
    restaurantLogin,
    getAllRestaurants,
    getUnApprovedRestaurants,
    updateRestaurantStatusToApproved,
    getSingleRestaurantData,
    getSingleRestaurantDataById,
    getRestaurantsByUserLocation,
    
    getSingleRadius,
    setTax,
    getRadius,
    getTax,
    getDashboardData,
    getSingleShopById,
    updateRadius,
    updateShopById,
} = require("../controllers/restaurant.controllers");
const checkAuth = require("../middleware/check-auth");

router.post("/addRestaurant", addRestaurant);
router.post("/get-restaurants-by-user-location", getRestaurantsByUserLocation);
router.get("/get-single-restaurant-data", checkAuth ,getSingleRestaurantData);
router.get("/get-single-restaurant-data-by-id", getSingleRestaurantDataById);

router.post("/restaurant-login", restaurantLogin);
router.get("/get-all-restaurants" ,getAllRestaurants);
router.get("/get-unverified-restaurants" ,getUnApprovedRestaurants);
router.patch("/update-restaurant-status-to-approve", updateRestaurantStatusToApproved);


router.get("/getradius", checkAuth, getRadius);
router.get("/getsingleshopbyid" ,getSingleShopById);
router.patch("/updateradius" ,updateRadius);
router.post("/updateshopbyid" ,updateShopById);
router.get("/getsingleradius" ,getSingleRadius);
router.post("/settax", checkAuth, setTax);
router.get("/gettax", checkAuth, getTax);
router.get("/getdashboarddata", checkAuth, getDashboardData);

module.exports = router;
