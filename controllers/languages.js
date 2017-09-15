var express = require('express');
var languageRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;


var db;
  //get languages for DB send back to client

MongoClient.connect('mongodb://localhost:27017/program_education', function(err, database){
    if (err) return;
    db = database;
})

//index
languageRouter.get('/', function(req, res){
    db.collection('languages').find().toArray(function(err, results){
        if(err) console.log("oops " + err);
        res.json(results);
    })
})

//show

//edit

//update

// create

//delete


module.exports = languageRouter;

