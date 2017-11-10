var HomeController = require('./controllers/HomeController');
var ApiController = require('./controllers/ApiController');

// Routes
module.exports = function (app) {

    // Main Routes

    app.get('/', HomeController.Index);
    app.get('/other', HomeController.Other);

    //api routes
    app.get('/api', ApiController.data);

};