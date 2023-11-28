const ErrorResponse = require('../utils/errorResponse');

const Tax = require('../models/Tax');
const Order = require('../models/Order');
const Restaurant = require('../models/Restaurant');
const Product = require('../models/Product');
const Category = require('../models/Category');

const { uploadImage, randomPassword } = require('../helpers/helpers');
const fs = require('fs');
const bcrypt = require("bcrypt");
const ejs = require("ejs");
const mongoose = require('mongoose');

const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const jsonwebtoken = require("jsonwebtoken");
const JWT_RESET_KEY = process.env.JWT_RESET_KEY;

exports.addRestaurant = async (req, res, next) => {
    console.log(req.body)
    try {
        console.log( req.query ,'query got here success fully')
        console.log( req.files ,'files got here success fully')
        const body = JSON.parse(req.query.values)
        // const body = req.body;
        if (!req.files) {
            return res.status(200).json({
                success: false,
                data: null,
                message: 'Upload Image'
            })
        }
        const uploadedLogoPath = await uploadImage(req.files.restaurantLogo, next)
        const uploadedCoverImagePath = await uploadImage(req.files.restaurantCoverImage, next)

        body.restaurantLogo = uploadedLogoPath.photoPath;
        body.restaurantCoverImage = uploadedCoverImagePath.photoPath;

        const restaurant = new Restaurant({...body})
        const addedCategory = await restaurant.save()
        
        if (!addedCategory) {
            return next(new ErrorResponse('Add Restaurant failed', 400))
        }
        return res.status(200).json({
            success: true,
            data: addedCategory
        })
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.restaurantLogin = async (req, res, next) => {
    try {
        const result = await Restaurant.findOne({ owner_email: req.body.email });
        if (!result) {
            // this means result is null
            return next(new ErrorResponse('Incorrect email address', 200))
        } else {
            // email did exist
            if (result.verified) {
                // so lets match password
                if (bcrypt.compareSync(req.body.password, result.password)) {
                    // great, allow this user access
                    const token = jsonwebtoken.sign({
                        data: [result.owner_email, result._id], role: 'restaurant'
                    }, "" + process.env.JWT_SECRET);
    
                    console.log(token);
                    return res.status(200).json({
                        success: true,
                        message: 'Successfully Logged in',
                        data: {
                            data: result,
                            token: token
                        }
                    });
                }
                else {
                    return next(new ErrorResponse('Incorrect password', 200))
                }
            } else {
                return res.status(200).json({
                    success: false,
                    message: 'Your restaurant is not verified yet.',
                    data: {
                        data: result,
                        token: null
                    }
                });
            }
        }
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.getUnApprovedRestaurants = async (req, res, next) => {

    try {
        const unVerifiedRestaurants = await Restaurant.find({verified : false}, {__v: 0, createdAt: 0, updatedAt: 0 });

        console.log(unVerifiedRestaurants, 'unVerifiedRestaurants')

        if (unVerifiedRestaurants) {
            return res.status(200).json({
                success: true,
                message: 'Got Restaurants Successfully',
                data: unVerifiedRestaurants
            });

        } else {
            return res.status(200).json({
                success: false,
                message: 'No Restaurant Found',
                data: []
            });
        }
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.getAllRestaurants = async (req, res, next) => {

    try {
        const allRestaurants = await Restaurant.find({}, {__v: 0, createdAt: 0, updatedAt: 0 });

        console.log(allRestaurants, 'Restaurants')

        if (allRestaurants.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Got Restaurants Successfully',
                data: allRestaurants
            });

        } else {
            return res.status(200).json({
                success: false,
                message: 'No Restaurant Found',
                data: []
            });
        }
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.getSingleRestaurantData = async (req, res, next) => {

    try {
        const allRestaurants = await Restaurant.findOne({_id: mongoose.Types.ObjectId(req.user.data[1])});
        const restaurantProducts = await Product.find({ restaurantId : mongoose.Types.ObjectId(req.user.data[1])});
        const restaurantCategories = await Category.find({ restaurantId : mongoose.Types.ObjectId(req.user.data[1])});

        if (allRestaurants) {
            // Convert the Mongoose document to a plain JavaScript object
            const restaurants = allRestaurants.toObject();

            restaurants.products = restaurantProducts.length > 0 ? restaurantProducts : []; 
            restaurants.categories = restaurantCategories.length > 0 ? restaurantCategories : []; 
            
            console.log(restaurantProducts, 'restaurantProducts')
            console.log(restaurantCategories, 'restaurantCategories')
            console.log(restaurants)

            return res.status(200).json({
                success: true,
                message: 'Got Restaurants Successfully',
                data: restaurants
            });

        } else {
            return res.status(200).json({
                success: false,
                message: 'No Restaurant Found',
                data: []
            });
        }
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.getSingleRestaurantDataById = async (req, res, next) => {
    try {
        const id = req.query.id;
        
        const allRestaurants = await Restaurant.findOne({_id: mongoose.Types.ObjectId(id)});
        const restaurantProducts = await Product.find({ restaurantId : mongoose.Types.ObjectId(id)});
        const restaurantCategories = await Category.find({ restaurantId : mongoose.Types.ObjectId(id)});

        if (allRestaurants) {
            // Convert the Mongoose document to a plain JavaScript object
            const restaurants = allRestaurants.toObject();

            restaurants.products = restaurantProducts.length > 0 ? restaurantProducts : []; 
            restaurants.categories = restaurantCategories.length > 0 ? restaurantCategories : []; 

            return res.status(200).json({
                success: true,
                message: 'Got Restaurants Successfully',
                data: restaurants
            });

        } else {
            return res.status(200).json({
                success: false,
                message: 'No Restaurant Found',
                data: []
            });
        }
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.updateRestaurantStatusToApproved = async (req, res, next) => {
    try {
        console.log(req.query.id)
        console.log(req.body)
        const pass = randomPassword();
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pass, salt);


       const restaurant =  await Restaurant.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.query.id) }, { verified: req.body.verified, password: hash });
    
       if (restaurant){
            const oauth2Client = new OAuth2(
                process.env.CLIENT_ID, // ClientID
                process.env.CLIENT_SECRET, // Client Secret
                process.env.REDIRECT_URL // Redirect URL
            );
            oauth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN,
            });
           const accessToken = oauth2Client.getAccessToken();
           
           // Generate the direct URL for the restaurant's logo
            const restaurantLogoUrl = `${process.env.LIVE_SERVER_URL}${restaurant.restaurantLogo}`;

            ejs.renderFile(
                __dirname + "/../views/email.ejs",
                {
                user: restaurant,
                password: pass,
                restaurantLogo: restaurantLogoUrl,
                message: "Restaurant has been Approved",
                link: process.env.LIVE_RESTAURANT_URL
                },
                function (err, data) {
                if (err) return err;
                else {
                    const transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        type: "OAuth2",
                        user: process.env.EMAIL,
                        clientId: process.env.CLIENT_ID,
                        clientSecret: process.env.CLIENT_SECRET,
                        refreshToken: process.env.REFRESH_TOKEN,
                        accessToken: accessToken,
                    },
                    });
                    // send mail with defined transport object
                    const mailOptions = {
                    from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
                    to: restaurant.owner_email, // list of receivers
                    subject: "Account Approved:  ✔", // Subject line
                    html: data, // html body
                    };
                
                    transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Mail sent : %s", info.response);
                        return res.status(200).json({
                            data: restaurant,
                            message: "Updated successfully",
                            success: true,
                        });
                    }
                    });
                }
                }
            );
       } else {
            return res.status(200).json({
                data: null,
                message: "update failed",
                success: false,
            });
        }
        
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};
// exports.getRestaurantsByUserLocation = async (req, res, next) => {

