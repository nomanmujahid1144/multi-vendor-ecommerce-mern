const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    name: {
        type: String,
        default: ''
    },
    type: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Please Enter Description"]
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: [true, "Please Add Category"]
    },
    subCategory: {
        type: String
    },
    brand: {
        type: String,
        required: [true, "Please Add Brand"]
    },
    effects: {
        uplifted: Number,
        euphoric: Number,
        energetic: Number,
        creative: Number,
        focused: Number,
        thc : Number,
        cbd : Number,
    },
    favourite : {
        type: Boolean,
        default : false
    },
    featureProduct : {
        type: Boolean,
        default : false
    },
    shopid : {
        type: mongoose.Schema.Types.ObjectId, ref: 'Radius'
    },
    extras : {
        type : Array
    },
    productPhoto: { type: String },
}, { timestamps: true })


module.exports = mongoose.model('Product', productSchema);
