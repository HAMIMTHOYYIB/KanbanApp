const mongoose = require('mongoose');
require('dotenv').config();

const connectMongoDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_DB
        )
        .then(console.log("connected to mongoDB."))
    } catch (error) {
        console.error('Error connecting to mongoDB ', error)
        process.exit(1)
    }
}
module.exports = connectMongoDB