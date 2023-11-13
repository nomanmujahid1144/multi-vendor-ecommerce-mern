const mongoose = require('mongoose')

const connectDB = async () => {
    // const conn = await mongoose.connect("mongodb://localhost/multirestaurants", {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/multirestaurants", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDB connected: ${conn.connection.host}`)
}


module.exports = connectDB;








