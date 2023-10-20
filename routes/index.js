var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/payment', function(req, res, next) {
  console.log(req.query.testParam)
  const testResponse = req.query.testParam;
  res.send(testResponse);
});

module.exports = router;
