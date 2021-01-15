
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/',name:'Signout'}];
  const title ="Library";

  res.render('addbook',{nav ,title,style:'book.css'});
});



module.exports = router;
