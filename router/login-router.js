const express = require('express');
const router = express.Router();
const { getLogin }= require('../controller/login-controller');
const decorateHtmlresponse = require('../middlewares/common/decorate-html')

const myMiddleware = (req, res, next) => {

    next(); // Call the next middleware function
  };

//login page  decorateHtmlresponse('Login'),
router.get('/', myMiddleware, getLogin);

module.exports =  router;
