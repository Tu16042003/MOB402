var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

const mongoose = require('mongoose');
require('./component/category/CategoryModel');
require('./component/products/ProductModel');


var usersRouter = require('./routes/users');

var productapiRouter = require('./routes/api/ProductAPI');
var userapiRouter = require('./routes/api/UserAPI');
var productcpRouter = require('./routes/cpanel/ProductCP');
var usercpRouter = require('./routes/cpanel/UserCP');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'iloveyou',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));

//setup mongoose
mongoose.connect('mongodb://127.0.0.1:27017/MOB402', {
  // mongodb+srv://tupqps24388:123@cluster0.psnw2er.mongodb.net/MOB402?retryWrites=true&w=majority
  // mongodb://127.0.0.1:27017/MOB402
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));


// http://localhost:3000/

//  http://localhost:3000/users/
app.use('/', usersRouter);

app.use('/api/user', userapiRouter);
app.use('/api/product', productapiRouter);
app.use('/cpanel/user', usercpRouter);
app.use('/cpanel/product', productcpRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);      
  res.render('error');
});

module.exports = app;
