const { readdirSync } = require('fs')
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())


// routes middleware
readdirSync('./src/routes/').map(r => app.use('/api/v1', require(`./src/routes/${r}`)));



module.exports = app;