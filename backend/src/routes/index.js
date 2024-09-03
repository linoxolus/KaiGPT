const router = require('express').Router();
const chatRouter = require('./chat.route');

function setupRoute() {
    router.use('/chat', chatRouter);
}

function route(app) {
    setupRoute();
    app.use('/API', router);
}

module.exports = route;
