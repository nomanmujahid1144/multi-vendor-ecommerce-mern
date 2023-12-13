const ErrorResponse = require('../utils/errorResponse');

const Restaurant = require('../models/Restaurant');
const Category = require('../models/Category');
const Product = require('../models/Product');
const mongoose = require('mongoose');



exports.getWebsiteDefaultDataByUserLocation = async (req, res, next) => {
    console.log(req.body, "order Body")
  
    try {

        // GET ALl Categories 
        const categories = await Category.find({});

        // Get All Products Under 40
        const products = await Product.find({ price: { $lt: 40 } });
        
        // Get restaurants Under 40
        //checking if User is with in location limits 
        let allRestaurantsInLocation = await Restaurant.find({
            "geometry.coordinates": {
            $nearSphere: {
                $geometry: {
                type: "Point",
                coordinates: [
                    parseFloat(req.body.geometry.coordinates[0]),
                    parseFloat(req.body.geometry.coordinates[1]),
                ],
                },
                $maxDistance: parseInt(30),
            },
            },
        });
    
        if (allRestaurantsInLocation.length < 1) {
            return res.status(403).json({
            success: false,
            message: "Service Not Available in Specified Area ",
            data: null,
            });
        } else {
  
        //find distance from shop to delivery point
        const restaurantsNearYou = await Restaurant.aggregate([
          {
            $geoNear: {
              near: {
                type: "Point", coordinates: [
                  parseFloat(req.body.geometry.coordinates[0]),
                  parseFloat(req.body.geometry.coordinates[1]),
                ]
              },
              distanceField: "dist.calculated",
              spherical: true
            }
          }
        ])
            
        return res.status(200).json({
            success: true,
            message: "All Default Data for Home Page",
            data: {
                categories: categories,
                discountedProducts: products,
                restaurantsNear: restaurantsNearYou,
                restaurants: allRestaurantsInLocation
            }
        });
      }
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
