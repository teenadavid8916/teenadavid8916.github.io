
var express = require('express');
var router = express.Router();

const mongoose = require("mongoose")
var addbooks = mongoose.model('addbooks')

/* GET home page. */
router.get('/', function(req, res, next) {

  const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/',name:'Signout'}];
  const title ="Library";

  res.render('addbook',{nav ,title,style:'book.css'});
});

router.post('/',(req,res)=>{
  // console.log(req.body)
  insertbook(req,res);
})

function insertbook(req,res){
  var Addbooks= new addbooks();
  Addbooks.bookName=req.body.bookName;
  Addbooks.authorName=req.body.authorName;
  Addbooks.image=req.body.image;
  Addbooks.save((err,doc)=>{
    if(!err){ res.redirect('/books') }
    else{ console.log("error" + err)}
  })
}







module.exports = router;
