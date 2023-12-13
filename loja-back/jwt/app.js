var express = require('express');
var path = require('path');
var logger = require('morgan');
require('./config/database');
var usersRouter = require('./routes/users');
const exp = require('constants');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/users', usersRouter);
app.listen(5000, () => {
console.log(`Servidor está escutando na porta 5000`);
});
module.exports = app;