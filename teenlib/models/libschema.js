const mongoose = require("mongoose")

var bookschema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    image:String
});

mongoose.model('addbooks', bookschema)