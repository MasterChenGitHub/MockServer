var express = require('express');
var router = express.Router();

/* GET login page. */
router.post('/', function(req, res, next) {

console.log(req.body)
  console.log('called')
  res.json({msg:'success',code:200,errorMsg:'没有错误',data:{...req.body}});
});

module.exports = router;
