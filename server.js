// khai báo port và khởi động server
const app = require('./src/app');

const PORT = process.env.PORT || 3055;

const server = app.listen( PORT, () => {
    console.log(`Web service eCommerce start with port ${PORT}`);
});

// process là quy trình trong nodejs, SIGINT nghĩa là khi ctrl + C
process.on('SIGINT', () => {
    server.close( () => console.log('Exit Server Express'));
    server.exit(0);
});