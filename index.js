var express = require('express');
var http = require('http');
var config = require('./configuration');

var app = express();
var server = app.listen(config.port);
console.log("Express server listening on port "+ config.port);

app.get('/',index);

function index(req,res){
   res.send('Hello ' + config.say);
}
