const chatRouter = require('./chat.route')

function route(app) {
    app.use('/chat',chatRouter)
}

module.exports = route;