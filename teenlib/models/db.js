const mongoose =  require('mongoose')

mongoose.connect('mongodb://localhost:27017/libbapp',{useNewUrlParser: true},(err)=> {
    if(!err){console.log("database created")}
    else{console.log("error detected" + err)}
})

require('../models/libschema') 