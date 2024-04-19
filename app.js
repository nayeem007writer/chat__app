const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const loginRouter = require('./router/login-router')
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorhandler');

const app = express();
dotenv.config();

// database intregation
mongoose.connect(process.env.MONGo_CONNECTION_STRING)
.then(() => console.log('database connection sucessful!'))
.catch((err) => console.log(err))


//request parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// set view engine
app.set('view engine',"ejs");


//set static folder
app.use(express.static(path.join(__dirname,"public")))

// parse cookie 
app.use(cookieParser(process.env.COOKIE_SECRET))


// routing setup
app.use('/', loginRouter);
// app.use('/users',usersRouter);
// app.use('/inbox',inboxRouter);


// error handling
app.use(notFoundHandler);


// common handler
app.use(errorHandler);


app.listen(process.env.PORT, () =>{
    console.log(`app listing on port: ${process.env.PORT}`)
})
