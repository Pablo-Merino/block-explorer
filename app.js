// Modules
const express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      debug = require('debug')('block-explorer'),
      path = require('path');

// Routes
const indexRoute = require('./routes/index');

// Config
const Config = require('./js/Config'),
      Handlebars = require('./js/Handlebars');

var app = express();

app.engine('hbs', Handlebars.engine)
app.set('view engine', 'hbs')

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/public',  express.static(__dirname + '/public'));

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);

app.use(function(req, res){
  debug('404 - ' + req.path);
  res.status(404);
  res.render('error');
});

module.exports = app;
