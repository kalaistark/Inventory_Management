var express = require("express")
var app = express()

app.use(express.static("public"));

app.get('/',function(req,res){
    res.render("index.ejs")
})

app.get("/list",function(req,res){
    res.render("index1.ejs")
})

app.get("/add",function(req,res){
    res.render("index2.ejs")
})

app.listen(8000,function(){
    console.log("Server started");
})