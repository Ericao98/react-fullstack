const express = require('express');
const app = express();
const userRouter = require('./user');
const Model = require('./model');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use('/user', userRouter);

app.listen(9093, function() {
    console.log('Node app start at port 9093');
})
