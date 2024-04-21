const express = require('express');
const router = express.Router();
const { getInbox }= require('../controller/inbox-controller');
const decorateHtmlresponse = require('../middlewares/common/decorate-html');

const myMiddleware = (req, res, next) => {
    next(); // Call the next middleware function
  };

//login page
router.get('/', myMiddleware,getInbox);

module.exports =  router;