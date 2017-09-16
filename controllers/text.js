var express = require('express');
var textRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://localhost:27017/program_education', function(err, database) {
  if(err) return "database connection failed";
  db = database;
});

//show
textRouter.get('/:id', function(req, res){
  db.collection('text').find({name: req.params.id}).toArray(function(err, results){
    if(err) console.log("error: " + err);
    res.json(results);
  });
})