const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database connect Success!😊')
    } catch (error) {
        console.log('Database connect fail!😒', error);
    }

}
module.exports = connectDB;