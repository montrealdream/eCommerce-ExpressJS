const express = require('express');
const morgan = require('morgan');
const {default: helmet} = require('helmet');
const compression = require('compression');
const app = express();

// const connect_mongodb_level_0 = require('./dbs/init.mongodb.level_0');
const connect_mongodb = require('./dbs/inti.mongodb');

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
// connect_mongodb_level_0;
connect_mongodb;

// init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello Giang';

    return res.status(200).json({
        message: 'Welcome Giang Truong!',
        metadata: strCompress.repeat(100000)
    });
});

// handling error


module.exports = app;