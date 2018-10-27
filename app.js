var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var category=require('./routes/category_router');
var categorybyid=require('./routes/categorybyid_router');
var subcategory=require('./routes/subcategory_router');
var subcat=require('./routes/joincategory_router');
var subcatbyid=require('./routes/subcatbyid');
var item=require('./routes/item_router');
var itembyid=require('./routes/itembyid_router');
var itemjoin=require('./routes/joinitem_router');
var order=require('./routes/order_router');
var orderbyid=require('./routes/orderbyid_router');
var orderjoin=require('./routes/joinorder_router');
var visitingcard=require('./routes/visitingcard_router');
var cardbycname=require('./routes/visitingcardbycname_router');
var cardjoin=require('./routes/joinvisitingcard_router');
var envelop=require('./routes/envelop_router');
var envelopbycname=require('./routes/envelopbycname_router');
var joinenvelop=require('./routes/joinenvelop_router');
var label=require('./routes/label_router');
var labelbycname=require('./routes/labelbycname_router');
var joinlabel=require('./routes/joinlabel_router');
var user=require('./routes/users');
var signup=require('./routes/signup_router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/category',category);
app.use('/categorybyid',categorybyid);
app.use('/subcategory',subcategory);
app.use('/subcat',subcat);
app.use('/subcatbyid',subcatbyid);
app.use('/user',user);
app.use('/signup',signup);
app.use('/item',item);
app.use('/itembyid',itembyid);
app.use('/joinitem',itemjoin);
app.use('/order',order);
app.use('/orderbyid',orderbyid);
app.use('/joinorder',orderjoin);
app.use('/visitingcard',visitingcard);
app.use('/cardbycname',cardbycname);
app.use('/joincard',cardjoin);
app.use('/envelop',envelop);
app.use('/envelopbycname',envelopbycname);
app.use('/joinenvelop',joinenvelop);
app.use('/label',label);
app.use('/labelbycname',labelbycname);
app.use('/joinlabel',joinlabel);
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
