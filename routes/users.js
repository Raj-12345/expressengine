var express = require('express');
var router = express.Router();
var userscontroller=require('../controllers/users.controller');
/* GET users listing. */
router.get('/get', function(req, res, next) {

  
  userscontroller.get(req,res,next);

});



router.post('/login', function(req, res, next) {

  
  userscontroller.userslogin(req,res,next);

});


router.post('/register', function(req, res, next) {

  
  userscontroller.usersregister(req,res,next);

});

module.exports = router;
