var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/',name:'Signout'}];
  const title ="Library";
  const data = [{imglink:"data:image/webp;base64,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",name:"The Lord Of The Rings",authors:"J.R.R.Tolkien"},{imglink:"https://images-na.ssl-images-amazon.com/images/I/81zgGfR5TtL.jpg",name:"You Can Win",authors:"Shir Khere"},{imglink:"https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",name:"The Alchemist",authors:"Paulo Coelho"}];

  res.render('books',{nav ,title,data,style:'book.css'});
});

module.exports = router;
