'use strict'

const mongoose = require('mongoose');
const {countConnect} = require('../helpers/check.connect');

const {db: {host, port, name}} = require('../config/mongodb.config');

const connectionString = `mongodb://${host}:${port}/${name}`;

class Database {

    constructor() {
        this.connect();
    }

    connect(type='mongodb') {
        // dev env
        if(1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        } 
        
        mongoose.connect(connectionString, { maxPoolSize: 50 })
            .then( _ => {
                console.log(`Tên của database: ${connectionString}`);
                console.log(`Connected Mongodb Success`);
            })
            .catch( error => console.log('Error connect'))
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;

// Singleton Pattern: https://www.youtube.com/watch?v=UybOa4xiW_c
// nếu có nhiều db khác thì ta dùng strategy pattern để init