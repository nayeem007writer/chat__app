const express = require('express');
const router = express.Router();
const { getLogin }= require('../controller/login-controller');

const myMiddleware = (req, res, next) => {

    next(); // Call the next middleware function
  };

//login page
router.get('/', myMiddleware,getLogin);

module.exports =  router;
