const express = require('express');
const router = express.Router();
const { getUsers }= require('../controller/users-controller');
const decorateHtmlresponse = require('../middlewares/common/decorate-html');

const myMiddleware = (req, res, next) => {

    next(); // Call the next middleware function
  };

//login page
router.get('/', myMiddleware,getUsers);

module.exports =  router;