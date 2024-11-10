'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

// Đếm số lượng connections
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections::${numConnection}`);
}

// Kiểm qua overload
const checkOverLoad = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length

        const numCores = os.cpus().length; // đếm số lượng core
        const memoryUsage = process.memoryUsage().rss; 

        // giả sử: mỗi core chịu được 5 connections
        const maxConnections = numCores * 5; 

        console.log(`Active connections::${numConnection}`)
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

        // số số lượng connections lớn hơn số lượng connections tối đa chịu được
        if(numConnection > maxConnections) {
            console.log(`Connection overload detected!`)
            //notify.send(....)
        }

    }, _SECONDS) // Giám sát mỗi 5ms
}

module.exports = {
    countConnect,
    checkOverLoad
}