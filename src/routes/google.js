const passport = require('passport')

module.exports = { 
    google: passport.authenticate('google', { scope: ['profile', 'email'] }),
    authenticate: {
        passportAutenticate: passport.authenticate('google', { failureRedirect: '/failed' }),
        callback: function(req, res) {
                res.redirect('/logged');
            }
        }
}