//     try {

//         console.log(req.body)

//         const allRestaurants = await Restaurant.findOne({_id: mongoose.Types.ObjectId(req.user.data[1])});
//         const restaurantProducts = await Product.find({ restaurantId : mongoose.Types.ObjectId(req.user.data[1])});
//         const restaurantCategories = await Category.find({ restaurantId : mongoose.Types.ObjectId(req.user.data[1])});

//         if (allRestaurants) {
//             // Convert the Mongoose document to a plain JavaScript object
//             const restaurants = allRestaurants.toObject();

//             restaurants.products = restaurantProducts.length > 0 ? restaurantProducts : []; 
//             restaurants.categories = restaurantCategories.length > 0 ? restaurantCategories : []; 
            

//             return res.status(200).json({
//                 success: true,
//                 message: 'Got Restaurants Successfully',
//                 data: restaurants
//             });

//         } else {
//             return res.status(200).json({
//                 success: false,
//                 message: 'No Restaurant Found',
//                 data: []
//             });
//         }
//     }
//     catch (err) {
//         return next(new ErrorResponse(err, 400))
//     }
// }
exports.getRestaurantsByUserLocation = async (req, res, next) => {
    console.log(req.body, "order Body")
  
    try {
      const adminRadius = await Restaurant.find({ formattedAddress: req.body.formattedAddress });
      console.log(adminRadius, 'adminRadius')
      if (adminRadius.length < 1) {
        return res.status(403).json({
          success: false,
          message: "Service Not Available in Specified Area",
          data: null,
        });
      }
  
      //checking if User is with in location limits 
      let comparingCoor = await Restaurant.find({
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
  
      console.log(comparingCoor, 'comparingCoor')
  
      if (comparingCoor.length < 1) {
        console.log('i n here')
        return res.status(403).json({
          success: false,
          message: "Service Not Available in Specified Area ",
          data: null,
        });
      } else {
  
        //find distance from shop to delivery point
        const totalDistance = await Restaurant.aggregate([
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
  
          
        // Use map to create an array of promises
        const promises = totalDistance.map(async (restaurant) => {
            const products = await Product.find({ restaurantId: mongoose.Types.ObjectId(restaurant._id) });
            restaurant.products = products;
            return restaurant;
        });

          console.log(totalDistance, 'Distance')
          
        // Use Promise.all to wait for all promises to resolve
        Promise.all(promises)
        .then((restaurantsWithProducts) => {
            return res.status(200).json({
                success: true,
                message: "All Nearest Restaurants",
                data: restaurantsWithProducts,
            });
        })
        .catch((err) => {
            return next(new ErrorResponse(err, 400));
        });
      }
  
    } catch (err) {
      return next(new ErrorResponse(err, 400));
    }
};

exports.getRadius = async (req, res, next) => {

    try {
        const alreadyPresent = await Restaurant.find({})
        console.log(alreadyPresent)
        if (alreadyPresent) {
            return res.status(200).json({
                success: true,
                message: 'Got Radius Successfully',
                data: alreadyPresent
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Radius Found',
            data: []
        });


    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.getSingleRadius = async (req, res, next) => {
    // console.log(req.body + " Body Request")
    // console.log(req.params.restaurantName + " params Request")
    console.log(req.query.shopName + " Query Request")
    // const json = res.json(req.query)
    // console.log(json)
    try {
        const alreadyPresent = await Radius.findOne({ "shopName": req.query.shopName }, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
            .populate('products.productIds')

        console.log(alreadyPresent)
        if (alreadyPresent) {
            return res.status(200).json({
                success: true,
                message: 'Got Radius Successfully',
                data: alreadyPresent
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Radius Found',
            data: []
        });


    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}

exports.setTax = async (req, res, next) => {
    console.log(req.body)
    try {
        const alreadyPresent = await Tax.findOne({})
        if (!alreadyPresent) {
            const tax = new Tax({
                totalTax: req.body.tax,
                pricePerMile: req.body.pricePerMile
            })
            const approvedTax = await tax.save()
            return res.status(200).json({
                success: true,
                message: 'Tax Updated Successfully',
                data: approvedTax
            });

        }
        else {
            const toBeUpdated = {
                totalTax: req.body.totalTax,
                pricePerMile: req.body.pricePerMile
            }
            const updateTax = await Tax.findOneAndUpdate({ _id: mongoose.Types.ObjectId(alreadyPresent._id) }, toBeUpdated, { new: true })
            if (updateTax) {
                return res.status(200).json({
                    success: true,
                    message: 'Tax Updated Successfully',
                    data: updateTax
                });
            }
        }

    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}

exports.getTax = async (req, res, next) => {

    try {
        const alreadyPresent = await Tax.findOne({}, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
        if (alreadyPresent) {
            return res.status(200).json({
                success: true,
                message: 'Got Tax Successfully',
                data: alreadyPresent
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Tax Found',
            data: []
        });


    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}


exports.getDashboardData = async (req, res, next) => {

    try {
        let ordersPending = await Order.aggregate([
            {
                $facet: {
                    "totalPendingOrders": [
                        { $match: { status: 0 } },
                        { $count: "totalPendingOrders" },
                    ],
                    "last24HoursPendingOrders": [
                        { $match: { status: 0, "updatedAt": { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } } },
                        { $count: "last24HoursPendingOrders" }
                    ],
                }
            },
            {
                $project: {
                    "totalPendingOrders": { "$arrayElemAt": ["$totalPendingOrders.totalPendingOrders", 0] },
                    "last24HoursPendingOrders": { "$arrayElemAt": ["$last24HoursPendingOrders.last24HoursPendingOrders", 0] },
                }
            }
        ])

        let ordersAll = await Order.aggregate([
            {
                $facet: {
                    "totalAllOrders": [
                        { $count: "totalAllOrders" },
                    ],
                    "last24HoursAllOrders": [
                        { $match: { "createdAt": { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } } },
                        { $count: "last24HoursAllOrders" }
                    ],
                }
            },
            {
                $project: {
                    "totalAllOrders": { "$arrayElemAt": ["$totalAllOrders.totalAllOrders", 0] },
                    "last24HoursAllOrders": { "$arrayElemAt": ["$last24HoursAllOrders.last24HoursAllOrders", 0] },
                }
            }
        ])
        let ordersCompleted = await Order.aggregate([
            {
                $facet: {
                    "totalCompletedOrders": [
                        { $match: { status: 5 } },
                        { $count: "totalCompletedOrders" },
                    ],
                    "last24HoursCompletedOrders": [
                        { $match: { status: 5, "updatedAt": { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } } },
                        { $count: "last24HoursCompletedOrders" }
                    ],
                }
            },
            {
                $project: {
                    "totalCompletedOrders": { "$arrayElemAt": ["$totalCompletedOrders.totalCompletedOrders", 0] },
                    "last24HoursCompletedOrders": { "$arrayElemAt": ["$last24HoursCompletedOrders.last24HoursCompletedOrders", 0] },
                }
            }
        ])
        let productsAdded = await Product.aggregate([
            {
                $facet: {
                    "totalAddedProducts": [
                        { $count: "totalAddedProducts" },
                    ],
                    "last24HoursAddedProducts": [
                        { $match: {"createdAt": { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) } } },
                        { $count: "last24HoursAddedProducts" }
                    ],
                }
            },
            {
                $project: {
                    "totalAddedProducts": { "$arrayElemAt": ["$totalAddedProducts.totalAddedProducts", 0] },
                    "last24HoursAddedProducts": { "$arrayElemAt": ["$last24HoursAddedProducts.last24HoursAddedProducts", 0] },
                }
            }
        ])

        if (ordersPending) {
            return res.status(200).json({
                success: true,
                message: 'Got Dashboard Data Successfully',
                data: [
                    ordersAll[0],
                    ordersPending[0],
                    ordersCompleted[0],
                    productsAdded[0]
                ]
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Dashboard Data Found',
            data: []
        });


    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}

exports.getSingleShopById = async (req, res, next) => {
    console.log(req.query.restaurantId + " Query Request")
    try {
        const alreadyPresent = await Radius.findOne({ _id: req.query.restaurantId }, { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 })
            .populate('products.productIds')

        console.log(alreadyPresent)
        if (alreadyPresent) {
            return res.status(200).json({
                success: true,
                message: 'Got Radius Successfully',
                data: alreadyPresent
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Radius Found',
            data: []
        });


    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.updateRadius = async (req, res, next) => {

    console.log(req.body.restaurantId + " Restaurant ID")
    console.log(req.body.verify + " verify ")
    console.log(mongoose.Types.ObjectId(req.body.restaurantId))

    const verification = {
        verifyStatus: 1
    }
    try {
        const restaurantId = await Radius.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.body.restaurantId) }, verification)

        console.log(restaurantId + " Registered Restaurant")
        Product.find({}, function (err, product) {
            if (err) {
                console.log(err)
            } else {
                console.log(product)
                restaurantId.products.productIds = product;
                restaurantId.save();
            }
        })
        if (restaurantId) {
            return res.status(200).json({
                success: true,
                message: 'Update Registration Radius Successfully',
                data: restaurantId
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Radius Found',
            data: []
        });


    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}
exports.updateShopById = async (req, res, next) => {

    console.log(req.query.restaurantId + " Restaurant ID")
    console.log(req.body)
    console.log(req.files)

    const body = req.body

    try {

        if (req.files?.restaurantImage) {
            const toBeUpdated = await Radius.findOne({ _id: mongoose.Types.ObjectId(req.query.restaurantId) }).select('shopImage')
            fs.unlink(`${process.env.FILE_DELETE_PATH}${toBeUpdated.restaurantImage}`, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            });
            const uploadedPath = await uploadImage(req.files?.restaurantImage, next)
            body.shopImage = uploadedPath.photoPath
        }

        const restaurantId = await Radius.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.query.restaurantId) }, req.body, { new: true })

        if (restaurantId) {
            return res.status(200).json({
                success: true,
                message: 'Update Registration Successfully',
                data: restaurantId
            });
        }
        return res.status(200).json({
            success: false,
            message: 'No Radius Found',
            data: []
        });
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}