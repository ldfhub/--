var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1.html', { title: '黎明花开' });
});

module.exports = router;
