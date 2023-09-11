var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/page', function(req, res, next) {
  res.render('page1', { title: 'Express' });
});
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Express' });
});

module.exports = router;
