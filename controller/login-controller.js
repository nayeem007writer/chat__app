// Get Login Page
function getLogin(req, res, next) {
    res.locals.title = "login"
    res.render("index");
}

module.exports = {
    getLogin,
}