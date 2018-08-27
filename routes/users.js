var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.toString())
  // res.send('{userId:}');
  res.json({msg:'success',code:200});
});






module.exports = router;
