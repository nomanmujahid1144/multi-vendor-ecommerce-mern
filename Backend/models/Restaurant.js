const mongoose = require('mongoose')

const restaurant = new mongoose.Schema({
    geometry: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
    },
    formattedAddress: {
        type: String,
        default:''
    },
    password: {
        type: String,
        default: ''
    },
    restaurantName: {
        type: String,
        default: ''
    },
    restaurantLogo: {
        type: String,
        default: ''
    },
    restaurantCoverImage: {
        type: String,
        default: ''
    },
    restaurantDescription: {
        type: String,
        default: ''
    },
    minDeliveryTime: {
        type: Number,
        default: 0
    },
    maxDeliveryTime: {
        type: Number,
        default: 0
    },
    timeStamp: {
        type: String,
        default: ''
    },
    cuisine: {
        type: String,
        default: ''
    },
    diningMode: {
        type: String,
        default: ''
    },
    dietary: {
        type: Array,
        default: []
    },
    tax: {
        type: Number,
        default: 0
    },
    owner_FirstName : {
        type: String,
        default: ''
    },
    owner_LastName : {
        type: String,
        default: ''
    },
    owner_email : {
        type: String,
        default: ''
    },
    owner_PhoneNumber:{
        type:String
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurant);