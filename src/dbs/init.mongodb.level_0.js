'use strict'

const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/shopDEV`;

mongoose.connect(connectString)
    .then( _ => console.log('Connected MongoDb Success'))
    .catch( error => console.log('Error connect'))


// dev env
if(1 === 1) {
    mongoose.set('debug', true);
    mongoose.set('debug', { color: true });
} 


module.exports = mongoose;

// không nên dùng vì lỡ mà dùng nhiều ngôn ngữ khác thì nó sẽ require nhiều lần cái mongoose. nhưng đối với node thì nó chỉ có 1 lần