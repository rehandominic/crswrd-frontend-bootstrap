const express = require("express");
const bodyParser = require("body-parser");


const app = express(); 

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html");
});

app.get("/ios",function(req,res) {
    res.sendFile(__dirname+"/ios.html");
});

app.get("/about",function(req,res) {
    res.sendFile(__dirname+"/about.html");
});

app.get("/play",function(req,res) {
    res.sendFile(__dirname+"/play.html");
});

app.get("/faq",function(req,res) {
    res.sendFile(__dirname+"/faq.html");
});

app.get("/donate",function(req,res) {
    res.sendFile(__dirname+"/donate.html");
});

app.listen(3000, function() {
    console.log("Server is running on Port 3000.");
});