var express = require('express');
var router = express.Router();

/* GET author page. */
router.get('/', function(req, res, next) {
  const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/',name:'Signout'}];
  const title ="Library";
  const data = [  {imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ShivKhera.jpg/220px-ShivKhera.jpg",name:"Shir Khere",authors:"Indian author"},
  {imglink:"https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg",name:"J.R.R.Tolkien",authors:"South Africa author"},
{imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Coelhopaulo26012007-1.jpg/220px-Coelhopaulo26012007-1.jpg",name:"Paulo Coelho",authors:"Brazil Author"}];
  res.render('authors',{nav ,title,data,style:'book.css'});
});

/* GET author alone page. */
router.get('/:id', function(req, res, next) {

  const id = req.params.id; // to get the index

  const nav =[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/',name:'Signout'}];
  const title ="Library";
  const data = [ {imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ShivKhera.jpg/220px-ShivKhera.jpg",name:"Shir Khere",authors:"Indian author",book1:"You Can Achieve More",book2:"You Can Win"},
  {imglink:"https://cdn.britannica.com/65/66765-050-63A945A7/JRR-Tolkien.jpg",name:"J.R.R.Tolkien",authors:"South Africa author",book1:"The Hobbit",book2:"The Silmarillion"},
 {imglink:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Coelhopaulo26012007-1.jpg/220px-Coelhopaulo26012007-1.jpg",name:"Paulo Coelho",authors:"Brazil Author",book1:"Eleven Minutes",book2:"The Alchemist"}];
  // console.log(data[0]);
  // console.log(data[id]);
  authordeatil = data[id];
  res.render('author',{nav ,title,data,authordeatil,style:'book.css'});
});

module.exports = router;
