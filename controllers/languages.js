var express = require('express');
var languageRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;


var db;
  //get languages for DB send back to client

MongoClient.connect('mongodb://localhost:27017/program_education', function(err, database){
    if (err) return;
    db = database;
})

//show
languageRouter.get('/:id', function(req, res){
    db.collection('languages').find({id: parseInt(req.params['id'])}).toArray(function(err, results){
        if(err) console.log("database connection failed " + err);
        res.json(results);
    })
})

//index
languageRouter.get('/', function(req, res){
    db.collection('languages').find().toArray(function(err, results){
        if(err) console.log("error with request: " + err);
        res.json(results);
    })
})



//FOR EXTENSION
//edit
//update
// create
//delete


module.exports = languageRouter;

