var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  const nav =[{link:'/login',name:'Login'},{link:'/signup',name:'Signup'}];
  const title ="Library";

  res.render('login',{nav ,title,style:'book.css'});
});

module.exports = router;