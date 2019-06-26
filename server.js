var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/college";
var bodyParser = require('body-parser');
var Promise = require('promise');
var path = require('path');

var express = require('express');
var app = express();
var http = require('http');

/*MongoClient.connect(url, function(err, db) {
    if(db){
        var dbo = db.db("college");
        dbo.collection("girls").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    }
    else{
        console.log("error in connecting MongoDB", err)
    }
});*/
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

/*MongoClient.connect(url, function(err, db) {
    if(db){
        app.db = db;
    }
    else{
        console.log("error in connecting MongoDB", err)
    }
});*/
MongoClient.connect(url)
    .then(function(db) {
        app.db = db;
    })

app.use(express.static(path.join(__dirname, './client')));
var hostPort=Number("8088");

http.createServer(app).listen(hostPort);

console.log("Server Running port:"+hostPort);

// route
var WebRoutes = require("./router.js");
var webRoutes = new WebRoutes(app);
webRoutes.init();
