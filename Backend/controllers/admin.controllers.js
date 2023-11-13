const ErrorResponse = require('../utils/errorResponse');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

exports.adminSignup = async (req, res, next) => {
    try {
        console.log(req.body)
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        let admin = new Admin({
            name : req.body.name,
            email: req.body.email,
            password: hash 
        })
        const token =  jsonwebtoken.sign(
            {
              data: [admin.email, admin._id],
              role: "admin",
            },
            "" + process.env.JWT_SECRET
          );
        const result = await admin.save();
        if (!result) {
            return next(new ErrorResponse('Signup failed', 400))
        }
        return res.status(200).json({
            success: true,
            message: "Signup successfull",
            token
        })
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}

exports.adminLogin = async (req, res, next) => {
    try {
        const result = await Admin.findOne({ email: req.body.email });
        if (!result) {
            // this means result is null
            return next(new ErrorResponse('Incorrect email address', 200))
        } else {
            // email did exist
            // so lets match password
            if (bcrypt.compareSync(req.body.password, result.password)) {
                // great, allow this user access
                const token = jsonwebtoken.sign({
                    data: [result.email, result._id],
                    role: 'admin'
                }, "" + process.env.JWT_SECRET);
                console.log(token);
                return res.status(200).json({
                    success: true,
                    message: 'Successfully Logged in',
                    token: token
                });
            }
            else {
                return next(new ErrorResponse('Incorrect password', 200))
            }
        }
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}

exports.getAdmin = async (req, res, next) => {

    try {
        const alreadyPresent = await Admin.findOne({})
        console.log(alreadyPresent)
        if (alreadyPresent) {
            return res.status(200).json({
                success: true,
                message: 'Got Admin Successfully',
                data: alreadyPresent
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Admin Found',
            data: null
        });


    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}