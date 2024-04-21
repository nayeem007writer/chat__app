// Get Inbox Page
function getInbox(req, res, next) {
    res.locals.title = "inbox"
    res.render("inbox");
}

module.exports = {
    getInbox,
}