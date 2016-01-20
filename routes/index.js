const express = require('express'),
      Config = require('../js/Config'),
      router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/blocks', function(req, res) {
  res.render('index');
});

router.get('/block/:hash', function(req, res) {
  res.render('index');
});

router.get('/address/:hash', function(req, res) {
  res.render('index');
});

router.get('/tx/:hash', function(req, res) {
  res.render('index');
});

module.exports = router;
