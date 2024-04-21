// Get Users Page
function getUsers(req, res, next) {
    res.locals.title = "users"
    res.render("users");
}

module.exports = {
    getUsers,
}