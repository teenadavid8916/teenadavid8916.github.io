var express = require('express');
var router = express.Router();

const mongoose = require("mongoose")
var addbooks = mongoose.model('addbooks')
var Addbooks = new addbooks();

/* GET home page. */
router.get('/', function (req, res, next) {

  const nav = [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }, { link: '/', name: 'Signout' }];
  const title = "Library";

  var Addbooks = new addbooks();

  addbooks.find()
  .then(function(list){
    res.render('books',{nav ,list,title,style:'book.css'});
  })


 });

 router.get('/:id',(req,res)=>{
  
  const id = req.params.id;

   addbooks.deleteOne(id).then(res.redirect('/books'))
 })
module.exports = router;
