const app = require('./app');
const connectDB = require('./src/config/db');
require('dotenv').config();
const port = process.env.PORT || 3000;


app.listen(port, async () => {
    console.log(`Server Running Port ${port}`);
    await connectDB();
})