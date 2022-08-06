const {google, authenticate} = require('./google');
const isLoggedIn = require('../middlewares/isLoggedIn');
const index = require('./index');
const failed = require('./failed');
const logged = require('./logged');
const logout = require('./logout');

exports.assignRoutes = function (app) {
    app.get('/', index);
    app.get('/failed', failed);
    app.get('/logged', isLoggedIn, logged);
    app.get('/logout', logout)
    app.get('/google/callback', authenticate.passportAutenticate, authenticate.callback);
    app.get('/google', google);
}