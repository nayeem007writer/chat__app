function decorateHtmlresponse (pageTile) {
    return function (req, res, next) {
        res.locals.html = ture;
        res.locals.title = `${pageTile}- ${process.env.APP_NAME}`;

        next();
    }
}

module.exports = decorateHtmlresponse;