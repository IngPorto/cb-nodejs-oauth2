module.exports = (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
}